-- ZOINHO GAMES PLATFORM v1.10.0 — diagnóstico não destrutivo
-- Rode depois de supabase-platform-v1.10-hardening.sql.

-- 1) Estruturas principais e RLS
select c.relname as table_name, c.relrowsecurity as rls_enabled, c.relforcerowsecurity as force_rls
from pg_class c
join pg_namespace n on n.oid = c.relnamespace
where n.nspname = 'public'
  and c.relname in ('game_saves','user_profiles','user_roles','games','game_reviews','admin_audit_log','titles','user_titles','user_equipped_titles','user_game_activity')
order by c.relname;

-- 2) Colunas críticas v1.10
select table_name, column_name, data_type, is_nullable, column_default
from information_schema.columns
where table_schema = 'public'
  and (
    (table_name = 'user_profiles' and column_name in ('avatar_path','avatar_data_url'))
    or (table_name = 'game_saves' and column_name in ('save_version','revision','save_data','client_updated_at'))
    or (table_name = 'games' and column_name in ('bridge_enabled','bridge_origin','bridge_save_version','bridge_save_keys'))
  )
order by table_name, ordinal_position;

-- 3) RPC de escrita atômica
select p.oid::regprocedure as function_signature,
       p.prosecdef as security_definer
from pg_proc p
join pg_namespace n on n.oid = p.pronamespace
where n.nspname = 'public'
  and p.proname in ('zoinho_write_game_save','zoinho_get_public_profile','zoinho_get_game_reviews');

-- 4) FK composta entre títulos equipados e títulos possuídos
select conname, pg_get_constraintdef(oid) as definition
from pg_constraint
where conrelid = 'public.user_equipped_titles'::regclass
order by conname;

-- 5) Buckets e policies relevantes
select id, name, public, file_size_limit, allowed_mime_types
from storage.buckets
where id in ('game-covers','profile-avatars')
order by id;

select policyname, cmd, roles, qual, with_check
from pg_policies
where schemaname = 'storage'
  and tablename = 'objects'
  and policyname like 'profile_avatars_%'
order by policyname;

-- 6) Saves e versões divergentes do catálogo atual
select s.user_id, s.game_id,
       s.save_version as cloud_version,
       g.bridge_save_version as expected_version,
       s.revision, s.client_updated_at, s.updated_at
from public.game_saves s
join public.games g on g.id = s.game_id
where g.bridge_enabled = true
  and s.save_version <> g.bridge_save_version
order by s.updated_at desc;

-- 7) Resumo das integrações Cloud atuais
select id, title, bridge_enabled, bridge_origin, bridge_save_version, bridge_save_keys
from public.games
where bridge_enabled = true
order by lower(title), title;

-- 8) Avatares: quantos ainda dependem do Data URL legado
select
  count(*) filter (where avatar_path <> '') as storage_avatars,
  count(*) filter (where avatar_path = '' and avatar_data_url <> '') as legacy_data_url_avatars,
  count(*) filter (where avatar_path = '' and avatar_data_url = '') as no_avatar
from public.user_profiles;
