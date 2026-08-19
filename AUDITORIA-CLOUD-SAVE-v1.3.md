# Auditoria Cloud Save v1.3

## Portal

- Protocolo `zoinho-storage-v2` mantido sem mudança incompatível.
- `storageBridgeGames` agora registra Blood Machine e Dead Signal.
- Estados visuais do Cloud Save são mantidos por jogo, não apenas pela última sessão de bridge.
- Ao autenticar, o portal consulta os registros existentes em `game_saves` e monta ✓/× por jogo.
- A lista de sincronização é ordenada alfabeticamente e possui pesquisa.
- Detalhes foram movidos para um modal acionado pelo botão de informações.
- Escritas permanecem automáticas, com debounce e `upsert` por `(user_id, game_id)`.
- Sincronização manual é geral e pede snapshots somente das abas integradas que estiverem abertas.

## Dead Signal / Zombie Survival

Persistência encontrada em uma única chave de `localStorage`:

- `dead_signal_nightfall_v1`

Não foram encontrados `sessionStorage` persistente de jogo, IndexedDB ou outra chave de progresso. A bridge usa `sessionStorage` apenas para controlar o reload após restauração remota.

O ponto central de gravação é `persist()`. Ele foi mantido como fonte única do save local e agora notifica `ZoinhoStorageBridge.notifySave()` somente depois de uma gravação local bem-sucedida.

Dois patches que persistiam defaults incondicionalmente no boot foram ajustados para só chamar `persist()` quando realmente adicionam defaults, evitando revisões desnecessárias no banco.

## Testes executados

- `node --check` em `app.js`, bridge/config do jogo e todos os JS externos do Dead Signal.
- extração e `node --check` dos 21 scripts inline do Dead Signal.
- auditoria de IDs HTML do portal: nenhum ID duplicado e nenhuma referência `getElementById` ausente.
- paridade de traduções PT-BR/EN e chaves `data-i18n`.
- teste sintético Blood Machine -> portal -> upsert.
- teste sintético Dead Signal -> portal -> upsert.
- teste de restauração remota Dead Signal -> `localStorage` -> reload.
- teste de bloqueio de origem não autorizada.
- teste de `persist()` do Dead Signal escrevendo localmente antes de notificar a bridge.
