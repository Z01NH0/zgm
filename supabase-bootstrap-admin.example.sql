-- ZOINHO GAMES — bootstrap portátil do primeiro administrador
-- 1) Crie/registre a conta no Supabase Auth primeiro.
-- 2) Troque o e-mail abaixo pelo e-mail real da conta administradora.
-- 3) Execute no SQL Editor.
-- Não grave UUID de um projeto antigo em migrations reutilizáveis: UUIDs de auth.users mudam entre projetos.

do $$
declare
  v_admin_email text := 'TROQUE_PELO_EMAIL_DO_ADMIN@example.com';
  v_admin_user_id uuid;
begin
  select id into v_admin_user_id
  from auth.users
  where lower(email) = lower(v_admin_email)
  order by created_at
  limit 1;

  if v_admin_user_id is null then
    raise exception 'admin_user_not_found: crie/confirme a conta Auth antes de promover o admin';
  end if;

  insert into public.user_roles(user_id, role)
  values (v_admin_user_id, 'admin')
  on conflict (user_id) do update
    set role = excluded.role,
        updated_at = now();
end;
$$;
