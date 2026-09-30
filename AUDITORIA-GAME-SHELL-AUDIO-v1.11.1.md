# ZOINHO GAMES Platform v1.11.1 — Auditoria de Auto Audio no Game Shell

## Causa do segundo clique

A v1.11.0 já delegava `autoplay` ao iframe, porém os jogos compatíveis ainda seguiam o modelo standalone e só tentavam criar/resumir/tocar áudio após `pointerdown` ou `keydown` dentro do próprio documento do jogo.

Permissão sem tentativa de playback não produz áudio. O Shell podia autorizar, mas o jogo permanecia esperando o primeiro gesto interno.

## Contrato v1.11.1

Quando a preferência "Tentar áudio automaticamente" está ativa, o portal abre o jogo com:

- `zoinhoShell=1`
- `zoinhoAutoplay=1`
- iframe `allow="autoplay; fullscreen; gamepad"`

Esses parâmetros são independentes do Cloud Save e também são enviados em guest mode ou para jogos sem bridge.

O iframe recebe seu `src` dentro do mesmo handler do clique em JOGAR e antes do pedido de fullscreen. O fullscreen continua sendo solicitado no mesmo gesto do usuário.

## Responsabilidade do jogo

Um jogo compatível deve detectar `zoinhoShell=1&zoinhoAutoplay=1` e tentar iniciar sua engine de áudio no boot.

O jogo NÃO deve remover o fallback por gesto. Se a tentativa automática for bloqueada, `pointerdown`, `keydown` ou outro gesto real deve tentar novamente.

### Racing Stars

No boot do Shell, `GameAudio.unlock()` e `GameAudio.syncUiMusic()` são chamados. Os listeners de `pointerdown`/`keydown` continuam instalados.

### Heroes Battle

O `AudioManager.unlock()` passou a aceitar novas tentativas mesmo depois de uma tentativa automática. No boot do Shell ele chama `audio.unlock()`. Se `HTMLMediaElement.play()` for recusado, o primeiro gesto interno repete `syncBaseMode()` e tenta novamente.

### Blood Machine

No boot do Shell, `musicManager.unlock()` é chamado e o `AudioContext` procedural é criado/resumido. O listener original de `pointerdown` permanece para retry.

## Fullscreen

A navegação do iframe agora começa antes de `requestFullscreen()`. As duas operações continuam no mesmo handler do clique em JOGAR, mas a navegação não fica atrás da primeira API gated pelo gesto.

## Banco de dados

Nenhuma alteração. `game_saves`, protocolo `zoinho-storage-v2`, bridge version 2 e save versions permanecem inalterados.

## Segurança

Game Shell não é uma barreira de segurança contra DevTools. Um usuário tecnicamente capaz ainda pode inspecionar/manipular código cliente e escolher o frame no DevTools. Estado competitivo ou autoritativo deve ser validado no servidor se algum dia isso for necessário.
