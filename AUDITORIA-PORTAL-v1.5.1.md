# ZOINHO GAMES Portal v1.5.1 — correção de estados Guest / Conta

## Ajustes
- `[hidden]` agora força `display:none !important`, impedindo componentes com `display:grid/flex` de reaparecerem apesar do atributo hidden.
- Usuário autenticado não vê aviso de Guest nem botão de sair do Guest.
- O botão **Sair do modo Guest** foi removido do HTML e do JavaScript.
- Guest não possui aba **Perfil** nem editor de nome/foto; abre diretamente na aba **Nuvem** com o aviso de Cloud Save indisponível.
- Guest não vê **Sair da conta**. O botão fica disponível somente para sessão Supabase autenticada.
- Login, criação de conta e recuperação não mostram o botão X. O X continua disponível na tela de informações após uma sessão já ter sido iniciada.
- Perfis Guest legados são ignorados visualmente; Guest usa nome/avatar neutros.
- Cache-busting atualizado para `cloud-1.5.1`.

## Regressões verificadas
- Cloud Save permanece disponível apenas para usuários autenticados.
- Blood Machine, Dead Signal e Heroes Battle continuam registrados.
- Perfil local de usuário autenticado continua disponível.
- Login e criação de conta permanecem funcionais.
