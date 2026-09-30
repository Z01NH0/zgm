# ZOINHO GAMES Platform v1.11.0 — Auditoria do Game Shell

## Objetivo

A v1.11.0 adiciona uma camada de lançamento própria do portal sem substituir a arquitetura central de Cloud Save. O jogo continua hospedado em sua própria origem, mas pode ser executado em um `iframe` fullscreen controlado pelo portal.

Fluxo principal:

```text
JOGAR
  -> ZOINHO Game Shell
  -> requestFullscreen() no gesto do usuário
  -> iframe com allow="autoplay; fullscreen; gamepad"
  -> jogo recebe zoinhoShell=1 quando Cloud Bridge está ativa
  -> bridge usa window.parent
  -> READY / HELLO / hello-ack / sync
```

O modo legado continua disponível:

```text
JOGAR / Abrir em nova aba
  -> window.open
  -> bridge usa window.opener
```

O protocolo permanece `zoinho-storage-v2`, `bridgeVersion = 2`. Não há alteração de schema do banco, `game_saves`, RPC ou save_version dos jogos.

## Barra superior

O Shell possui uma barra própria sobre o jogo com:

- Voltar ao portal;
- marca ZG + nome/kicker do jogo;
- estado do Cloud Save;
- estado da permissão de autoplay;
- Abrir em nova aba;
- entrar/sair de fullscreen.

A barra é persistente por padrão. O usuário pode habilitar auto-ocultação. Quando oculta, uma faixa de revelação no topo permite recuperá-la sem bloquear o restante do iframe.

## Preferências locais do portal

Novas chaves:

- `zoinho-games-shell-enabled-v1` — padrão `true`;
- `zoinho-games-shell-auto-fullscreen-v1` — padrão `true`;
- `zoinho-games-shell-autoplay-v1` — padrão `true`;
- `zoinho-games-shell-auto-hide-bar-v1` — padrão `false`.

Essas configurações são do dispositivo/navegador e não entram em Cloud Save.

## Fullscreen

`requestFullscreen()` é chamado sincronamente durante o clique em JOGAR, antes de fetch, handshake ou animações, preservando a transient user activation do navegador. Se a chamada for negada, o Shell permanece aberto normalmente e o botão de fullscreen continua disponível.

Sair do fullscreen com `Esc` não fecha o Shell. Depois de sair do fullscreen, um novo `Esc` fecha a sessão e retorna ao portal.

## Áudio

Quando a preferência está ligada, o iframe recebe:

```html
allow="autoplay; fullscreen; gamepad"
```

Isso delega autoplay ao jogo quando a política do navegador permitir. Não existe garantia de áudio audível sem interação em todos os navegadores. Os jogos continuam responsáveis pelo fallback `AudioContext.resume()` / `play()` no primeiro gesto dentro do frame quando necessário.

O portal não reproduz SFX/música em nome dos jogos, mantendo os jogos independentes fora da ZOINHO.

## Cloud Save dentro de iframe

As bridges compatíveis com v1.11 usam um host dual:

- `window.parent` quando `zoinhoShell=1` e o jogo está embutido;
- `window.opener` quando aberto em nova aba.

Toda validação de origem continua ativa:

- `event.source` precisa ser exatamente o host capturado;
- `zoinhoPortalOrigin` precisa bater com `event.origin`;
- `bootSyncProtocol = 1`;
- origem HTTPS em produção, HTTP somente localhost/127.0.0.1;
- referrer ou sessão automática previamente validada precisa ser coerente.

## Compatibilidade Cloud inicial

Bridges preparadas neste pacote:

- `blood-machine`;
- `heroes-battle`;
- `racing-stars`.

Jogos Cloud ainda não migrados também podem entrar no Shell, mas existe um watchdog de handshake. Se a Bridge não responder em 8 segundos, o Shell bloqueia a continuação silenciosa e mostra duas escolhas: **Abrir em nova aba** para preservar o Cloud Save legado, ou **Continuar local**, recarregando o jogo sem parâmetros de Bridge. Jogos sem Cloud Bridge usam o Game Shell normalmente.

## Encerramento

Ao clicar em Voltar ao portal, se houver uma bridge autorizada, o Shell solicita um snapshot final antes de destruir o iframe. O portal pode continuar a escrita Cloud mesmo depois de o frame ser removido.

O botão Abrir em nova aba é executado diretamente a partir do clique do usuário, evitando bloqueio normal de pop-up. A sessão do iframe é então desmontada e a nova aba realiza seu próprio handshake.

## Correção adicional encontrada na auditoria

A v1.10 misturava listeners diretos em `[data-launch-game]` com um listener delegado no `document`. Como o catálogo pode ser renderizado novamente, isso permitia acumular handlers e, em alguns caminhos, lançar o mesmo jogo mais de uma vez.

A v1.11 usa um único listener delegado para todos os lançadores.

## Banco de dados

Nenhum SQL novo é necessário.

Continuam válidos:

- `public.games` com `bridge_enabled`, `bridge_origin`, `bridge_save_version`, `bridge_save_keys`;
- `public.game_saves` central;
- `zoinho_write_game_save()` da Platform v1.10;
- controle otimista por `revision`;
- bloqueio por `save_version`.

## Testes realizados

- `node --check` no `app.js` v1.11;
- HTML parseado e auditado: 204 IDs, zero duplicados;
- todos os 4 controles do Game Shell presentes;
- cache-busting do portal atualizado para `platform-1.11.0`;
- Racing Stars adicionado ao fallback interno da Bridge;
- `node --check` nas bridges Shell de Blood Machine, Heroes Battle e Racing Stars;
- simulação VM do handshake `parent`: PASS nos 3 jogos;
- simulação VM do handshake `opener`: PASS nos 3 jogos;
- validação de READY e hello-ack nos dois modos;
- modo `hostMode` confirmado como `parent` no Shell e `opener` na nova aba;
- HTML dos três jogos atualizado com cache-busting específico da bridge Shell.

### Limitação do ambiente de auditoria

O Chromium disponível no ambiente de build bloqueou navegação `localhost`/`file:` por política administrativa, então não foi possível concluir um E2E gráfico real com Fullscreen API neste ambiente. A lógica de fullscreen foi auditada estaticamente e a integração de mensagem/bridge foi executada em VM. O teste final de UX deve ser feito no Chrome real após deploy.
