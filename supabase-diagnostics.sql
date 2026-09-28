-- ZOINHO GAMES — diagnóstico não destrutivo do Cloud Save v1.10.0

select
  c.relname as table_name,
  c.relrowsecurity as rls_enabled,
  c.relforcerowsecurity as force_rls
from pg_class c
join pg_namespace n on n.oid = c.relnamespace
where n.nspname = 'public' and c.relname = 'game_saves';

select column_name, data_type, is_nullable, column_default
from information_schema.columns
where table_schema = 'public' and table_name = 'game_saves'
order by ordinal_position;

select policyname, cmd, roles, qual, with_check
from pg_policies
where schemaname = 'public' and tablename = 'game_saves'
order by policyname;

-- Na v1.10, authenticated deve ter SELECT direto, mas não INSERT/UPDATE/DELETE.
-- Escritas passam por zoinho_write_game_save().
select grantee, privilege_type
from information_schema.role_table_grants
where table_schema = 'public' and table_name = 'game_saves'
  and grantee in ('anon', 'authenticated')
order by grantee, privilege_type;

select p.oid::regprocedure as function_signature, p.prosecdef as security_definer
from pg_proc p
join pg_namespace n on n.oid = p.pronamespace
where n.nspname='public' and p.proname='zoinho_write_game_save';

select trigger_name, event_manipulation, action_timing
from information_schema.triggers
where event_object_schema = 'public' and event_object_table = 'game_saves';

select count(*) as total_game_saves from public.game_saves;
select s.user_id, s.game_id, s.save_version, g.bridge_save_version as expected_version,
       s.revision, s.client_updated_at, s.updated_at
from public.game_saves s
left join public.games g on g.id=s.game_id
order by s.updated_at desc
limit 20;

select id, email, created_at, last_sign_in_at
from auth.users
order by created_at desc
limit 20;
