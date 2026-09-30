# 🎮 ZOINHO GAMES — Platform v1.11.1

A ZOINHO GAMES é o portal central da plataforma: catálogo, conta, perfis, avaliações, títulos, administração e Cloud Save entre jogos hospedados em domínios diferentes.

## Arquitetura atual

- **Portal**: autoridade da sessão/auth e único frontend que conversa com o Supabase para Cloud Save.
- **Jogos**: continuam independentes, com `localStorage` próprio e funcionamento local/offline.
- **Storage Bridge**: comunicação Portal ↔ jogo via `postMessage`, com `WindowProxy`, origin, nonce, `gameId`, `userId` e protocolo validados.
- **Cloud Save**: cópia sincronizada do save local. O token Supabase nunca é enviado ao jogo.
- **Catálogo**: carregado da tabela `games` com fallback local; a vitrine pública é ordenada alfabeticamente.

## v1.11.1 — Game Shell + Auto Audio Boot

### Correção de áudio do Shell

- `zoinhoShell`/`zoinhoAutoplay` agora independem de login/Cloud.
- O iframe inicia a navegação antes do pedido de fullscreen, ainda no clique em JOGAR.
- Jogos compatíveis tentam iniciar áudio no boot e preservam o gesto interno como fallback.
- Sem SQL novo e sem alteração de protocolo/save version.


A v1.11.0 introduziu o **ZOINHO Game Shell**: jogos podem abrir dentro do portal em um iframe fullscreen com barra superior própria, status do Cloud Save, delegação de autoplay, botão de nova aba e fallback para bridges legadas. As preferências ficam locais no portal: Game Shell, fullscreen automático, tentativa de autoplay e auto-ocultação da barra.

A bridge continua usando `zoinho-storage-v2`/versão 2, mas bridges compatíveis com o Shell aceitam o portal por `window.parent` quando embutidas e por `window.opener` no modo legado. A v1.11.1 corrige a inicialização de áudio no Shell: o portal passa `zoinhoAutoplay=1`, inicia a navegação do iframe antes do pedido de fullscreen e jogos compatíveis tentam iniciar sua própria engine de áudio no boot. Não há migration SQL nova na v1.11.1.

## v1.10.0 — hardening

A v1.10.0 adiciona:

- controle otimista de concorrência para Cloud Save por `revision`;
- bloqueio seguro de saves com `save_version` incompatível;
- RPC atômica `zoinho_write_game_save` para evitar overwrite silencioso entre dispositivos;
- exibição de revisão e versão do save no modal de Cloud Save;
- avatar novo em Supabase Storage (`profile-avatars`) com fallback para Data URL legado;
- `verified_player` baseado em atividade real do jogo ou Cloud Save;
- integridade entre títulos possuídos e títulos equipados;
- bootstrap de admin portátil, sem UUID pessoal hardcoded na migration reutilizável;
- remoção do fluxo legado de autorização manual do portal;
- catálogo público e lista de Cloud Save em ordem alfabética.

## Instalação do banco do zero

No mesmo projeto Supabase usado pelo portal, execute nesta ordem:

1. `supabase-game-saves.sql`
2. `supabase-user-profiles.sql`
3. `supabase-platform-v1.7-admin-catalog.sql`
4. `supabase-bootstrap-admin.example.sql` **depois de trocar o e-mail pelo administrador real**
5. `supabase-platform-v1.7-reviews.sql`
6. `supabase-platform-v1.7-game-covers.sql`
7. `supabase-platform-v1.7-seed.sql`
8. `supabase-platform-v1.8-public-profiles-titles.sql`
9. `supabase-platform-v1.10-hardening.sql`
10. `supabase-v1.10-diagnostics.sql` para conferência.

Os arquivos de diagnóstico antigos são somente leitura e podem continuar sendo usados, mas `supabase-v1.10-diagnostics.sql` é a checagem recomendada para a versão atual.

## Configuração externa ainda necessária

O SQL não configura serviços externos. Em um projeto novo também precisam ser configurados:

- URL e chave pública do Supabase em `supabase-config.js`;
- provedores e Redirect/Site URLs do Supabase Auth;
- `VERCEL_API_TOKEN` na Vercel;
- `VERCEL_TEAM_ID`, se o projeto exigir escopo de equipe;
- domínios/origins corretos dos jogos na tabela `games`.

## Regra para novos jogos com Cloud Save

Um jogo integrado deve manter o save local, carregar `zoinho-storage-config.js` + `zoinho-storage-bridge.js`, declarar somente as chaves persistentes que realmente devem viajar para a nuvem e usar o Auto-Sync no boot. O portal deve ter `bridge_enabled=true`, `bridge_origin`, `bridge_save_version` e `bridge_save_keys` corretos.

Nunca dependa de `document.referrer` após reload interno. A bridge deve preservar a origem já validada em `sessionStorage` durante a vida daquela aba.

## Deploy v1.11.1 em uma instalação existente

Se o portal atual já é **v1.10.0** ou **v1.11.0**, não há SQL novo para a v1.11.1. Publique apenas os arquivos do portal e as bridges compatíveis nos jogos.

Para instalações anteriores à v1.10:

1. Execute `supabase-platform-v1.10-hardening.sql` no banco atual.
2. Rode `supabase-v1.10-diagnostics.sql`.
3. Publique o portal v1.11.1.
4. Nos jogos Cloud que serão usados dentro do Shell, publique a bridge compatível com `window.parent`/`window.opener`.
5. Não aumente `bridge_save_version` de nenhum jogo sem uma estratégia de migração compatível com o formato de save daquele jogo.

A v1.10 não faz fallback para escrita direta. Se a RPC ainda não estiver instalada, o upload para a nuvem falha de forma segura e o save local permanece preservado. Execute a migration antes de publicar o portal.

---

**ZOINHO GAMES** — Um lugar. Todos os jogos. E, idealmente, sem dois PCs brigando para decidir qual save merece existir. 🍮
