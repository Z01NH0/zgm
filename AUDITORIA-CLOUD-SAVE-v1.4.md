# Auditoria Cloud Save v1.4

## Jogos registrados
- Blood Machine — `blood-machine`
- Dead Signal — `dead-signal`
- Heroes Battle — `heroes-battle`

## Portal
- Mantido protocolo `zoinho-storage-v2`.
- Mantida tabela genérica `game_saves`.
- Lista de jogos da nuvem continua derivada de `storageBridgeGames`.
- Ordenação alfabética continua via `localeCompare`.
- Pesquisa continua filtrando por título.
- Heroes Battle usa origem `https://heroes-battle-ultimate-version.vercel.app`.
- Chaves aceitas: `hb-rune-progression-v2`, `hb-reforged2-best`.
- Textos globais restantes específicos do Blood Machine foram generalizados.

Nenhuma alteração de SQL é necessária.
