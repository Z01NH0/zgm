-- ZOINHO GAMES PLATFORM v1.7.0 — Bucket de capas gerenciado pelo painel Admin
-- Execute depois de supabase-platform-v1.7-admin-catalog.sql.

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('game-covers','game-covers',true,5242880,array['image/png','image/jpeg','image/webp'])
on conflict (id) do update set
  public = true,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists game_covers_public_read on storage.objects;
drop policy if exists game_covers_admin_insert on storage.objects;
drop policy if exists game_covers_admin_update on storage.objects;
drop policy if exists game_covers_admin_delete on storage.objects;

create policy game_covers_public_read on storage.objects
for select to anon, authenticated
using (bucket_id='game-covers');

create policy game_covers_admin_insert on storage.objects
for insert to authenticated
with check (bucket_id='game-covers' and public.zoinho_is_admin());

create policy game_covers_admin_update on storage.objects
for update to authenticated
using (bucket_id='game-covers' and public.zoinho_is_admin())
with check (bucket_id='game-covers' and public.zoinho_is_admin());

create policy game_covers_admin_delete on storage.objects
for delete to authenticated
using (bucket_id='game-covers' and public.zoinho_is_admin());
