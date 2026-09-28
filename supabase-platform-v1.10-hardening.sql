-- ZOINHO GAMES PLATFORM v1.10.0 — hardening de Cloud Save, avatares e integridade
-- Pré-requisitos: Cloud Save v1.3, perfis v1.6, plataforma v1.7 e perfis públicos/títulos v1.8.
-- Reexecutável com segurança.
--
-- Objetivos:
-- 1) Cloud Save com controle otimista de concorrência por revision;
-- 2) gate real de bridge_save_version antes de gravar/restaurar saves incompatíveis;
-- 3) avatares novos no Supabase Storage, mantendo avatar_data_url apenas como fallback legado;
-- 4) "Jogador verificado" baseado também em user_game_activity, não apenas game_saves;
-- 5) título equipado sempre precisa pertencer ao usuário.

-- ================================================================
-- 1) PERFIS: AVATAR EM STORAGE COM FALLBACK LEGADO
-- ================================================================

alter table public.user_profiles
  add column if not exists avatar_path text not null default '';

alter table public.user_profiles
  drop constraint if exists user_profiles_avatar_path_format;
alter table public.user_profiles
  add constraint user_profiles_avatar_path_format
  check (avatar_path = '' or avatar_path ~ '^[0-9a-fA-F-]{36}/[A-Za-z0-9._-]+$');

create or replace function public.zoinho_prepare_user_profile()
returns trigger
language plpgsql
security invoker
set search_path = public
as $$
begin
  -- Em UPDATE, a identidade efetiva é sempre a linha antiga. Fazemos isso antes
  -- de validar avatar_path para impedir que o cliente forje outro user_id apenas
  -- durante o trigger e associe o perfil ao diretório de avatar de outra conta.
  if tg_op = 'UPDATE' then
    new.user_id := old.user_id;
    new.created_at := old.created_at;
  end if;

  new.nickname := regexp_replace(btrim(coalesce(new.nickname, '')), '[[:space:]]+', ' ', 'g');
  new.nickname_key := lower(new.nickname);

  if char_length(new.nickname) < 2 or char_length(new.nickname) > 32 then
    raise exception 'nickname_invalid_length' using errcode = '22023';
  end if;

  if new.nickname ~ '[[:cntrl:]]' then
    raise exception 'nickname_invalid_characters' using errcode = '22023';
  end if;

  new.avatar_path := btrim(coalesce(new.avatar_path, ''));
  new.avatar_data_url := coalesce(new.avatar_data_url, '');

  -- avatar_data_url continua aceito apenas para perfis legados. Novos uploads usam Storage.
  if char_length(new.avatar_data_url) > 350000 then
    raise exception 'avatar_too_large' using errcode = '22023';
  end if;

  if new.avatar_data_url <> ''
     and new.avatar_data_url !~ '^data:image/(webp|jpeg|png);base64,' then
    raise exception 'avatar_invalid_format' using errcode = '22023';
  end if;

  if new.avatar_path <> '' and split_part(new.avatar_path, '/', 1) <> new.user_id::text then
    raise exception 'avatar_path_not_owned' using errcode = '42501';
  end if;

  if tg_op = 'INSERT' then
    new.nickname_changed_at := now();
    new.created_at := now();
    new.updated_at := now();
  else
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

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('profile-avatars', 'profile-avatars', true, 2097152, array['image/png','image/jpeg','image/webp'])
on conflict (id) do update set
  public = true,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists profile_avatars_public_read on storage.objects;
drop policy if exists profile_avatars_owner_insert on storage.objects;
drop policy if exists profile_avatars_owner_update on storage.objects;
drop policy if exists profile_avatars_owner_delete on storage.objects;

create policy profile_avatars_public_read on storage.objects
for select to anon, authenticated
using (bucket_id = 'profile-avatars');

create policy profile_avatars_owner_insert on storage.objects
for insert to authenticated
with check (
  bucket_id = 'profile-avatars'
  and (storage.foldername(name))[1] = auth.uid()::text
);

create policy profile_avatars_owner_update on storage.objects
for update to authenticated
using (
  bucket_id = 'profile-avatars'
  and (storage.foldername(name))[1] = auth.uid()::text
)
with check (
  bucket_id = 'profile-avatars'
  and (storage.foldername(name))[1] = auth.uid()::text
);

create policy profile_avatars_owner_delete on storage.objects
for delete to authenticated
using (
  bucket_id = 'profile-avatars'
  and (storage.foldername(name))[1] = auth.uid()::text
);

-- ================================================================
-- 2) TÍTULOS: EQUIPADO PRECISA SER REALMENTE POSSUÍDO
-- ================================================================

-- Limpa qualquer órfão histórico antes de instalar a FK composta.
delete from public.user_equipped_titles uet
where not exists (
  select 1
  from public.user_titles ut
  where ut.user_id = uet.user_id
    and ut.title_id = uet.title_id
);

do $$
begin
  if not exists (
    select 1 from pg_constraint
    where conname = 'user_equipped_titles_owned_fk'
      and conrelid = 'public.user_equipped_titles'::regclass
  ) then
    alter table public.user_equipped_titles
      add constraint user_equipped_titles_owned_fk
      foreign key (user_id, title_id)
      references public.user_titles(user_id, title_id)
      on delete cascade;
  end if;
end;
$$;

-- ================================================================
-- 3) CLOUD SAVE: ESCRITA ATÔMICA + REVISION + SAVE VERSION
-- ================================================================

create or replace function public.zoinho_write_game_save(
  p_game_id text,
  p_save_version integer,
  p_save_data jsonb,
  p_client_updated_at timestamptz,
  p_expected_revision bigint default null
)
returns table(
  status text,
  revision bigint,
  save_version integer,
  client_updated_at timestamptz,
  updated_at timestamptz
)
language plpgsql
security definer
set search_path = public
as $$
declare
  v_user uuid := auth.uid();
  v_catalog_version integer;
  v_row public.game_saves%rowtype;
begin
  if v_user is null then
    raise exception 'authentication_required' using errcode = '42501';
  end if;

  select g.bridge_save_version
    into v_catalog_version
  from public.games g
  where g.id = p_game_id
    and g.published = true
    and g.bridge_enabled = true;

  if not found then
    raise exception 'game_cloud_save_not_available' using errcode = '22023';
  end if;

  if p_save_version is null or p_save_version <= 0 then
    raise exception 'save_version_invalid' using errcode = '22023';
  end if;

  if p_save_version <> v_catalog_version then
    select * into v_row
    from public.game_saves s
    where s.user_id = v_user and s.game_id = p_game_id;

    return query select
      'version_mismatch'::text,
      v_row.revision,
      coalesce(v_row.save_version, v_catalog_version),
      v_row.client_updated_at,
      v_row.updated_at;
    return;
  end if;

  if p_save_data is null or jsonb_typeof(p_save_data) <> 'object' then
    raise exception 'save_data_invalid' using errcode = '22023';
  end if;

  if pg_column_size(p_save_data) > 524288 then
    raise exception 'save_data_too_large' using errcode = '22023';
  end if;

  select * into v_row
  from public.game_saves s
  where s.user_id = v_user and s.game_id = p_game_id
  for update;

  if found then
    if v_row.save_version <> p_save_version then
      return query select
        'version_mismatch'::text,
        v_row.revision,
        v_row.save_version,
        v_row.client_updated_at,
        v_row.updated_at;
      return;
    end if;

    if p_expected_revision is null or p_expected_revision <> v_row.revision then
      return query select
        'conflict'::text,
        v_row.revision,
        v_row.save_version,
        v_row.client_updated_at,
        v_row.updated_at;
      return;
    end if;

    update public.game_saves s
      set save_data = p_save_data,
          save_version = p_save_version,
          client_updated_at = coalesce(p_client_updated_at, now())
    where s.user_id = v_user
      and s.game_id = p_game_id
    returning s.* into v_row;

    return query select
      'updated'::text,
      v_row.revision,
      v_row.save_version,
      v_row.client_updated_at,
      v_row.updated_at;
    return;
  end if;

  if p_expected_revision is not null and p_expected_revision <> 0 then
    return query select
      'conflict'::text,
      null::bigint,
      v_catalog_version,
      null::timestamptz,
      null::timestamptz;
    return;
  end if;

  begin
    insert into public.game_saves(
      user_id, game_id, save_version, save_data, client_updated_at
    ) values (
      v_user, p_game_id, p_save_version, p_save_data, coalesce(p_client_updated_at, now())
    )
    returning * into v_row;
  exception when unique_violation then
    -- Outro dispositivo pode ter criado a linha exatamente entre o SELECT e o INSERT.
    select * into v_row
    from public.game_saves s
    where s.user_id = v_user and s.game_id = p_game_id;

    return query select
      'conflict'::text,
      v_row.revision,
      v_row.save_version,
      v_row.client_updated_at,
      v_row.updated_at;
    return;
  end;

  return query select
    'inserted'::text,
    v_row.revision,
    v_row.save_version,
    v_row.client_updated_at,
    v_row.updated_at;
end;
$$;

revoke all on function public.zoinho_write_game_save(text, integer, jsonb, timestamptz, bigint) from public;
grant execute on function public.zoinho_write_game_save(text, integer, jsonb, timestamptz, bigint) to authenticated;

-- A partir da v1.10, clientes autenticados leem seus saves pela tabela, mas toda
-- escrita passa obrigatoriamente pela RPC acima. Isso impede que um portal antigo
-- ou uma chamada manual faça UPSERT direto e contorne revision/save_version.
grant select on table public.game_saves to authenticated;
revoke insert, update, delete on table public.game_saves from authenticated;

-- ================================================================
-- 4) PERFIL PÚBLICO + REVIEWS: VERIFICAÇÃO POR ATIVIDADE E AVATAR PATH
-- ================================================================

create or replace function public.zoinho_get_public_profile(p_user_id uuid)
returns jsonb
language plpgsql
stable
security definer
set search_path = public
as $$
declare
  v_profile public.user_profiles%rowtype;
  v_titles jsonb := '[]'::jsonb;
  v_games jsonb := '[]'::jsonb;
  v_reviews jsonb := '[]'::jsonb;
begin
  select * into v_profile
  from public.user_profiles p
  where p.user_id = p_user_id;

  if not found or nullif(btrim(v_profile.nickname), '') is null then
    return null;
  end if;

  select coalesce(jsonb_agg(jsonb_build_object(
      'id', t.id,
      'name_pt', t.name_pt,
      'name_en', t.name_en,
      'description_pt', t.description_pt,
      'description_en', t.description_en,
      'style_key', t.style_key,
      'slot', uet.slot
    ) order by uet.slot), '[]'::jsonb)
  into v_titles
  from public.user_equipped_titles uet
  join public.titles t on t.id = uet.title_id and t.active = true
  join public.user_titles ut on ut.user_id = uet.user_id and ut.title_id = uet.title_id
  where uet.user_id = p_user_id;

  with played as (
    select a.game_id, a.last_played_at
    from public.user_game_activity a
    where a.user_id = p_user_id
    union all
    select s.game_id, coalesce(s.client_updated_at, s.updated_at)
    from public.game_saves s
    where s.user_id = p_user_id
  ), collapsed as (
    select game_id, max(last_played_at) as last_played_at
    from played
    group by game_id
  )
  select coalesce(jsonb_agg(jsonb_build_object(
      'game_id', g.id,
      'title', g.title,
      'image_url', g.image_url,
      'genres_pt', g.genres_pt,
      'genres_en', g.genres_en,
      'last_played_at', c.last_played_at
    ) order by c.last_played_at desc nulls last, g.title), '[]'::jsonb)
  into v_games
  from collapsed c
  join public.games g on g.id = c.game_id and g.published = true;

  select coalesce(jsonb_agg(jsonb_build_object(
      'id', r.id,
      'game_id', g.id,
      'game_title', g.title,
      'game_image_url', g.image_url,
      'rating', r.rating,
      'comment', r.comment,
      'verified_player', (
        exists(select 1 from public.user_game_activity a where a.user_id = r.user_id and a.game_id = r.game_id)
        or exists(select 1 from public.game_saves s where s.user_id = r.user_id and s.game_id = r.game_id)
      ),
      'created_at', r.created_at,
      'updated_at', r.updated_at
    ) order by r.updated_at desc), '[]'::jsonb)
  into v_reviews
  from public.game_reviews r
  join public.games g on g.id = r.game_id and g.published = true
  where r.user_id = p_user_id and r.is_hidden = false;

  return jsonb_build_object(
    'user_id', p_user_id,
    'nickname', v_profile.nickname,
    'avatar_path', coalesce(v_profile.avatar_path, ''),
    'avatar_data_url', case when coalesce(v_profile.avatar_path, '') = '' then coalesce(v_profile.avatar_data_url, '') else '' end,
    'titles', v_titles,
    'games_played', v_games,
    'reviews', v_reviews,
    'stats', jsonb_build_object(
      'games_played', jsonb_array_length(v_games),
      'reviews', jsonb_array_length(v_reviews)
    )
  );
end;
$$;

revoke all on function public.zoinho_get_public_profile(uuid) from public;
grant execute on function public.zoinho_get_public_profile(uuid) to anon, authenticated;

drop function if exists public.zoinho_get_game_reviews(text, integer, integer);
create function public.zoinho_get_game_reviews(
  p_game_id text,
  p_limit integer default 50,
  p_offset integer default 0
)
returns table(
  id uuid,
  user_id uuid,
  nickname text,
  avatar_path text,
  avatar_data_url text,
  rating numeric,
  comment text,
  verified_player boolean,
  equipped_titles jsonb,
  created_at timestamptz,
  updated_at timestamptz
)
language sql
stable
security definer
set search_path = public
as $$
  select r.id,
         r.user_id,
         coalesce(p.nickname, 'Jogador') as nickname,
         coalesce(p.avatar_path, '') as avatar_path,
         case when coalesce(p.avatar_path, '') = '' then coalesce(p.avatar_data_url, '') else '' end as avatar_data_url,
         r.rating,
         r.comment,
         (
           exists(select 1 from public.user_game_activity a where a.user_id = r.user_id and a.game_id = r.game_id)
           or exists(select 1 from public.game_saves s where s.user_id = r.user_id and s.game_id = r.game_id)
         ) as verified_player,
         coalesce((
           select jsonb_agg(jsonb_build_object(
             'id', t.id,
             'name_pt', t.name_pt,
             'name_en', t.name_en,
             'description_pt', t.description_pt,
             'description_en', t.description_en,
             'style_key', t.style_key,
             'slot', uet.slot
           ) order by uet.slot)
           from public.user_equipped_titles uet
           join public.titles t on t.id = uet.title_id and t.active = true
           join public.user_titles ut on ut.user_id = uet.user_id and ut.title_id = uet.title_id
           where uet.user_id = r.user_id
         ), '[]'::jsonb) as equipped_titles,
         r.created_at,
         r.updated_at
  from public.game_reviews r
  join public.games g on g.id = r.game_id and g.published = true
  left join public.user_profiles p on p.user_id = r.user_id
  where r.game_id = p_game_id and r.is_hidden = false
  order by r.updated_at desc
  limit greatest(1, least(coalesce(p_limit, 50), 100))
  offset greatest(coalesce(p_offset, 0), 0);
$$;

grant execute on function public.zoinho_get_game_reviews(text, integer, integer) to anon, authenticated;

-- ================================================================
-- 5) ÍNDICES AUXILIARES
-- ================================================================

create index if not exists user_game_activity_game_user_idx
  on public.user_game_activity(game_id, user_id);

create index if not exists games_published_title_idx
  on public.games(published, title);

-- Diagnóstico final resumido.
select
  'v1.10-ready' as status,
  to_regprocedure('public.zoinho_write_game_save(text,integer,jsonb,timestamp with time zone,bigint)') is not null as cloud_write_rpc,
  exists(select 1 from information_schema.columns where table_schema='public' and table_name='user_profiles' and column_name='avatar_path') as avatar_path_ready,
  exists(select 1 from storage.buckets where id='profile-avatars') as avatar_bucket_ready;
