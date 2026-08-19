-- ZOINHO GAMES — Perfis de usuário v1.6.0
-- Execute este arquivo UMA VEZ (pode ser reexecutado com segurança) no SQL Editor
-- do MESMO projeto Supabase usado pelo Cloud Save.
--
-- Objetivos:
-- 1) nickname único globalmente (ignorando maiúsculas/minúsculas e espaços repetidos);
-- 2) nickname e avatar disponíveis em qualquer dispositivo da mesma conta;
-- 3) troca de nickname limitada a uma vez a cada 2 horas;
-- 4) nenhuma conta pode ler/editar o perfil privado de outra conta via API.

create table if not exists public.user_profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  nickname text not null,
  nickname_key text not null,
  avatar_data_url text not null default '',
  nickname_changed_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.user_profiles enable row level security;

grant usage on schema public to authenticated;
grant select, insert, update on table public.user_profiles to authenticated;
revoke delete on table public.user_profiles from authenticated;
revoke all on table public.user_profiles from anon;

-- A normalização e o cooldown ficam no banco. Assim não podem ser contornados
-- apenas reativando um input no DevTools ou chamando a API manualmente.
create or replace function public.zoinho_prepare_user_profile()
returns trigger
language plpgsql
security invoker
set search_path = public
as $$
begin
  new.nickname := regexp_replace(btrim(coalesce(new.nickname, '')), '[[:space:]]+', ' ', 'g');
  new.nickname_key := lower(new.nickname);

  if char_length(new.nickname) < 2 or char_length(new.nickname) > 32 then
    raise exception 'nickname_invalid_length' using errcode = '22023';
  end if;

  if new.nickname ~ '[[:cntrl:]]' then
    raise exception 'nickname_invalid_characters' using errcode = '22023';
  end if;

  new.avatar_data_url := coalesce(new.avatar_data_url, '');
  if char_length(new.avatar_data_url) > 350000 then
    raise exception 'avatar_too_large' using errcode = '22023';
  end if;

  if new.avatar_data_url <> ''
     and new.avatar_data_url !~ '^data:image/(webp|jpeg|png);base64,' then
    raise exception 'avatar_invalid_format' using errcode = '22023';
  end if;

  if tg_op = 'INSERT' then
    new.nickname_changed_at := now();
    new.created_at := now();
    new.updated_at := now();
  else
    -- Campos de identidade/sistema não podem ser reescritos pelo cliente.
    new.user_id := old.user_id;
    new.created_at := old.created_at;

    if new.nickname is distinct from old.nickname then
      if old.nickname_changed_at > now() - interval '2 hours' then
        raise exception 'nickname_cooldown' using errcode = 'P0001';
      end if;
      new.nickname_changed_at := now();
    else
      new.nickname_changed_at := old.nickname_changed_at;
    end if;

    new.updated_at := now();
  end if;

  return new;
end;
$$;

grant execute on function public.zoinho_prepare_user_profile() to authenticated;

drop trigger if exists zoinho_user_profiles_prepare on public.user_profiles;
create trigger zoinho_user_profiles_prepare
before insert or update on public.user_profiles
for each row
execute function public.zoinho_prepare_user_profile();

-- O índice é a autoridade final da unicidade. Duas requisições simultâneas
-- tentando o mesmo nickname não conseguem passar juntas.
create unique index if not exists user_profiles_nickname_key_uidx
on public.user_profiles (nickname_key);

create index if not exists user_profiles_updated_at_idx
on public.user_profiles (updated_at desc);

-- RLS: cada usuário autenticado acessa somente a própria linha.
drop policy if exists "user_profiles_select_own" on public.user_profiles;
drop policy if exists "user_profiles_insert_own" on public.user_profiles;
drop policy if exists "user_profiles_update_own" on public.user_profiles;
drop policy if exists "user_profiles_delete_own" on public.user_profiles;

create policy "user_profiles_select_own"
on public.user_profiles
for select
to authenticated
using ((select auth.uid()) = user_id);

create policy "user_profiles_insert_own"
on public.user_profiles
for insert
to authenticated
with check ((select auth.uid()) = user_id);

create policy "user_profiles_update_own"
on public.user_profiles
for update
to authenticated
using ((select auth.uid()) = user_id)
with check ((select auth.uid()) = user_id);

-- DELETE não é concedido ao cliente. Isso impede apagar a própria linha e
-- recriá-la imediatamente como forma de contornar o cooldown do nickname.

-- Diagnóstico curto. Deve mostrar RLS = true e o índice UNIQUE.
select c.relname as table_name, c.relrowsecurity as rls_enabled
from pg_class c
join pg_namespace n on n.oid = c.relnamespace
where n.nspname = 'public' and c.relname = 'user_profiles';

select indexname, indexdef
from pg_indexes
where schemaname = 'public' and tablename = 'user_profiles'
order by indexname;
