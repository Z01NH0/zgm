-- ZOINHO GAMES - Cloud Save v1.2
-- Execute este arquivo inteiro no SQL Editor do MESMO projeto Supabase.
-- Pode ser reexecutado: ele ajusta tabela, grants, RLS, policies e trigger sem criar uma segunda tabela.

create table if not exists public.game_saves (
  user_id uuid not null references auth.users(id) on delete cascade,
  game_id text not null,
  save_version integer not null default 1,
  revision bigint not null default 1,
  save_data jsonb not null default '{}'::jsonb,
  client_updated_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  primary key (user_id, game_id)
);

-- Defesa contra uma tabela parcial/antiga: garante as colunas esperadas pela v1.2.
alter table public.game_saves add column if not exists save_version integer not null default 1;
alter table public.game_saves add column if not exists revision bigint not null default 1;
alter table public.game_saves add column if not exists save_data jsonb not null default '{}'::jsonb;
alter table public.game_saves add column if not exists client_updated_at timestamptz;
alter table public.game_saves add column if not exists created_at timestamptz not null default now();
alter table public.game_saves add column if not exists updated_at timestamptz not null default now();

alter table public.game_saves drop constraint if exists game_saves_game_id_not_blank;
alter table public.game_saves add constraint game_saves_game_id_not_blank check (length(trim(game_id)) > 0);

alter table public.game_saves drop constraint if exists game_saves_save_version_positive;
alter table public.game_saves add constraint game_saves_save_version_positive check (save_version > 0);

alter table public.game_saves drop constraint if exists game_saves_payload_limit;
alter table public.game_saves add constraint game_saves_payload_limit check (pg_column_size(save_data) <= 524288);

alter table public.game_saves drop constraint if exists game_saves_save_data_object;
alter table public.game_saves add constraint game_saves_save_data_object check (jsonb_typeof(save_data) = 'object');

alter table public.game_saves enable row level security;

-- Grants determinam se o papel pode alcançar a tabela. O RLS abaixo determina QUAIS linhas ele pode ver/alterar.
grant usage on schema public to authenticated;
grant select, insert, update, delete on table public.game_saves to authenticated;
revoke all on table public.game_saves from anon;

-- Recria as policies de forma determinística.
drop policy if exists "game_saves_select_own" on public.game_saves;
drop policy if exists "game_saves_insert_own" on public.game_saves;
drop policy if exists "game_saves_update_own" on public.game_saves;
drop policy if exists "game_saves_delete_own" on public.game_saves;

create policy "game_saves_select_own"
on public.game_saves
for select
to authenticated
using ((select auth.uid()) = user_id);

create policy "game_saves_insert_own"
on public.game_saves
for insert
to authenticated
with check ((select auth.uid()) = user_id);

create policy "game_saves_update_own"
on public.game_saves
for update
to authenticated
using ((select auth.uid()) = user_id)
with check ((select auth.uid()) = user_id);

create policy "game_saves_delete_own"
on public.game_saves
for delete
to authenticated
using ((select auth.uid()) = user_id);

create or replace function public.zoinho_touch_game_save()
returns trigger
language plpgsql
security invoker
set search_path = public
as $$
begin
  new.updated_at = now();
  if tg_op = 'UPDATE' then
    new.revision = old.revision + 1;
  end if;
  return new;
end;
$$;

grant execute on function public.zoinho_touch_game_save() to authenticated;

drop trigger if exists zoinho_game_saves_touch on public.game_saves;
create trigger zoinho_game_saves_touch
before update on public.game_saves
for each row
execute function public.zoinho_touch_game_save();

create index if not exists game_saves_game_id_idx on public.game_saves(game_id);
create index if not exists game_saves_updated_at_idx on public.game_saves(updated_at desc);

-- Diagnóstico simples para o SQL Editor. Deve retornar RLS = true.
select relname as table_name, relrowsecurity as rls_enabled
from pg_class
where oid = 'public.game_saves'::regclass;
