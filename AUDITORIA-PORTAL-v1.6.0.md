# ZOINHO GAMES Portal v1.6.0 — perfil sincronizado, nickname único e cooldown

## Escopo

A v1.6.0 parte da baseline v1.5.1 e não altera o protocolo Storage Bridge nem a tabela `game_saves`.
A mudança é restrita ao perfil de contas autenticadas.

## O que mudou

- Nome de exibição virou **nickname de conta** salvo no Supabase.
- Foto de perfil também passa a acompanhar a conta entre dispositivos.
- Nova tabela `public.user_profiles`.
- Nickname é único globalmente através de `nickname_key` normalizado.
- Espaços extras são colapsados e a comparação é case-insensitive.
- Troca de nickname é limitada a **1 vez a cada 2 horas**.
- O cooldown é aplicado no PostgreSQL por trigger, além da interface.
- DELETE da linha de perfil não é concedido ao usuário autenticado, impedindo apagar e recriar o perfil para burlar o cooldown.
- A foto continua sendo redimensionada/comprimida no navegador antes do upload.
- Guest continua sem aba de perfil e sem acesso a `user_profiles`.
- Perfis locais da v1.5.x são usados apenas como rascunho de migração quando ainda não existe perfil na nuvem.

## Banco

Executar:

`supabase-user-profiles.sql`

A tabela criada contém:

- `user_id`
- `nickname`
- `nickname_key`
- `avatar_data_url`
- `nickname_changed_at`
- `created_at`
- `updated_at`

RLS permite SELECT/INSERT/UPDATE somente da própria linha. `anon` não possui acesso.

## Testes executados

- `node --check app.js` ✅
- IDs HTML únicos ✅
- referências `getElementById` sem IDs ausentes ✅
- traduções PT/EN com o mesmo conjunto de chaves ✅
- cache-busting `cloud-1.6.0` em CSS/config/app ✅
- teste estrutural de integração `user_profiles` ✅
- unicidade normalizada `PlayerOne` = `playerone` ✅
- espaços repetidos não criam nickname alternativo ✅
- cooldown de 2 horas presente no cliente e no SQL ✅
- bypass por DELETE bloqueado ✅
- avatar persistido em `user_profiles.avatar_data_url` ✅
- lista de jogos Cloud Save preservada: Blood Machine, Dead Signal e Heroes Battle ✅

## Observação

O SQL foi auditado estaticamente neste ambiente. O teste definitivo do trigger/RLS precisa ser feito no projeto Supabase real após executar a migration, pois não há uma instância PostgreSQL/Supabase local conectada neste ambiente.
