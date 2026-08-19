-- ZOINHO GAMES — diagnóstico não destrutivo do perfil v1.6.0

select
  c.relname as table_name,
  c.relrowsecurity as rls_enabled,
  c.relforcerowsecurity as force_rls
from pg_class c
join pg_namespace n on n.oid = c.relnamespace
where n.nspname = 'public' and c.relname = 'user_profiles';

select column_name, data_type, is_nullable, column_default
from information_schema.columns
where table_schema = 'public' and table_name = 'user_profiles'
order by ordinal_position;

select policyname, cmd, roles, qual, with_check
from pg_policies
where schemaname = 'public' and tablename = 'user_profiles'
order by policyname;

select grantee, privilege_type
from information_schema.role_table_grants
where table_schema = 'public' and table_name = 'user_profiles'
  and grantee in ('anon', 'authenticated')
order by grantee, privilege_type;

select trigger_name, event_manipulation, action_timing
from information_schema.triggers
where event_object_schema = 'public' and event_object_table = 'user_profiles';

select indexname, indexdef
from pg_indexes
where schemaname = 'public' and tablename = 'user_profiles'
order by indexname;

select user_id, nickname, nickname_changed_at, updated_at,
       char_length(avatar_data_url) as avatar_chars
from public.user_profiles
order by updated_at desc
limit 20;
