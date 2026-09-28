-- ZOINHO GAMES PLATFORM v1.8.0

-- Perfis públicos + títulos equipáveis + histórico público de jogos jogados.

-- Pré-requisitos: v1.6.0 (user_profiles/game_saves) e v1.7.0 (user_roles/games/game_reviews).

-- Reexecutável com segurança.

create extension if not exists pgcrypto;

-- ================================================================

-- 1) CATÁLOGO DE TÍTULOS

-- ================================================================

create table if not exists public.titles (

  id text primary key,

  name_pt text not null,

  name_en text not null,

  description_pt text not null default '',

  description_en text not null default '',

  style_key text not null default 'default',

  active boolean not null default true,

  created_at timestamptz not null default now(),

  constraint titles_id_format check (id ~ '^[a-z0-9][a-z0-9-]{1,63}$'),

  constraint titles_name_not_blank check (length(btrim(name_pt)) > 0 and length(btrim(name_en)) > 0)

);

create table if not exists public.user_titles (

  user_id uuid not null references auth.users(id) on delete cascade,

  title_id text not null references public.titles(id) on delete cascade,

  source_type text not null default 'system',

  source_ref text,

  awarded_at timestamptz not null default now(),

  primary key (user_id, title_id)

);

create table if not exists public.user_equipped_titles (

  user_id uuid not null references auth.users(id) on delete cascade,

  slot smallint not null check (slot between 1 and 3),

  title_id text not null references public.titles(id) on delete cascade,

  equipped_at timestamptz not null default now(),

  primary key (user_id, slot),

  unique (user_id, title_id)

);

alter table public.titles enable row level security;

alter table public.user_titles enable row level security;

alter table public.user_equipped_titles enable row level security;

-- Clientes não concedem títulos diretamente. Toda escrita passa por lógica controlada.

revoke all on public.titles from anon, authenticated;

revoke all on public.user_titles from anon, authenticated;

revoke all on public.user_equipped_titles from anon, authenticated;

-- Primeiro título real da plataforma.

insert into public.titles(id, name_pt, name_en, description_pt, description_en, style_key, active)

values (

  'admin',

  'Admin',

  'Admin',

  'Administrador oficial da ZOINHO GAMES.',

  'Official ZOINHO GAMES administrator.',

  'admin',

  true

)

on conflict (id) do update set

  name_pt = excluded.name_pt,

  name_en = excluded.name_en,

  description_pt = excluded.description_pt,

  description_en = excluded.description_en,

  style_key = excluded.style_key,

  active = true;

-- Mantém o título ADMIN sincronizado com o cargo real no banco.

create or replace function public.zoinho_sync_role_titles()

returns trigger

language plpgsql

security definer

set search_path = public

as $$

declare

  v_user uuid;

  v_is_admin boolean;

begin

  if tg_op = 'DELETE' then

    v_user := old.user_id;

    v_is_admin := false;

  else

    v_user := new.user_id;

    v_is_admin := new.role = 'admin';

  end if;

  if v_is_admin then

    insert into public.user_titles(user_id, title_id, source_type, source_ref)

    values (v_user, 'admin', 'role', 'admin')

    on conflict (user_id, title_id) do update

      set source_type = 'role', source_ref = 'admin';

  else

    delete from public.user_equipped_titles

      where user_id = v_user and title_id = 'admin';

    delete from public.user_titles

      where user_id = v_user and title_id = 'admin';

  end if;

  if tg_op = 'DELETE' then return old; end if;

  return new;

end;

$$;

revoke all on function public.zoinho_sync_role_titles() from public;

drop trigger if exists zoinho_user_roles_titles_sync on public.user_roles;

create trigger zoinho_user_roles_titles_sync

after insert or update or delete on public.user_roles

for each row execute function public.zoinho_sync_role_titles();

-- Backfill para admins que já existiam antes deste trigger.

insert into public.user_titles(user_id, title_id, source_type, source_ref)

select ur.user_id, 'admin', 'role', 'admin'

from public.user_roles ur

where ur.role = 'admin'

on conflict (user_id, title_id) do update

  set source_type = 'role', source_ref = 'admin';

-- Retorna somente os títulos que a própria conta possui.

create or replace function public.zoinho_get_my_titles()

returns table(

  title_id text,

  name_pt text,

  name_en text,

  description_pt text,

  description_en text,

  style_key text,

  awarded_at timestamptz,

  equipped_slot smallint

)

language sql

stable

security definer

set search_path = public

as $$

  select t.id,

         t.name_pt,

         t.name_en,

         t.description_pt,

         t.description_en,

         t.style_key,

         ut.awarded_at,

         uet.slot

  from public.user_titles ut

  join public.titles t on t.id = ut.title_id and t.active = true

  left join public.user_equipped_titles uet

    on uet.user_id = ut.user_id and uet.title_id = ut.title_id

  where ut.user_id = auth.uid()

  order by coalesce(uet.slot, 32767), ut.awarded_at, t.id;

$$;

revoke all on function public.zoinho_get_my_titles() from public;

grant execute on function public.zoinho_get_my_titles() to authenticated;

-- Usuário escolhe até três títulos, mas somente entre os que realmente ganhou.

create or replace function public.zoinho_set_equipped_titles(p_title_ids text[])

returns table(

  title_id text,

  name_pt text,

  name_en text,

  description_pt text,

  description_en text,

  style_key text,

  equipped_slot smallint

)

language plpgsql

security definer

set search_path = public

as $$

declare

  v_user uuid := auth.uid();

  v_ids text[] := '{}';

  v_id text;

  v_slot smallint := 0;

begin

  if v_user is null then

    raise exception 'authentication_required' using errcode = '42501';

  end if;

  -- Preserva a ordem recebida, remove vazios e rejeita duplicatas silenciosamente.

  foreach v_id in array coalesce(p_title_ids, '{}'::text[]) loop

    v_id := btrim(coalesce(v_id, ''));

    if v_id = '' or v_id = any(v_ids) then continue; end if;

    v_ids := array_append(v_ids, v_id);

  end loop;

  if cardinality(v_ids) > 3 then

    raise exception 'title_limit_exceeded' using errcode = '22023';

  end if;

  if exists (

    select 1

    from unnest(v_ids) requested(id)

    where not exists (

      select 1

      from public.user_titles ut

      join public.titles t on t.id = ut.title_id and t.active = true

      where ut.user_id = v_user and ut.title_id = requested.id

    )

  ) then

    raise exception 'title_not_owned' using errcode = '42501';

  end if;

  delete from public.user_equipped_titles where user_id = v_user;

  foreach v_id in array v_ids loop

    v_slot := v_slot + 1;

    insert into public.user_equipped_titles(user_id, slot, title_id)

    values (v_user, v_slot, v_id);

  end loop;

  return query

  select t.id, t.name_pt, t.name_en, t.description_pt, t.description_en,

         t.style_key, uet.slot

  from public.user_equipped_titles uet

  join public.titles t on t.id = uet.title_id and t.active = true

  where uet.user_id = v_user

  order by uet.slot;

end;

$$;

revoke all on function public.zoinho_set_equipped_titles(text[]) from public;

grant execute on function public.zoinho_set_equipped_titles(text[]) to authenticated;

-- ================================================================

-- 2) ATIVIDADE DE JOGOS, SEM EXPOR CLOUD SAVE

-- ================================================================

create table if not exists public.user_game_activity (

  user_id uuid not null references auth.users(id) on delete cascade,

  game_id text not null references public.games(id) on delete cascade,

  first_played_at timestamptz not null default now(),

  last_played_at timestamptz not null default now(),

  launch_count integer not null default 1 check (launch_count >= 1),

  primary key (user_id, game_id)

);

alter table public.user_game_activity enable row level security;

revoke all on public.user_game_activity from anon, authenticated;

create index if not exists user_game_activity_user_last_idx

  on public.user_game_activity(user_id, last_played_at desc);

-- O portal chama esta RPC somente depois de abrir o jogo com sucesso.

create or replace function public.zoinho_mark_game_played(p_game_id text)

returns void

language plpgsql

security definer

set search_path = public

as $$

declare

  v_user uuid := auth.uid();

begin

  if v_user is null then return; end if;

  if not exists (select 1 from public.games g where g.id = p_game_id and g.published = true) then

    raise exception 'game_not_available' using errcode = '22023';

  end if;

  insert into public.user_game_activity as activity(user_id, game_id)

  values (v_user, p_game_id)

  on conflict (user_id, game_id) do update

    set last_played_at = now(),

        launch_count = activity.launch_count + 1;

end;

$$;

revoke all on function public.zoinho_mark_game_played(text) from public;

grant execute on function public.zoinho_mark_game_played(text) to authenticated;

-- Migra discretamente jogos que já possuem Cloud Save para "jogados", sem copiar save_data.

insert into public.user_game_activity(user_id, game_id, first_played_at, last_played_at, launch_count)

select s.user_id,

       s.game_id,

       min(coalesce(s.client_updated_at, s.updated_at, now())),

       max(coalesce(s.client_updated_at, s.updated_at, now())),

       1

from public.game_saves s

join public.games g on g.id = s.game_id

where g.published = true

group by s.user_id, s.game_id

on conflict (user_id, game_id) do nothing;

-- ================================================================

-- 3) RPC DE PERFIL PÚBLICO

-- ================================================================

-- Retorna somente campos explicitamente públicos. Não lê save_data, revision,

-- save keys, e-mail, UUIDs internos adicionais ou qualquer payload de Cloud Save.

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

      'verified_player', exists(

        select 1 from public.game_saves s

        where s.user_id = r.user_id and s.game_id = r.game_id

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

    'avatar_data_url', coalesce(v_profile.avatar_data_url, ''),

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

-- ================================================================

-- 4) AVALIAÇÕES PÚBLICAS AGORA CARREGAM OS TÍTULOS EQUIPADOS

-- ================================================================

drop function if exists public.zoinho_get_game_reviews(text, integer, integer);

create function public.zoinho_get_game_reviews(p_game_id text, p_limit integer default 50, p_offset integer default 0)

returns table(

  id uuid,

  user_id uuid,

  nickname text,

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

         coalesce(p.avatar_data_url, '') as avatar_data_url,

         r.rating,

         r.comment,

         exists(select 1 from public.game_saves s where s.user_id=r.user_id and s.game_id=r.game_id) as verified_player,

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

  join public.games g on g.id=r.game_id and g.published=true

  left join public.user_profiles p on p.user_id=r.user_id

  where r.game_id=p_game_id and r.is_hidden=false

  order by r.updated_at desc

  limit greatest(1, least(coalesce(p_limit,50),100))

  offset greatest(coalesce(p_offset,0),0);

$$;

grant execute on function public.zoinho_get_game_reviews(text, integer, integer) to anon, authenticated;
