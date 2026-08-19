# Cloud Save v1.3 — operação

A v1.3 reutiliza a mesma tabela `game_saves` criada na v1.2. Não é necessário criar outra tabela nem outro projeto Supabase.

## Para o Dead Signal

1. Publique a versão do jogo contendo `zoinho-storage-config.js` e `zoinho-storage-bridge.js`.
2. Publique o portal v1.3.
3. Entre na ZOINHO Account.
4. Abra Dead Signal pelo portal.
5. Na primeira conexão de um domínio ainda não aprovado, autorize a origem na janela do jogo.
6. Ao ocorrer `persist()`, o jogo salva localmente e notifica a bridge automaticamente.
7. O portal grava em `game_saves` usando `game_id = dead-signal`.

## O que o Dead Signal sincroniza

Chave: `dead_signal_nightfall_v1`.

O jogo original armazena progresso permanente (`cores` e `meta`) e preferências dentro da mesma chave. A integração preserva a chave inteira para manter compatibilidade com o carregamento original.
