# Auditoria — ZOINHO GAMES Portal v1.5.0

## Escopo

Base: portal Cloud Save v1.4.2 validado com Blood Machine, Dead Signal e Heroes Battle.

Alterações desta build:

1. gate automático de autenticação após `getSession()`;
2. modo Guest explícito e local-only;
3. Cloud Bridge desativada em Guest;
4. perfil local por usuário (nome + foto);
5. abas Perfil/Nuvem na conta;
6. cache-busting `cloud-1.5.0`.

## Segurança de estado

- O gate só é exigido depois de `authInitialized`, evitando decidir Guest/login antes de o Supabase restaurar a sessão.
- `Esc`, backdrop e botão fechar não removem o gate obrigatório.
- `SIGNED_OUT` volta ao gate.
- Uma sessão Supabase válida sempre cancela `guestMode`.
- Guest é guardado em `sessionStorage`, não em cookie ou Supabase.
- Jogos em Guest são abertos pela URL original sem parâmetros de Storage Bridge.
- Perfil local é separado em `guest` e `users[userId]`, impedindo que dois logins no mesmo navegador compartilhem nome/foto.

## Imagens de perfil

- tipos aceitos: PNG, JPEG, WEBP;
- limite de entrada: 8 MB;
- recorte quadrado central no navegador;
- redução para 224×224;
- saída WEBP, com fallback JPEG;
- tentativa de compressão adicional quando o Data URL fica grande.

## Validações executadas

- `node --check app.js`: OK
- `node --check supabase-config.js`: OK
- referências `getElementById`: 0 IDs ausentes
- IDs HTML duplicados: 0
- paridade de traduções PT/EN: OK
- chaves `data-i18n`/placeholder sem tradução: 0
- teste lógico: visitante sem sessão exige gate
- teste lógico: Guest não recebe `zoinhoBridge=1`
- teste lógico: autenticado recebe `zoinhoBridge=1`
- teste lógico: jogos não integrados continuam sem bridge
- teste lógico: perfil Guest/usuário A/usuário B ficam isolados
- teste lógico: normalização e limite do nome funcionam

O ambiente de execução bloqueou a abertura de páginas no Chromium (`ERR_BLOCKED_BY_ADMINISTRATOR`), então não foi possível realizar um teste visual automatizado end-to-end aqui. A validação final de aparência deve ocorrer no deploy real.

## Banco

Nenhuma alteração de schema, policy ou SQL foi feita nesta versão.
