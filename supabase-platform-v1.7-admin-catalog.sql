-- ZOINHO GAMES PLATFORM v1.7.0 — Administração + catálogo dinâmico
-- Reexecutável com segurança.
-- IMPORTANTE: o admin inicial não é mais hardcoded nesta migration.
-- Depois deste arquivo, execute supabase-bootstrap-admin.example.sql ajustando o e-mail.

create extension if not exists pgcrypto;

create table if not exists public.user_roles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  role text not null default 'user' check (role in ('user','moderator','admin')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.user_roles enable row level security;

grant usage on schema public to anon, authenticated;
grant select on public.user_roles to authenticated;
revoke insert, update, delete on public.user_roles from anon, authenticated;

create or replace function public.zoinho_user_role()
returns text
language sql
stable
security definer
set search_path = public
as $$
  select coalesce((select ur.role from public.user_roles ur where ur.user_id = auth.uid()), 'user');
$$;

create or replace function public.zoinho_is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select public.zoinho_user_role() = 'admin';
$$;

create or replace function public.zoinho_can_moderate()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select public.zoinho_user_role() in ('moderator','admin');
$$;

revoke all on function public.zoinho_user_role() from public;
revoke all on function public.zoinho_is_admin() from public;
revoke all on function public.zoinho_can_moderate() from public;
grant execute on function public.zoinho_user_role() to authenticated;
grant execute on function public.zoinho_is_admin() to authenticated;
grant execute on function public.zoinho_can_moderate() to authenticated;

drop policy if exists user_roles_select_own on public.user_roles;
drop policy if exists user_roles_admin_select_all on public.user_roles;
create policy user_roles_select_own on public.user_roles for select to authenticated
using (user_id = auth.uid());
create policy user_roles_admin_select_all on public.user_roles for select to authenticated
using (public.zoinho_is_admin());

create table if not exists public.games (
  id text primary key,
  order_index integer not null default 999,
  title text not null,
  url text not null,
  image_url text not null default '',
  kicker text not null default 'JOGO',
  creator text not null default 'Z01NH0',
  categories text[] not null default '{}',
  tags_pt text[] not null default '{}',
  tags_en text[] not null default '{}',
  mode_pt text not null default 'Singleplayer',
  mode_en text not null default 'Single-player',
  genres_pt text not null default '',
  genres_en text not null default '',
  short_pt text not null default '',
  short_en text not null default '',
  description_pt text not null default '',
  description_en text not null default '',
  platform_pt text not null default 'PC',
  platform_en text not null default 'PC',
  featured boolean not null default false,
  published boolean not null default true,
  dates_available boolean not null default true,
  vercel_project_id text,
  bridge_enabled boolean not null default false,
  bridge_origin text,
  bridge_save_version integer not null default 1 check (bridge_save_version > 0),
  bridge_save_keys text[] not null default '{}',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint games_id_format check (id ~ '^[a-z0-9][a-z0-9-]{1,63}$'),
  constraint games_title_not_blank check (length(btrim(title)) > 0),
  constraint games_url_http check (url ~ '^https?://'),
  constraint games_bridge_complete check (
    not bridge_enabled or (bridge_origin ~ '^https?://' and cardinality(bridge_save_keys) > 0)
  )
);
alter table public.games enable row level security;

grant select on public.games to anon, authenticated;
grant insert, update, delete on public.games to authenticated;

create or replace function public.zoinho_touch_updated_at()
returns trigger language plpgsql security invoker set search_path=public as $$
begin new.updated_at = now(); return new; end; $$;
grant execute on function public.zoinho_touch_updated_at() to authenticated;

drop trigger if exists zoinho_games_touch on public.games;
create trigger zoinho_games_touch before update on public.games
for each row execute function public.zoinho_touch_updated_at();

drop policy if exists games_public_read on public.games;
drop policy if exists games_admin_read on public.games;
drop policy if exists games_admin_insert on public.games;
drop policy if exists games_admin_update on public.games;
drop policy if exists games_admin_delete on public.games;
create policy games_public_read on public.games for select to anon, authenticated using (published = true);
create policy games_admin_read on public.games for select to authenticated using (public.zoinho_is_admin());
create policy games_admin_insert on public.games for insert to authenticated with check (public.zoinho_is_admin());
create policy games_admin_update on public.games for update to authenticated using (public.zoinho_is_admin()) with check (public.zoinho_is_admin());
create policy games_admin_delete on public.games for delete to authenticated using (public.zoinho_is_admin());

create index if not exists games_published_order_idx on public.games(published, order_index, title);
create index if not exists games_published_title_idx on public.games(published, title);
create unique index if not exists games_one_featured_published_idx on public.games(featured) where featured = true and published = true;
