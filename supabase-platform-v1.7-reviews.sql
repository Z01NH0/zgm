-- ZOINHO GAMES PLATFORM v1.7.0 — Avaliações, comentários, moderação e logs

-- Execute depois de 01_admin_catalog.sql.

create extension if not exists pgcrypto;

create table if not exists public.game_reviews (

  id uuid primary key default gen_random_uuid(),

  user_id uuid not null references public.user_profiles(user_id) on delete cascade,

  game_id text not null references public.games(id) on delete cascade,

  rating numeric(2,1) not null,

  comment text not null default '',

  is_hidden boolean not null default false,

  created_at timestamptz not null default now(),

  updated_at timestamptz not null default now(),

  unique(user_id, game_id),

  constraint game_reviews_rating_range check (rating between 0.5 and 5.0),

  constraint game_reviews_rating_half_step check (mod((rating * 10)::integer, 5) = 0),

  constraint game_reviews_comment_limit check (char_length(comment) <= 800)

);

alter table public.game_reviews enable row level security;

-- A comunidade lê avaliações pela RPC segura abaixo. A tabela bruta fica acessível

-- somente a usuários autenticados e, via RLS, apenas ao autor/moderação.

revoke all on public.game_reviews from anon;

grant select, insert, update, delete on public.game_reviews to authenticated;

create or replace function public.zoinho_prepare_review()

returns trigger language plpgsql security invoker set search_path=public as $$

begin

  new.comment := btrim(coalesce(new.comment,''));

  if tg_op = 'INSERT' then

    new.user_id := auth.uid();

    new.is_hidden := false;

  elsif auth.uid() = old.user_id then

    -- O autor pode editar nota/comentário, mas não identidade, jogo ou estado de moderação.

    new.user_id := old.user_id;

    new.game_id := old.game_id;

    new.is_hidden := old.is_hidden;

  elsif public.zoinho_can_moderate() then

    -- Moderação pode ocultar/reexibir ou limpar comentário, nunca falsificar a nota/autor/jogo.

    new.user_id := old.user_id;

    new.game_id := old.game_id;

    new.rating := old.rating;

  end if;

  return new;

end; $$;

grant execute on function public.zoinho_prepare_review() to authenticated;

drop trigger if exists zoinho_game_reviews_prepare on public.game_reviews;

create trigger zoinho_game_reviews_prepare before insert or update on public.game_reviews

for each row execute function public.zoinho_prepare_review();

drop trigger if exists zoinho_game_reviews_touch on public.game_reviews;

create trigger zoinho_game_reviews_touch before update on public.game_reviews

for each row execute function public.zoinho_touch_updated_at();

drop policy if exists reviews_public_read on public.game_reviews;

drop policy if exists reviews_owner_read on public.game_reviews;

drop policy if exists reviews_owner_insert on public.game_reviews;

drop policy if exists reviews_owner_update on public.game_reviews;

drop policy if exists reviews_owner_delete on public.game_reviews;

drop policy if exists reviews_moderator_all on public.game_reviews;

-- Não há SELECT público direto na tabela: comentários públicos saem apenas pela

-- zoinho_get_game_reviews(), que não expõe e-mail nem campos privados do perfil.

create policy reviews_owner_read on public.game_reviews for select to authenticated using (user_id = auth.uid());

create policy reviews_owner_insert on public.game_reviews for insert to authenticated

with check (user_id = auth.uid() and exists (select 1 from public.games g where g.id = game_id and g.published = true));

create policy reviews_owner_update on public.game_reviews for update to authenticated

using (user_id = auth.uid()) with check (user_id = auth.uid() and is_hidden = false and exists (select 1 from public.games g where g.id = game_id and g.published = true));

create policy reviews_owner_delete on public.game_reviews for delete to authenticated using (user_id = auth.uid());

create policy reviews_moderator_all on public.game_reviews for all to authenticated

using (public.zoinho_can_moderate()) with check (public.zoinho_can_moderate());

create index if not exists game_reviews_game_visible_idx on public.game_reviews(game_id, is_hidden, updated_at desc);

create index if not exists game_reviews_user_idx on public.game_reviews(user_id, updated_at desc);

create table if not exists public.admin_audit_log (

  id bigint generated always as identity primary key,

  actor_user_id uuid references auth.users(id) on delete set null,

  actor_role text not null default 'user',

  action text not null,

  entity_type text not null,

  entity_id text,

  details jsonb not null default '{}'::jsonb,

  created_at timestamptz not null default now()

);

alter table public.admin_audit_log enable row level security;

grant select on public.admin_audit_log to authenticated;

revoke insert, update, delete on public.admin_audit_log from anon, authenticated;

drop policy if exists admin_audit_admin_read on public.admin_audit_log;

create policy admin_audit_admin_read on public.admin_audit_log for select to authenticated using (public.zoinho_is_admin());

create index if not exists admin_audit_created_idx on public.admin_audit_log(created_at desc);

create or replace function public.zoinho_audit_admin_changes()

returns trigger

language plpgsql

security definer

set search_path = public

as $$

declare

  v_role text := public.zoinho_user_role();

  v_entity_id text;

  v_action text;

  v_details jsonb := '{}'::jsonb;

begin

  if v_role not in ('admin','moderator') then

    if tg_op = 'DELETE' then return old; end if;

    return new;

  end if;

  v_action := lower(tg_op);

  if tg_table_name = 'games' then

    v_entity_id := coalesce(new.id, old.id);

    v_details := jsonb_build_object('title', coalesce(new.title, old.title), 'published', coalesce(new.published, old.published));

  elsif tg_table_name = 'game_reviews' then

    v_entity_id := coalesce(new.id, old.id)::text;

    v_details := jsonb_build_object('game_id', coalesce(new.game_id, old.game_id), 'review_user_id', coalesce(new.user_id, old.user_id), 'hidden', coalesce(new.is_hidden, old.is_hidden), 'rating', coalesce(new.rating, old.rating), 'comment_length', char_length(coalesce(new.comment, old.comment, '')));

  end if;

  insert into public.admin_audit_log(actor_user_id, actor_role, action, entity_type, entity_id, details)

  values (auth.uid(), v_role, v_action, tg_table_name, v_entity_id, v_details);

  if tg_op = 'DELETE' then return old; end if;

  return new;

end;

$$;

revoke all on function public.zoinho_audit_admin_changes() from public;

-- Security-definer: só a função grava logs; o cliente não recebe INSERT na tabela.

drop trigger if exists zoinho_audit_games on public.games;

create trigger zoinho_audit_games after insert or update or delete on public.games

for each row execute function public.zoinho_audit_admin_changes();

drop trigger if exists zoinho_audit_reviews on public.game_reviews;

create trigger zoinho_audit_reviews after update or delete on public.game_reviews

for each row execute function public.zoinho_audit_admin_changes();

-- Leitura pública segura: expõe somente nickname/avatar, nunca e-mail ou dados privados do perfil.

create or replace function public.zoinho_get_game_reviews(p_game_id text, p_limit integer default 50, p_offset integer default 0)

returns table(

  id uuid, user_id uuid, nickname text, avatar_data_url text, rating numeric, comment text,

  verified_player boolean, created_at timestamptz, updated_at timestamptz

)

language sql stable security definer set search_path=public as $$

  select r.id, r.user_id,

         coalesce(p.nickname, 'Jogador') as nickname,

         coalesce(p.avatar_data_url, '') as avatar_data_url,

         r.rating, r.comment,

         exists(select 1 from public.game_saves s where s.user_id=r.user_id and s.game_id=r.game_id) as verified_player,

         r.created_at, r.updated_at

  from public.game_reviews r

  join public.games g on g.id=r.game_id and g.published=true

  left join public.user_profiles p on p.user_id=r.user_id

  where r.game_id=p_game_id and r.is_hidden=false

  order by r.updated_at desc

  limit greatest(1, least(coalesce(p_limit,50),100)) offset greatest(coalesce(p_offset,0),0);

$$;

grant execute on function public.zoinho_get_game_reviews(text,integer,integer) to anon, authenticated;

create or replace function public.zoinho_get_review_stats()

returns table(game_id text, average_rating numeric, review_count bigint)

language sql stable security definer set search_path=public as $$

  select g.id,

         coalesce(round(avg(r.rating)::numeric,1),0::numeric) as average_rating,

         count(r.id)::bigint as review_count

  from public.games g

  left join public.game_reviews r on r.game_id=g.id and r.is_hidden=false

  where g.published=true

  group by g.id;

$$;

grant execute on function public.zoinho_get_review_stats() to anon, authenticated;

create or replace function public.zoinho_admin_get_reviews(p_limit integer default 100, p_offset integer default 0)

returns table(

  id uuid, user_id uuid, nickname text, game_id text, game_title text,

  rating numeric, comment text, is_hidden boolean, created_at timestamptz, updated_at timestamptz

)

language plpgsql stable security definer set search_path=public as $$

begin

  if not public.zoinho_can_moderate() then raise exception 'permission_denied' using errcode='42501'; end if;

  return query

  select r.id, r.user_id, coalesce(p.nickname,'Jogador'), r.game_id, g.title,

         r.rating, r.comment, r.is_hidden, r.created_at, r.updated_at

  from public.game_reviews r

  join public.games g on g.id=r.game_id

  left join public.user_profiles p on p.user_id=r.user_id

  order by r.updated_at desc

  limit greatest(1, least(coalesce(p_limit,100),250)) offset greatest(coalesce(p_offset,0),0);

end; $$;

revoke all on function public.zoinho_admin_get_reviews(integer,integer) from public;

grant execute on function public.zoinho_admin_get_reviews(integer,integer) to authenticated;
