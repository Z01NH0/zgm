-- ZOINHO GAMES — diagnóstico não destrutivo do Cloud Save
-- Execute no SQL Editor para conferir estrutura, RLS, policies, grants e dados.

select
  c.relname as table_name,
  c.relrowsecurity as rls_enabled,
  c.relforcerowsecurity as force_rls
from pg_class c
join pg_namespace n on n.oid = c.relnamespace
where n.nspname = 'public' and c.relname = 'game_saves';

select
  column_name,
  data_type,
  is_nullable,
  column_default
from information_schema.columns
where table_schema = 'public' and table_name = 'game_saves'
order by ordinal_position;

select
  policyname,
  cmd,
  roles,
  qual,
  with_check
from pg_policies
where schemaname = 'public' and tablename = 'game_saves'
order by policyname;

select
  grantee,
  privilege_type
from information_schema.role_table_grants
where table_schema = 'public' and table_name = 'game_saves'
  and grantee in ('anon', 'authenticated')
order by grantee, privilege_type;

select
  trigger_name,
  event_manipulation,
  action_timing
from information_schema.triggers
where event_object_schema = 'public' and event_object_table = 'game_saves';

select count(*) as total_game_saves from public.game_saves;
select user_id, game_id, save_version, revision, client_updated_at, updated_at
from public.game_saves
order by updated_at desc
limit 20;

-- Confirma que a conta existe no Auth. O SQL Editor roda com privilégios administrativos do projeto.
select id, email, created_at, last_sign_in_at
from auth.users
order by created_at desc
limit 20;
