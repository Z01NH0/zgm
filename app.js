(() => {
  'use strict';

  const ZOINHO_CLOUD_BUILD = '1.8.2';
  window.__ZOINHO_CLOUD_BUILD = ZOINHO_CLOUD_BUILD;
  console.info(`[ZOINHO Cloud] Portal build ${ZOINHO_CLOUD_BUILD}`);

  const STORAGE_KEYS = {
    theme: 'zoinho-games-theme',
    language: 'zoinho-games-language',
    fontSize: 'zoinho-games-font-size-v1',
    fontFamily: 'zoinho-games-font-family-v1',
    bridgeCache: 'zoinho-games-storage-bridge-v2',
    bridgeCacheLegacy: 'zoinho-games-storage-bridge-v1',
    localProfiles: 'zoinho-games-local-profiles-v1',
    guestSession: 'zoinho-games-guest-session-v1'
  };

  const translations = {
    'pt-BR': {
      navHome: 'Início',
      navGames: 'Jogos',
      navAbout: 'Sobre',
      navSupport: 'Suporte e Contato',
      settings: 'Configurações',
      accountLogin: 'Entrar',
      accountCreate: 'Criar conta',
      accountCloudOff: 'Cloud Save desligado',
      accountCloudOn: 'Cloud Save ativo',
      accountKicker: 'ZOINHO ACCOUNT',
      accountTitle: 'Sua conta',
      accountEmail: 'E-mail',
      accountPassword: 'Senha',
      accountPasswordConfirm: 'Confirmar senha',
      accountLoginHelp: 'Entre para sincronizar seus saves entre computadores.',
      accountSignupHelp: 'Crie sua conta ZOINHO e comece a usar a sincronização entre dispositivos.',
      accountForgot: 'Esqueci minha senha',
      accountLogout: 'Sair da conta',
      accountConnected: 'CONECTADO',
      accountGuest: 'GUEST',
      accountGuestButton: 'Jogar como Guest (⚠️Sem saves na nuvem⚠️)',
      accountGuestHelp: 'Entra no portal sem conta. O progresso continua local em cada jogo e não é enviado para a nuvem.',
      authOr: 'ou',
      authOrGoogle: 'ou continue com',
      authOrGuest: 'ou',
      authGoogleButton: 'Continuar com Google',
      authGoogleStarting: 'Abrindo o Google...',
      authGoogleUnavailable: 'O login com Google ainda não está configurado.',
      authRateLimit: 'Muitas solicitações foram feitas recentemente. Aguarde alguns minutos e tente novamente.',
      authInvalidCredentials: 'E-mail ou senha incorretos.',
      authEmailNotConfirmed: 'Este e-mail ainda precisa ser confirmado antes do login.',
      accountGuestSubtitle: 'Guest • sem saves na nuvem',
      accountGuestLocal: 'Modo Guest • dados locais neste dispositivo',
      accountProfileTab: 'Perfil',
      accountCloudTab: 'Nuvem',
      profileTitle: 'Perfil da conta',
      profileHelp: 'Nickname e foto ficam salvos na sua conta e acompanham você em outros dispositivos.',
      profileDisplayName: 'Nickname',
      profileNamePlaceholder: 'Escolha seu nickname',
      profileNicknameRule: '2–32 caracteres. Maiúsculas, minúsculas e espaços não criam nomes duplicados.',
      profileNicknameReady: 'Você pode alterar seu nickname agora.',
      profileNicknameCooldown: 'Próxima alteração de nickname em {time}.',
      profileNicknameTaken: 'Esse nickname já está sendo usado por outra conta.',
      profileNicknameCooldownError: 'Seu nickname só pode ser alterado a cada 2 horas.',
      profileLoading: 'Carregando perfil da conta...',
      profileLoadError: 'Não foi possível carregar seu perfil da nuvem.',
      profileSaveError: 'Não foi possível salvar seu perfil agora.',
      profilePhoto: 'Foto de perfil',
      profileChoosePhoto: 'Escolher foto',
      profileRemovePhoto: 'Remover foto',
      profileSave: 'Salvar perfil',
      profileSaved: 'Perfil sincronizado com a sua conta.',
      profileTitlesKicker: 'TÍTULOS',
      profileTitlesTitle: 'Títulos equipados',
      profileTitlesHelp: 'Escolha até 3 títulos desbloqueados para aparecer ao lado do seu nickname.',
      profileTitlesSave: 'Salvar títulos',
      profileTitlesSaved: 'Títulos atualizados.',
      profileTitlesEmpty: 'Você ainda não desbloqueou nenhum título.',
      profileTitlesLoading: 'Carregando títulos...',
      profileTitlesLimit: 'Você pode equipar no máximo 3 títulos.',
      publicProfileKicker: 'PERFIL PÚBLICO',
      publicProfileGames: 'jogos jogados',
      publicProfileReviews: 'avaliações',
      publicProfileLoading: 'Carregando perfil...',
      publicProfilePlayedTitle: 'Jogos jogados',
      publicProfilePlayedHelp: 'Jogos abertos por esta conta pelo portal. Nenhum save é exibido.',
      publicProfileReviewsTitle: 'Avaliações públicas',
      publicProfileReviewsHelp: 'Somente avaliações visíveis para a comunidade.',
      publicProfileError: 'Não foi possível carregar este perfil.',
      publicProfileNoGames: 'Nenhum jogo registrado ainda.',
      publicProfileNoReviews: 'Nenhuma avaliação pública ainda.',
      publicProfileLastPlayed: 'Última partida',
      publicProfileOpen: 'Ver perfil de {name}',
      profileInvalidName: 'Escolha um nickname entre 2 e 32 caracteres.',
      profileInvalidImage: 'Escolha uma imagem PNG, JPG ou WEBP válida.',
      profileImageTooLarge: 'A imagem é grande demais. Use um arquivo de até 8 MB.',
      profileImageError: 'Não foi possível processar essa imagem.',
      guestCloudTitle: 'Cloud Save indisponível no modo Guest',
      guestCloudText: 'Entre ou crie uma conta para ativar a sincronização entre dispositivos.',
      guestGoToLogin: 'Entrar ou criar conta',
      guestExit: 'Sair do modo Guest',
      accountNewPasswordTitle: 'Defina uma nova senha',
      accountNewPasswordHelp: 'Digite a nova senha para concluir a recuperação da conta.',
      accountNewPassword: 'Nova senha',
      accountUpdatePassword: 'Atualizar senha',
      accountBackLogin: 'Voltar ao login',
      cloudSaveTitle: 'Sincronização',
      cloudReady: 'Pronto',
      cloudSyncing: 'Sincronizando',
      cloudSynced: 'Sincronizado',
      cloudError: 'Erro',
      cloudReadyText: 'Blood Machine será sincronizado automaticamente quando aberto pelo portal.',
      cloudNeverSynced: 'Ainda não sincronizado nesta sessão',
      cloudLastSync: 'Última sincronização: {time}',
      cloudBridgeWaiting: 'Aguardando um jogo compatível abrir pelo portal.',
      cloudBridgeConnected: 'Jogo conectado ao portal.',
      cloudSnapshotReceived: 'Save recebido do Blood Machine; enviando para a nuvem.',
      cloudSyncNow: 'Sincronizar agora',
      cloudOpenGameFirst: 'Abra o Blood Machine pelo portal antes de sincronizar.',
      cloudBridgeAccountChanged: 'A conta mudou depois que o jogo foi aberto. Reabra o jogo pelo portal.',
      cloudChecking: 'Verificando',
      cloudHandshaking: 'Conectando',
      cloudAuthorizeGame: 'Autorize a conexão na janela do jogo.',
      cloudAuthorizationRequired: 'O Blood Machine reconheceu o portal, mas precisa da sua autorização antes de enviar o save.',
      cloudBridgeHandshake: 'Jogo aberto; concluindo conexão segura com o portal.',
      cloudBridgeEmpty: 'Jogo conectado. Ainda não há progresso persistente para enviar.',
      cloudDatabaseReady: 'Pronto para sincronizar. Aguardando o save do Blood Machine.',
      cloudSnapshotQueued: 'Save recebido do Blood Machine; concluindo a sincronização.',
      cloudBridgeError: 'A conexão com o jogo falhou.',
      cloudSectionTitle: 'Sincronização na Nuvem',
      cloudSearchPlaceholder: 'Pesquisar jogo...',
      cloudInfoButton: 'Informações',
      cloudInfoTitle: 'Informações da sincronização',
      cloudInfoStatus: 'Status',
      cloudInfoSynced: 'Sincronizado',
      cloudInfoNotSynced: 'Não sincronizado',
      cloudInfoLastSync: 'Última sincronização',
      cloudInfoRevision: 'Revisão do save',
      cloudInfoSaveVersion: 'Versão do save',
      cloudInfoClientUpdate: 'Última alteração no jogo',
      cloudInfoBridge: 'Conexão com o jogo',
      cloudInfoError: 'Último erro',
      cloudInfoNoError: 'Nenhum',
      cloudInfoClose: 'Fechar',
      cloudSearchEmpty: 'Nenhum jogo integrado encontrado.',
      cloudManualNoGameOpen: 'Abra pelo portal um jogo integrado antes de sincronizar manualmente.',
      cloudManualRequested: 'Sincronização manual solicitada.',
      cloudStatusChecking: 'Verificando',
      cloudStatusWaiting: 'Aguardando o jogo',
      cloudStatusConnected: 'Conectado',
      cloudStatusAuthorization: 'Aguardando autorização',
      cloudStatusReceiving: 'Save recebido',
      cloudStatusEmpty: 'Sem save local',
      cloudStatusError: 'Erro',
      authServiceUnavailable: 'Serviço de conta indisponível no momento.',
      authPasswordsMismatch: 'As senhas não são iguais.',
      authAccountCreated: 'Conta criada. Você já está conectado.',
      authAccountCreatedNeedsConfirmation: 'Conta criada, mas a confirmação de e-mail ainda está ativada. Verifique sua caixa de entrada.',
      authSignedIn: 'Login realizado.',
      authSignedOut: 'Você saiu da conta.',
      authResetSent: 'E-mail de recuperação enviado.',
      authPasswordUpdated: 'Senha atualizada.',
      authEnterEmail: 'Digite seu e-mail primeiro.',
      cloudSavedToast: 'Save sincronizado na nuvem.',
      cloudLoadError: 'Não foi possível acessar a nuvem. O save local continua protegido.',
      eyebrow: 'Jogos independentes, feitos na raça',
      heroTitleA: 'Um lugar.',
      heroTitleB: 'Todos os jogos.',
      heroDescription: 'Conheça os mundos da ZOINHO GAMES: ação intensa, sobrevivência, estratégia, ritmo e experiências criadas para jogar direto no navegador.',
      exploreGames: 'Explorar jogos',
      knowProject: 'Conhecer o projeto',
      statGames: 'jogos disponíveis',
      statBrowser: 'direto no navegador',
      statPlatform: 'plataforma atual',
      featured: 'EM DESTAQUE',
      chronoShort: 'Sobreviva ao caos temporal e domine combinações poderosas.',
      catalogKicker: 'CATÁLOGO',
      catalogTitle: 'Escolha sua próxima partida',
      catalogDescription: 'Um catálogo em expansão com ação, estratégia, ritmo, corrida e muito mais.',
      searchLabel: 'Buscar jogo',
      searchPlaceholder: 'Buscar por nome ou gênero...',
      filterAll: 'Todos',
      filterAction: 'Ação',
      filterSurvival: 'Sobrevivência',
      filterStrategy: 'Estratégia',
      filterRpg: 'RPG',
      filterMultiplayer: 'Multiplayer',
      available: 'Disponível',
      playNow: 'Jogar agora',
      emptyTitle: 'Nenhum jogo encontrado',
      emptyDescription: 'Tente outro nome, gênero ou remova o filtro atual.',
      clearFilters: 'Limpar filtros',
      aboutKicker: 'SOBRE A ZOINHO GAMES',
      aboutTitle: 'Jogos independentes. Ideias sem limite.',
      aboutDescription: 'A ZOINHO GAMES reúne jogos de Z01NH0 e projetos de criadores parceiros em um só catálogo, com foco em experiências marcantes e diversão direta no navegador.',
      pointOneTitle: 'Feito de forma independente',
      pointOneText: 'Cada projeto nasce de ideias próprias e evolui com novas atualizações.',
      pointTwoTitle: 'Jogue sem instalar',
      pointTwoText: 'Abra no navegador, escolha um jogo e comece a jogar.',
      pointThreeTitle: 'Catálogo em expansão',
      pointThreeText: 'Mais jogos, capas, previews e novidades chegarão ao portal.',
      supportKicker: 'SUPORTE E CONTATO',
      supportTitle: 'Sua opinião também faz parte dos nossos jogos.',
      supportDescription: 'Caso tenha algum problema, reclamação ou até ideias do que podemos melhorar, entre em contato conosco!',
      supportProblemsTitle: 'Problemas',
      supportProblemsText: 'Avise caso algum jogo ou recurso não esteja funcionando corretamente.',
      supportComplaintsTitle: 'Reclamações',
      supportComplaintsText: 'Conte o que incomodou para que possamos analisar e melhorar.',
      supportIdeasTitle: 'Ideias e sugestões',
      supportIdeasText: 'Compartilhe propostas para melhorar o portal ou os jogos.',
      officialEmail: 'E-MAIL OFICIAL',
      talkToUs: 'Fale com a ZOINHO GAMES',
      emailInstruction: 'Envie uma mensagem pelo seu aplicativo de e-mail ou copie o endereço abaixo.',
      contactButton: 'Entrar em contato',
      supportFooterNote: 'Ao clicar, o Gmail será aberto no navegador com nosso e-mail já preenchido.',
      rights: 'Todos os direitos reservados.',
      backTop: 'Voltar ao topo',
      preferences: 'PREFERÊNCIAS',
      settingsTitle: 'Configurações',
      appearance: 'Aparência',
      appearanceText: 'Escolha a identidade visual do portal.',
      darkTheme: 'Preto e vermelho',
      darkThemeSub: 'Tema padrão',
      lightTheme: 'Branco e azul',
      lightThemeSub: 'Tema claro',
      language: 'Idioma',
      languageText: 'Altere o idioma da interface.',
      typography: 'Tipografia',
      typographyText: 'Ajuste o tamanho e o estilo das fontes do portal.',
      fontSize: 'Tamanho da fonte',
      fontStyle: 'Estilo da fonte',
      fontSizeCompact: 'Compacta',
      fontSizeNormal: 'Padrão',
      fontSizeComfortable: 'Confortável',
      fontSizeLarge: 'Grande',
      fontModern: 'Moderna e neutra',
      fontReadable: 'Leitura confortável',
      fontGeometric: 'Geométrica e forte',
      fontClassic: 'Clássica e elegante',
      fontRetro: 'Retrô e monoespaçada',
      fontFantasy: 'Fantasia caótica',
      reset: 'Restaurar padrão',
      done: 'Concluído',
      platform: 'Plataforma',
      mode: 'Modo',
      genres: 'Gêneros',
      createdOn: 'Data de criação',
      lastUpdated: 'Última atualização',
      createdBy: 'Criado por',
      loadingDates: 'Carregando...',
      dateUnavailable: 'Não disponível',
      noData: 'Sem Dados',
      settingsSaved: 'Preferências atualizadas',
      defaultsRestored: 'Configurações restauradas'
    },
    en: {
      navHome: 'Home',
      navGames: 'Games',
      navAbout: 'About',
      navSupport: 'Support & Contact',
      settings: 'Settings',
      accountLogin: 'Sign in',
      accountCreate: 'Create account',
      accountCloudOff: 'Cloud Save off',
      accountCloudOn: 'Cloud Save active',
      accountKicker: 'ZOINHO ACCOUNT',
      accountTitle: 'Your account',
      accountEmail: 'Email',
      accountPassword: 'Password',
      accountPasswordConfirm: 'Confirm password',
      accountLoginHelp: 'Sign in to sync your saves across computers.',
      accountSignupHelp: 'Create your ZOINHO account and start syncing across devices.',
      accountForgot: 'Forgot my password',
      accountLogout: 'Sign out',
      accountConnected: 'CONNECTED',
      accountGuest: 'GUEST',
      accountGuestButton: 'Play as Guest (⚠️ No cloud saves ⚠️)',
      accountGuestHelp: 'Enter the portal without an account. Progress remains local inside each game and is not uploaded to the cloud.',
      authOr: 'or',
      authOrGoogle: 'or continue with',
      authOrGuest: 'or',
      authGoogleButton: 'Continue with Google',
      authGoogleStarting: 'Opening Google...',
      authGoogleUnavailable: 'Google sign-in is not configured yet.',
      authRateLimit: 'Too many requests were made recently. Wait a few minutes and try again.',
      authInvalidCredentials: 'Incorrect email or password.',
      authEmailNotConfirmed: 'This email still needs to be confirmed before signing in.',
      accountGuestSubtitle: 'Guest • no cloud saves',
      accountGuestLocal: 'Guest mode • local data on this device',
      accountProfileTab: 'Profile',
      accountCloudTab: 'Cloud',
      profileTitle: 'Account profile',
      profileHelp: 'Your nickname and photo are saved to your account and follow you across devices.',
      profileDisplayName: 'Nickname',
      profileNamePlaceholder: 'Choose your nickname',
      profileNicknameRule: '2–32 characters. Case and extra spaces do not create duplicate names.',
      profileNicknameReady: 'You can change your nickname now.',
      profileNicknameCooldown: 'Next nickname change in {time}.',
      profileNicknameTaken: 'That nickname is already used by another account.',
      profileNicknameCooldownError: 'Your nickname can only be changed once every 2 hours.',
      profileLoading: 'Loading account profile...',
      profileLoadError: 'Your cloud profile could not be loaded.',
      profileSaveError: 'Your profile could not be saved right now.',
      profilePhoto: 'Profile photo',
      profileChoosePhoto: 'Choose photo',
      profileRemovePhoto: 'Remove photo',
      profileSave: 'Save profile',
      profileSaved: 'Profile synced to your account.',
      profileTitlesKicker: 'TITLES',
      profileTitlesTitle: 'Equipped titles',
      profileTitlesHelp: 'Choose up to 3 unlocked titles to display next to your nickname.',
      profileTitlesSave: 'Save titles',
      profileTitlesSaved: 'Titles updated.',
      profileTitlesEmpty: 'You have not unlocked any titles yet.',
      profileTitlesLoading: 'Loading titles...',
      profileTitlesLimit: 'You can equip at most 3 titles.',
      publicProfileKicker: 'PUBLIC PROFILE',
      publicProfileGames: 'games played',
      publicProfileReviews: 'reviews',
      publicProfileLoading: 'Loading profile...',
      publicProfilePlayedTitle: 'Games played',
      publicProfilePlayedHelp: 'Games opened by this account through the portal. No save data is shown.',
      publicProfileReviewsTitle: 'Public reviews',
      publicProfileReviewsHelp: 'Only reviews visible to the community.',
      publicProfileError: 'This profile could not be loaded.',
      publicProfileNoGames: 'No games recorded yet.',
      publicProfileNoReviews: 'No public reviews yet.',
      publicProfileLastPlayed: 'Last played',
      publicProfileOpen: 'View {name} profile',
      profileInvalidName: 'Choose a nickname between 2 and 32 characters.',
      profileInvalidImage: 'Choose a valid PNG, JPG or WEBP image.',
      profileImageTooLarge: 'The image is too large. Use a file up to 8 MB.',
      profileImageError: 'This image could not be processed.',
      guestCloudTitle: 'Cloud Save unavailable in Guest mode',
      guestCloudText: 'Sign in or create an account to enable synchronization across devices.',
      guestGoToLogin: 'Sign in or create account',
      guestExit: 'Leave Guest mode',
      accountNewPasswordTitle: 'Set a new password',
      accountNewPasswordHelp: 'Enter your new password to finish account recovery.',
      accountNewPassword: 'New password',
      accountUpdatePassword: 'Update password',
      accountBackLogin: 'Back to sign in',
      cloudSaveTitle: 'Synchronization',
      cloudReady: 'Ready',
      cloudSyncing: 'Syncing',
      cloudSynced: 'Synced',
      cloudError: 'Error',
      cloudReadyText: 'Blood Machine syncs automatically when launched through the portal.',
      cloudNeverSynced: 'Not synced in this session yet',
      cloudLastSync: 'Last sync: {time}',
      cloudBridgeWaiting: 'Waiting for a compatible game to be launched through the portal.',
      cloudBridgeConnected: 'Game connected to the portal.',
      cloudSnapshotReceived: 'Save received from Blood Machine; uploading to the cloud.',
      cloudSyncNow: 'Sync now',
      cloudOpenGameFirst: 'Launch Blood Machine through the portal before syncing.',
      cloudBridgeAccountChanged: 'The account changed after the game was opened. Relaunch the game through the portal.',
      cloudChecking: 'Checking',
      cloudHandshaking: 'Connecting',
      cloudAuthorizeGame: 'Authorize the connection in the game window.',
      cloudAuthorizationRequired: 'Blood Machine recognized the portal, but needs your approval before sending the save.',
      cloudBridgeHandshake: 'Game opened; completing the secure portal connection.',
      cloudBridgeEmpty: 'Game connected. There is no persistent progress to upload yet.',
      cloudDatabaseReady: 'Ready to sync. Waiting for the Blood Machine save.',
      cloudSnapshotQueued: 'Save received from Blood Machine; finishing synchronization.',
      cloudBridgeError: 'The game connection failed.',
      cloudSectionTitle: 'Cloud Synchronization',
      cloudSearchPlaceholder: 'Search game...',
      cloudInfoButton: 'Information',
      cloudInfoTitle: 'Synchronization information',
      cloudInfoStatus: 'Status',
      cloudInfoSynced: 'Synced',
      cloudInfoNotSynced: 'Not synced',
      cloudInfoLastSync: 'Last sync',
      cloudInfoRevision: 'Save revision',
      cloudInfoSaveVersion: 'Save version',
      cloudInfoClientUpdate: 'Last game change',
      cloudInfoBridge: 'Game connection',
      cloudInfoError: 'Last error',
      cloudInfoNoError: 'None',
      cloudInfoClose: 'Close',
      cloudSearchEmpty: 'No integrated game found.',
      cloudManualNoGameOpen: 'Launch an integrated game through the portal before syncing manually.',
      cloudManualRequested: 'Manual synchronization requested.',
      cloudStatusChecking: 'Checking',
      cloudStatusWaiting: 'Waiting for game',
      cloudStatusConnected: 'Connected',
      cloudStatusAuthorization: 'Waiting for authorization',
      cloudStatusReceiving: 'Save received',
      cloudStatusEmpty: 'No local save',
      cloudStatusError: 'Error',
      authServiceUnavailable: 'Account service is currently unavailable.',
      authPasswordsMismatch: 'The passwords do not match.',
      authAccountCreated: 'Account created. You are already signed in.',
      authAccountCreatedNeedsConfirmation: 'Account created, but email confirmation is still enabled. Check your inbox.',
      authSignedIn: 'Signed in.',
      authSignedOut: 'Signed out.',
      authResetSent: 'Recovery email sent.',
      authPasswordUpdated: 'Password updated.',
      authEnterEmail: 'Enter your email first.',
      cloudSavedToast: 'Save synced to the cloud.',
      cloudLoadError: 'Cloud access failed. Your local save is still protected.',
      eyebrow: 'Independent games, built with passion',
      heroTitleA: 'One place.',
      heroTitleB: 'Every game.',
      heroDescription: 'Discover the worlds of ZOINHO GAMES: intense action, survival, strategy, rhythm and experiences designed to be played directly in your browser.',
      exploreGames: 'Explore games',
      knowProject: 'About the project',
      statGames: 'available games',
      statBrowser: 'play in your browser',
      statPlatform: 'current platform',
      featured: 'FEATURED',
      chronoShort: 'Survive temporal chaos and master powerful combinations.',
      catalogKicker: 'CATALOG',
      catalogTitle: 'Choose your next game',
      catalogDescription: 'An expanding catalog with action, strategy, rhythm, racing and more.',
      searchLabel: 'Search game',
      searchPlaceholder: 'Search by name or genre...',
      filterAll: 'All',
      filterAction: 'Action',
      filterSurvival: 'Survival',
      filterStrategy: 'Strategy',
      filterRpg: 'RPG',
      filterMultiplayer: 'Multiplayer',
      available: 'Available',
      playNow: 'Play now',
      emptyTitle: 'No games found',
      emptyDescription: 'Try another name or genre, or remove the current filter.',
      clearFilters: 'Clear filters',
      aboutKicker: 'ABOUT ZOINHO GAMES',
      aboutTitle: 'Independent games. Limitless ideas.',
      aboutDescription: 'ZOINHO GAMES brings together games by Z01NH0 and projects from partner creators in one catalog, focused on memorable experiences and browser-ready fun.',
      pointOneTitle: 'Independently made',
      pointOneText: 'Each project starts with original ideas and grows through new updates.',
      pointTwoTitle: 'Play without installing',
      pointTwoText: 'Open your browser, choose a game and start playing.',
      pointThreeTitle: 'An expanding catalog',
      pointThreeText: 'More games, covers, previews and updates are coming to the portal.',
      supportKicker: 'SUPPORT & CONTACT',
      supportTitle: 'Your feedback is also part of our games.',
      supportDescription: 'If you have a problem, complaint or even ideas about what we can improve, contact us!',
      supportProblemsTitle: 'Problems',
      supportProblemsText: 'Let us know if a game or feature is not working properly.',
      supportComplaintsTitle: 'Complaints',
      supportComplaintsText: 'Tell us what bothered you so we can review it and improve.',
      supportIdeasTitle: 'Ideas and suggestions',
      supportIdeasText: 'Share proposals to improve the portal or the games.',
      officialEmail: 'OFFICIAL E-MAIL',
      talkToUs: 'Talk to ZOINHO GAMES',
      emailInstruction: 'Send a message through your e-mail app or copy the address below.',
      contactButton: 'Contact us',
      supportFooterNote: 'Clicking will open Gmail in your browser with our e-mail address already filled in.',
      rights: 'All rights reserved.',
      backTop: 'Back to top',
      preferences: 'PREFERENCES',
      settingsTitle: 'Settings',
      appearance: 'Appearance',
      appearanceText: 'Choose the visual identity of the portal.',
      darkTheme: 'Black and red',
      darkThemeSub: 'Default theme',
      lightTheme: 'White and blue',
      lightThemeSub: 'Light theme',
      language: 'Language',
      languageText: 'Change the interface language.',
      typography: 'Typography',
      typographyText: 'Adjust the portal font size and visual style.',
      fontSize: 'Font size',
      fontStyle: 'Font style',
      fontSizeCompact: 'Compact',
      fontSizeNormal: 'Default',
      fontSizeComfortable: 'Comfortable',
      fontSizeLarge: 'Large',
      fontModern: 'Modern and neutral',
      fontReadable: 'Comfortable reading',
      fontGeometric: 'Geometric and bold',
      fontClassic: 'Classic and elegant',
      fontRetro: 'Retro and monospaced',
      fontFantasy: 'Chaotic fantasy',
      reset: 'Restore defaults',
      done: 'Done',
      platform: 'Platform',
      mode: 'Mode',
      genres: 'Genres',
      createdOn: 'Creation date',
      lastUpdated: 'Last updated',
      createdBy: 'Created by',
      loadingDates: 'Loading...',
      dateUnavailable: 'Unavailable',
      noData: 'No Data',
      settingsSaved: 'Preferences updated',
      defaultsRestored: 'Settings restored'
    }
  };

  const FALLBACK_GAMES = [
    {
      id: 'chrono-shards',
      order: 1,
      title: 'Chrono Shards',
      url: 'https://chrono-shard.vercel.app',
      image: 'assets/covers/chrono-shards.png',
      kicker: 'ROGUELITE',
      creator: 'Z01NH0',
      categories: ['action', 'survival', 'rpg', 'roguelite', 'bullethell', 'bossrush'],
      tags: { 'pt-BR': ['Ação', 'Roguelite', 'Bullet Hell'], en: ['Action', 'Roguelite', 'Bullet Hell'] },
      mode: { 'pt-BR': 'Singleplayer', en: 'Single-player' },
      genres: {
        'pt-BR': 'Ação, Roguelite, Sobrevivência, Bullet Hell, Arena Shooter, Hack and Slash, RPG e Boss Rush.',
        en: 'Action, Roguelite, Survival, Bullet Hell, Arena Shooter, Hack and Slash, RPG and Boss Rush.'
      },
      short: {
        'pt-BR': 'Sobreviva ao caos temporal e domine combinações poderosas.',
        en: 'Survive temporal chaos and master powerful combinations.'
      },
      description: {
        'pt-BR': 'Chrono Shards é um jogo de ação e sobrevivência em estilo roguelite, com combates intensos, personagens únicos, habilidades especiais e hordas de inimigos cada vez mais perigosas. Enfrente chefes, explore modos como DOOM e Rift, desbloqueie Ultimates pelo Awakening, evolua sua conta e monte combinações poderosas para sobreviver ao caos temporal.',
        en: 'Chrono Shards is a roguelite action-survival game with intense combat, unique characters, special abilities and increasingly dangerous enemy hordes. Face bosses, explore modes such as DOOM and Rift, unlock Ultimates through Awakening, level up your account and create powerful combinations to survive temporal chaos.'
      },
      featured: true
    },
    {
      id: 'dead-signal',
      order: 2,
      title: 'Dead Signal',
      url: 'https://zombie-survival-six.vercel.app',
      image: 'assets/covers/dead-signal.png',
      kicker: 'SURVIVAL HORROR',
      creator: 'Z01NH0',
      categories: ['action', 'survival', 'horror', 'roguelite', 'shooter', 'zombies'],
      tags: { 'pt-BR': ['Ação', 'Terror', 'Zumbis'], en: ['Action', 'Horror', 'Zombies'] },
      mode: { 'pt-BR': 'Singleplayer', en: 'Single-player' },
      genres: {
        'pt-BR': 'Ação, Sobrevivência, Terror, Roguelite, Tiro e Zumbis.',
        en: 'Action, Survival, Horror, Roguelite, Shooter and Zombies.'
      },
      short: {
        'pt-BR': 'Sobreviva às noites, enfrente hordas de infectados e evolua seu equipamento.',
        en: 'Survive the nights, face infected hordes and improve your gear.'
      },
      description: {
        'pt-BR': 'Sobreviva a hordas de zumbis em um mundo tomado pelo caos, enfrentando ciclos de dia e noite, chefes perigosos e inimigos cada vez mais fortes. Explore o mapa, encontre recursos, compre e venda equipamentos, melhore suas armas e prepare-se para sobreviver o máximo possível.',
        en: 'Survive zombie hordes in a world consumed by chaos, facing day and night cycles, dangerous bosses and increasingly stronger enemies. Explore the map, find resources, buy and sell equipment, upgrade your weapons and prepare to survive for as long as possible.'
      }
    },
    {
      id: 'neon-duel-beats',
      order: 3,
      title: 'Neon Duel Beats',
      url: 'https://neon-duel-beats.vercel.app',
      image: 'assets/covers/neon-duel-beats.png',
      kicker: 'RHYTHM BATTLE',
      creator: 'Z01NH0',
      categories: ['music', 'arcade', 'competitive', 'multiplayer'],
      tags: { 'pt-BR': ['Ritmo', 'Arcade', 'Multiplayer'], en: ['Rhythm', 'Arcade', 'Multiplayer'] },
      mode: { 'pt-BR': 'Singleplayer e multiplayer local', en: 'Single-player and local multiplayer' },
      genres: {
        'pt-BR': 'Ritmo, Música, Arcade, Competitivo, Multiplayer Local e Singleplayer.',
        en: 'Rhythm, Music, Arcade, Competitive, Local Multiplayer and Single-player.'
      },
      short: {
        'pt-BR': 'Acerte as notas, mantenha o combo e dispute músicas em partidas eletrizantes.',
        en: 'Hit the notes, keep the combo and battle through high-energy songs.'
      },
      description: {
        'pt-BR': 'Neon Duel Beats é um jogo de ritmo competitivo em que um ou dois jogadores enfrentam músicas de diferentes dificuldades, acertando setas sincronizadas com guitarras, baterias, solos e palm mutes. Com cenários animados, multiplicadores, notas sustentadas, modo solo com barra de vida e partidas locais para dois jogadores, o jogo mistura precisão, velocidade e muita energia visual.',
        en: 'Neon Duel Beats is a competitive rhythm game where one or two players face songs of different difficulties, hitting arrows synchronized with guitars, drums, solos and palm mutes. With animated stages, multipliers, hold notes, a solo mode with a life bar and local two-player matches, the game blends precision, speed and vibrant visual energy.'
      }
    },
    {
      id: 'arena-of-champions',
      order: 4,
      title: 'Arena of Champions',
      url: 'https://arena-of-champions-dsx4.vercel.app',
      image: 'assets/covers/arena-of-champions.png',
      kicker: 'ARENA BRAWLER',
      creator: 'Z01NH0',
      categories: ['action', 'multiplayer', 'pvp', 'bossrush', 'arcade'],
      tags: { 'pt-BR': ['Ação', 'PvP', 'Multiplayer'], en: ['Action', 'PvP', 'Multiplayer'] },
      mode: { 'pt-BR': 'Multiplayer local para 2 jogadores', en: 'Local multiplayer for 2 players' },
      genres: {
        'pt-BR': 'Ação, Batalha de Arena, Multiplayer Local, PvP, Hero Brawler, Boss Rush e Arcade.',
        en: 'Action, Arena Battler, Local Multiplayer, PvP, Hero Brawler, Boss Rush and Arcade.'
      },
      short: {
        'pt-BR': 'Escolha campeões únicos e entre em batalhas intensas para dois jogadores.',
        en: 'Pick unique champions and jump into intense two-player battles.'
      },
      description: {
        'pt-BR': 'Escolha entre diversos campeões com habilidades, passivas e ultimates únicas e enfrente batalhas intensas para dois jogadores no mesmo PC. Dispute duelos, sobreviva ao Modo Caos, domine a zona no Rei da Arena ou una forças contra um poderoso chefe no Boss Rush, explorando arenas repletas de obstáculos e perigos especiais.',
        en: 'Choose from multiple champions with unique skills, passives and ultimates and face intense battles for two players on the same PC. Fight duels, survive Chaos Mode, control the zone in King of the Arena or join forces against a powerful boss in Boss Rush while exploring arenas filled with obstacles and special hazards.'
      }
    },
    {
      id: 'arqueiro-lendario',
      order: 5,
      title: 'Arqueiro Lendário',
      url: 'https://arqueiro-lendario.vercel.app',
      image: 'assets/covers/arqueiro-lendario.png',
      kicker: 'ARCHER SURVIVAL',
      creator: 'Z01NH0',
      categories: ['action', 'survival', 'bullethell', 'bossrush', 'arcade'],
      tags: { 'pt-BR': ['Ação', 'Sobrevivência', 'Boss Rush'], en: ['Action', 'Survival', 'Boss Rush'] },
      mode: { 'pt-BR': 'Singleplayer', en: 'Single-player' },
      genres: {
        'pt-BR': 'Ação, Sobrevivência, Tiro em Visão Superior, Hordas, Bullet Hell, Boss Rush e Arcade.',
        en: 'Action, Survival, Top-down Shooter, Hordes, Bullet Hell, Boss Rush and Arcade.'
      },
      short: {
        'pt-BR': 'Sobreviva a monstros com flechas, dashes e habilidades devastadoras.',
        en: 'Survive monster waves with arrows, dashes and devastating powers.'
      },
      description: {
        'pt-BR': 'Assuma o papel de um arqueiro poderoso e sobreviva a ondas crescentes de monstros usando flechas, dashes, power-ups e habilidades devastadoras. Escolha entre poderes como chuva de flechas, relâmpagos, congelamento e meteoros, derrote os Reis da Morte e prove seu valor no brutal Modo Inferno.',
        en: 'Take on the role of a powerful archer and survive growing waves of monsters using arrows, dashes, power-ups and devastating abilities. Choose powers such as arrow rain, lightning, freezing and meteors, defeat the Death Kings and prove your worth in the brutal Inferno Mode.'
      }
    },
    {
      id: 'blood-machine',
      order: 6,
      title: 'Blood Machine: Inferno Cycles',
      url: 'https://blood-machine.vercel.app',
      image: 'assets/covers/blood-machine.png',
      kicker: 'HELL SHOOTER',
      creator: 'Z01NH0',
      categories: ['action', 'arcade', 'bossrush', 'shooter'],
      tags: { 'pt-BR': ['Ação', 'Arcade', 'Boss Rush'], en: ['Action', 'Arcade', 'Boss Rush'] },
      mode: { 'pt-BR': 'Singleplayer', en: 'Single-player' },
      genres: {
        'pt-BR': 'Ação, Shooter de Plataforma, Run and Gun, Arena Shooter, Score Attack, Boss Rush e Arcade.',
        en: 'Action, Platform Shooter, Run and Gun, Arena Shooter, Score Attack, Boss Rush and Arcade.'
      },
      short: {
        'pt-BR': 'Atravesse o inferno em um shooter veloz com muito estilo e mobilidade.',
        en: 'Blast through hell in a fast shooter packed with style and mobility.'
      },
      description: {
        'pt-BR': 'Atravesse as profundezas do inferno em um shooter de plataforma extremamente rápido, combinando wall running, dashes, deslizadas, ataques aéreos e um arsenal de cinco armas com disparos especiais. Crie combos, aumente sua classificação de estilo e enfrente criaturas demoníacas e chefes gigantescos em fases como a Forja de Sangue e a Catedral Carmesim.',
        en: 'Cross the depths of hell in an extremely fast platform shooter, combining wall running, dashes, slides, aerial attacks and an arsenal of five weapons with special shots. Build combos, raise your style rank and face demonic creatures and giant bosses in stages such as the Blood Forge and the Crimson Cathedral.'
      }
    },
    {
      id: 'feiticaria',
      order: 7,
      title: 'Feitiçaria',
      url: 'https://z01nh0.github.io/Feiticaria/',
      image: 'assets/covers/feiticaria.png',
      kicker: 'CARD DUEL',
      creator: 'Z01NH0',
      categories: ['strategy', 'cards', 'turnbased'],
      tags: { 'pt-BR': ['Cartas', 'Estratégia', 'Fantasia'], en: ['Cards', 'Strategy', 'Fantasy'] },
      mode: { 'pt-BR': 'Singleplayer', en: 'Single-player' },
      genres: {
        'pt-BR': 'Cartas, Estratégia, Combate por Turnos, Card Battler, Fantasia, Duelo e Single-player.',
        en: 'Cards, Strategy, Turn-based Combat, Card Battler, Fantasy, Duel and Single-player.'
      },
      short: {
        'pt-BR': 'Duelos estratégicos de cartas inspirados nos grandes card games de fantasia.',
        en: 'Strategic card duels inspired by great fantasy card games.'
      },
      description: {
        'pt-BR': 'Enfrente um adversário controlado pela inteligência artificial em duelos estratégicos de cartas inspirados nos grandes card games de fantasia. Construa seu campo utilizando terrenos, invoque criaturas, lance feitiços, organize ataques e bloqueios e adapte sua estratégia para reduzir a vida do oponente antes que ele faça o mesmo com você.',
        en: 'Face an AI-controlled opponent in strategic card duels inspired by great fantasy card games. Build your field using lands, summon creatures, cast spells, organize attacks and blocks, and adapt your strategy to reduce your opponent’s life before they do the same to you.'
      }
    },
    {
      id: 'heroes-battle',
      order: 8,
      title: 'Heroes Battle',
      url: 'https://heroes-battle-ultimate-version.vercel.app',
      image: 'assets/covers/heroes-battle.png',
      kicker: 'HERO SURVIVAL',
      creator: 'Z01NH0',
      categories: ['action', 'survival', 'arena', 'bullethell', 'bossrush', 'arcade'],
      tags: { 'pt-BR': ['Ação', 'Hordas', 'Arcade'], en: ['Action', 'Hordes', 'Arcade'] },
      mode: { 'pt-BR': 'Singleplayer', en: 'Single-player' },
      genres: {
        'pt-BR': 'Ação, Sobrevivência, Tiro em Visão Superior, Hordas, Arena, Bullet Hell, Boss Rush e Arcade.',
        en: 'Action, Survival, Top-down Shooter, Hordes, Arena, Bullet Hell, Boss Rush and Arcade.'
      },
      short: {
        'pt-BR': 'Escolha um herói e sobreviva a ondas intermináveis em busca da maior pontuação.',
        en: 'Choose a hero and survive endless waves while chasing the highest score.'
      },
      description: {
        'pt-BR': 'Escolha entre o Mago de Fogo, o Arqueiro Real e o Cavaleiro Negro e enfrente uma batalha interminável contra hordas de inimigos cada vez mais perigosos. Utilize ataques exclusivos, habilidades especiais, power-ups e diferentes estilos de combate para conquistar a maior pontuação possível e sobreviver aos ataques de chefes poderosos.',
        en: 'Choose between the Fire Mage, the Royal Archer and the Dark Knight and face an endless battle against increasingly dangerous enemy hordes. Use exclusive attacks, special abilities, power-ups and different combat styles to achieve the highest score possible and survive the attacks of powerful bosses.'
      }
    },
    {
      id: 'knight-of-valor',
      order: 9,
      title: 'Knight of Valor',
      url: 'https://knight-of-valor.vercel.app',
      image: 'assets/covers/knight-of-valor.png',
      kicker: 'FANTASY RPG',
      creator: 'Z01NH0',
      categories: ['rpg', 'adventure', 'strategy', 'turnbased', 'crafting'],
      tags: { 'pt-BR': ['RPG', 'Aventura', 'Fantasia'], en: ['RPG', 'Adventure', 'Fantasy'] },
      mode: { 'pt-BR': 'Singleplayer', en: 'Single-player' },
      genres: {
        'pt-BR': 'RPG, Aventura, Combate por Turnos, Exploração, Fantasia, Crafting e Progressão de Personagem.',
        en: 'RPG, Adventure, Turn-based Combat, Exploration, Fantasy, Crafting and Character Progression.'
      },
      short: {
        'pt-BR': 'Explore um reino de fantasia, evolua atributos e enfrente o Rei Corrompido.',
        en: 'Explore a fantasy realm, improve your attributes and face the Corrupted King.'
      },
      description: {
        'pt-BR': 'Explore um reino de fantasia como um cavaleiro destinado a enfrentar monstros, descobrir equipamentos e derrotar o Rei Corrompido. Evolua seus atributos, desbloqueie habilidades, participe de batalhas por turnos, complete missões, visite mercadores, produza equipamentos por crafting e descubra novas criaturas em diferentes biomas do mundo.',
        en: 'Explore a fantasy kingdom as a knight destined to face monsters, discover equipment and defeat the Corrupted King. Improve your attributes, unlock abilities, take part in turn-based battles, complete quests, visit merchants, craft equipment and discover new creatures across different biomes.'
      }
    },
    {
      id: 'racing-stars',
      order: 10,
      title: 'Racing Stars',
      url: 'https://racing-stars.vercel.app',
      image: 'assets/covers/racing-stars.png',
      kicker: 'ARCADE RACING',
      creator: 'Z01NH0',
      categories: ['racing', 'arcade', 'multiplayer', 'casual'],
      tags: { 'pt-BR': ['Corrida', 'Arcade', 'Multiplayer'], en: ['Racing', 'Arcade', 'Multiplayer'] },
      mode: { 'pt-BR': 'Singleplayer e multiplayer local', en: 'Single-player and local multiplayer' },
      genres: {
        'pt-BR': 'Corrida, Arcade, Endless Runner, Multiplayer Local, Competitivo e Casual.',
        en: 'Racing, Arcade, Endless Runner, Local Multiplayer, Competitive and Casual.'
      },
      short: {
        'pt-BR': 'Desvie de obstáculos, troque de faixa e dispute corridas rápidas e viciantes.',
        en: 'Dodge obstacles, switch lanes and race through fast, addictive runs.'
      },
      description: {
        'pt-BR': 'Acelere por pistas cada vez mais perigosas enquanto troca de faixa, desvia de obstáculos e administra sua velocidade para alcançar a maior distância possível. Enfrente um adversário controlado pelo jogo no modo solo ou dispute uma corrida competitiva para dois jogadores no mesmo computador.',
        en: 'Speed through increasingly dangerous tracks while switching lanes, dodging obstacles and managing your speed to reach the greatest distance possible. Face an AI-controlled rival in solo mode or compete in a local race for two players on the same computer.'
      }
    },
    {
      id: 'shuriken-master',
      order: 11,
      title: 'Shuriken Master',
      url: 'https://z01nh0.github.io/Shuriken-Master/',
      image: 'assets/covers/shuriken-master.png',
      kicker: 'NINJA ROGUELITE',
      creator: 'Z01NH0',
      categories: ['action', 'survival', 'roguelite', 'bullethell', 'bossrush'],
      tags: { 'pt-BR': ['Ação', 'Roguelite', 'Hordas'], en: ['Action', 'Roguelite', 'Hordes'] },
      mode: { 'pt-BR': 'Singleplayer', en: 'Single-player' },
      genres: {
        'pt-BR': 'Ação, Roguelite, Sobrevivência, Tiro em Visão Superior, Hordas, Bullet Hell e Boss Rush.',
        en: 'Action, Roguelite, Survival, Top-down Shooter, Hordes, Bullet Hell and Boss Rush.'
      },
      short: {
        'pt-BR': 'Enfrente ondas intermináveis com shurikens e poderes ninja especiais.',
        en: 'Fight endless waves with shurikens and special ninja powers.'
      },
      description: {
        'pt-BR': 'Torne-se um mestre ninja e enfrente ondas intermináveis de inimigos utilizando shurikens e poderes especiais adquiridos durante a partida. Monte combinações com projéteis flamejantes, explosivos, perfurantes ou congelantes, desbloqueie skins com bônus únicos e derrote chefes colossais até enfrentar o temido Antigo.',
        en: 'Become a ninja master and face endless enemy waves using shurikens and special powers acquired during the run. Build combinations with flaming, explosive, piercing or freezing projectiles, unlock skins with unique bonuses and defeat colossal bosses until you face the dreaded Ancient.'
      }
    },
    {
      id: 'neon-frontier',
      order: 12,
      title: 'Neon Frontier',
      url: 'https://tower-defense-olive.vercel.app',
      image: 'assets/covers/neon-frontier.png',
      kicker: 'TOWER DEFENSE',
      creator: 'Z01NH0',
      categories: ['strategy', 'survival', 'roguelite', 'basebuilding', 'scifi'],
      tags: { 'pt-BR': ['Estratégia', 'Tower Defense', 'Sci-Fi'], en: ['Strategy', 'Tower Defense', 'Sci-Fi'] },
      mode: { 'pt-BR': 'Singleplayer', en: 'Single-player' },
      genres: {
        'pt-BR': 'Tower Defense, Estratégia em Tempo Real, Construção de Base, Sobrevivência por Ondas, Gestão de Recursos, Ficção Científica, Boss Rush e Elementos Roguelite.',
        en: 'Tower Defense, Real-time Strategy, Base Building, Wave Survival, Resource Management, Science Fiction, Boss Rush and Roguelite Elements.'
      },
      short: {
        'pt-BR': 'Proteja o núcleo e construa uma fortaleza futurista contra ondas inimigas.',
        en: 'Protect the core and build a futuristic fortress against enemy waves.'
      },
      description: {
        'pt-BR': 'Proteja o núcleo de uma fortaleza futurista contra ondas crescentes de drones, tropas de elite e chefes colossais. Construa e aprimore oito tipos de defesa, incluindo canhões, barreiras, extratores, morteiros, unidades interceptadoras e armas do vazio. Administre créditos, utilize poderes orbitais, complete objetivos e invista os fragmentos conquistados em pesquisas permanentes para enfrentar operações cada vez mais perigosas.',
        en: 'Protect the core of a futuristic fortress against growing waves of drones, elite troops and colossal bosses. Build and upgrade eight types of defenses, including cannons, barriers, extractors, mortars, interceptor units and void weapons. Manage credits, use orbital powers, complete objectives and invest earned fragments in permanent research to face increasingly dangerous operations.'
      }
    },
    {
      id: 'other-side',
      order: 13,
      title: 'OTHER SIDE',
      url: 'https://other-side-ten.vercel.app/',
      image: 'assets/covers/other-side.png',
      kicker: 'ATMOSPHERIC PLATFORMER',
      creator: 'Klipza',
      datesAvailable: false,
      platform: { 'pt-BR': 'PC', en: 'PC' },
      categories: ['action', 'platformer', 'puzzle', 'narrative'],
      tags: { 'pt-BR': ['Ação', 'Plataforma 2.5D', 'Puzzle'], en: ['Action', '2.5D Platformer', 'Puzzle'] },
      mode: { 'pt-BR': 'Singleplayer', en: 'Single-player' },
      genres: {
        'pt-BR': 'Ação / Plataforma 2.5D com elementos de puzzle e narrativa atmosférica.',
        en: 'Action / 2.5D Platformer with puzzle elements and atmospheric storytelling.'
      },
      short: {
        'pt-BR': 'Atravesse os sete círculos do Submundo Digital e reconecte mente e corpo.',
        en: 'Cross the seven circles of the Digital Underworld and reconnect mind and body.'
      },
      description: {
        'pt-BR': 'Você é um fantasma aprisionado no Submundo Digital, uma dimensão feita de dados corrompidos e memórias em decomposição. Após um colapso neural, sua consciência foi fragmentada em dois núcleos — dois neurônios artificiais que ainda pulsam com uma única sinapse. Para voltar à vida, você precisa percorrer os sete círculos do subnível, coletar fragmentos de sua própria identidade e reativar o elo perdido entre mente e corpo. Cada passo no submundo é uma corrida contra o esquecimento: se os neurônios se apagarem, você se torna parte do vazio para sempre.',
        en: 'You are a ghost trapped in the Digital Underworld, a dimension built from corrupted data and decaying memories. After a neural collapse, your consciousness was fragmented into two cores — two artificial neurons still pulsing through a single synapse. To return to life, you must cross the seven circles of the sublevel, collect fragments of your own identity and reactivate the lost link between mind and body. Every step through the underworld is a race against oblivion: if the neurons go dark, you become part of the void forever.'
      }
    },
    {
      id: 'sunset-rush',
      order: 14,
      title: 'Sunset Rush – Fúria do Pôr do Sol',
      url: 'https://car-pend.vercel.app',
      image: 'assets/covers/sunset-rush.png',
      kicker: 'ENDLESS RACING',
      creator: 'Klipza',
      datesAvailable: false,
      platform: { 'pt-BR': 'PC / Celular', en: 'PC / Mobile' },
      categories: ['action', 'racing', 'arcade', 'mobile'],
      tags: { 'pt-BR': ['Corrida', 'Endless Runner', '3D'], en: ['Racing', 'Endless Runner', '3D'] },
      mode: { 'pt-BR': 'Singleplayer', en: 'Single-player' },
      genres: {
        'pt-BR': 'Corrida e Endless Runner 3D.',
        en: 'Racing and 3D Endless Runner.'
      },
      short: {
        'pt-BR': 'Corra por estradas costeiras, desvie do tráfego e avance por novos biomas.',
        en: 'Race along coastal roads, dodge traffic and progress through new biomes.'
      },
      description: {
        'pt-BR': 'Sunset Rush é um jogo de corrida 3D em estilo endless runner desenvolvido pela Klipza Estudio. Assuma o volante em uma estrada costeira banhada pelo sol poente, desvie do tráfego, colete itens e acumule pontos em uma jornada através de biomas variados. O jogo conta com gráficos imersivos, física realista e progressão profunda.',
        en: 'Sunset Rush is a 3D endless-runner racing game developed by Klipza Estudio. Take the wheel on a coastal road bathed in sunset light, dodge traffic, collect items and score points across varied biomes. The game features immersive graphics, realistic physics and deep progression.'
      }
    },
    {
      id: 'blue-space',
      order: 15,
      title: 'BLUE SPACE',
      url: 'https://blue-space-pearl.vercel.app',
      image: 'assets/covers/blue-space.png',
      kicker: 'SPACE COMBAT',
      creator: 'Klipza',
      datesAvailable: false,
      platform: { 'pt-BR': 'PC / Celular', en: 'PC / Mobile' },
      categories: ['action', 'shooter', 'space', 'mobile'],
      tags: { 'pt-BR': ['Space Shooter', 'Combate 3D', 'Exploração'], en: ['Space Shooter', '3D Combat', 'Exploration'] },
      mode: { 'pt-BR': 'Singleplayer', en: 'Single-player' },
      genres: {
        'pt-BR': 'Space Shooter 3D e Space Combat.',
        en: '3D Space Shooter and Space Combat.'
      },
      short: {
        'pt-BR': 'Pilote sua nave, destrua inimigos e desvende os segredos da Dimensão X.',
        en: 'Pilot your ship, destroy enemies and uncover the secrets of Dimension X.'
      },
      description: {
        'pt-BR': 'BLUE SPACE é um jogo de combate e exploração espacial em 3D desenvolvido pela Klipza Estudio. Pilote sua nave através do cosmos, desvie de meteoros, destrua naves inimigas e desvende os segredos da Dimensão X. Com gráficos imersivos, física realista e progressão profunda, o jogo oferece uma experiência espacial completa.',
        en: 'BLUE SPACE is a 3D space combat and exploration game developed by Klipza Estudio. Pilot your ship across the cosmos, dodge meteors, destroy enemy vessels and uncover the secrets of Dimension X. With immersive graphics, realistic physics and deep progression, it delivers a complete space experience.'
      }
    },
    {
      id: 'spacefn',
      order: 16,
      title: 'SpaceFN',
      url: 'https://space-fn0.vercel.app',
      image: 'assets/covers/spacefn.png',
      kicker: 'GALACTIC SHOOTER',
      creator: 'Klipza',
      datesAvailable: false,
      platform: { 'pt-BR': 'PC / Celular', en: 'PC / Mobile' },
      categories: ['action', 'shooter', 'arena', 'space', 'mobile'],
      tags: { 'pt-BR': ['Shooter 2D', 'Arena Shooter', 'Espacial'], en: ['2D Shooter', 'Arena Shooter', 'Space'] },
      mode: { 'pt-BR': 'Singleplayer', en: 'Single-player' },
      genres: {
        'pt-BR': 'Shooter 2D e Arena Shooter.',
        en: '2D Shooter and Arena Shooter.'
      },
      short: {
        'pt-BR': 'Destrua ondas espaciais, enfrente chefes e evolua sua frota.',
        en: 'Destroy space waves, face bosses and upgrade your fleet.'
      },
      description: {
        'pt-BR': 'SpaceFN é um jogo de tiro espacial desenvolvido pela Klipza Studio com uma pegada competitiva e progressão viciante. Domine o espaço, destrua ondas de naves inimigas, enfrente chefes imponentes e conquiste recursos para evoluir sua frota. Com loja, eventos diários, personalização de naves e comunidade integrada, SpaceFN é uma experiência galáctica em constante evolução.',
        en: 'SpaceFN is a space shooter developed by Klipza Studio with competitive gameplay and addictive progression. Dominate space, destroy waves of enemy ships, face imposing bosses and earn resources to upgrade your fleet. With a shop, daily events, ship customization and an integrated community, SpaceFN is an evolving galactic experience.'
      }
    },
    {
      id: 'escape',
      order: 17,
      title: 'Escape – A Jornada do Herói',
      url: 'https://black-zeta-liard.vercel.app',
      image: 'assets/covers/escape.png',
      kicker: 'PUZZLE PLATFORMER',
      creator: 'Klipza',
      datesAvailable: false,
      platform: { 'pt-BR': 'PC / Celular', en: 'PC / Mobile' },
      categories: ['action', 'platformer', 'puzzle', 'mobile', 'retro'],
      tags: { 'pt-BR': ['Plataforma 2D', 'Puzzle', 'Pixel Art'], en: ['2D Platformer', 'Puzzle', 'Pixel Art'] },
      mode: { 'pt-BR': 'Singleplayer / Protótipo', en: 'Single-player / Prototype' },
      genres: {
        'pt-BR': 'Plataforma 2D e Puzzle Platformer.',
        en: '2D Platformer and Puzzle Platformer.'
      },
      short: {
        'pt-BR': 'Fuja de uma masmorra pixelada repleta de criaturas, armadilhas e desafios.',
        en: 'Escape a pixel-art dungeon filled with creatures, traps and challenges.'
      },
      description: {
        'pt-BR': 'Escape é um jogo de plataforma 2D retrô desenvolvido pela Klipza Studio como um protótipo interativo. O jogo ainda está em fase de desenvolvimento e testes, mas já oferece uma experiência divertida e desafiadora. Controle um herói pixelado em uma missão de fuga de uma masmorra ou castelo infestado de criaturas perigosas. Com gráficos em pixel art, controles simples e jogabilidade direta, o jogo presta homenagem aos clássicos do gênero.',
        en: 'Escape is a retro 2D platform game developed by Klipza Studio as an interactive prototype. It is still in development and testing, but already offers a fun and challenging experience. Control a pixel hero on a mission to escape a dungeon or castle infested with dangerous creatures. Its pixel-art graphics, simple controls and direct gameplay pay tribute to classic platformers.'
      }
    },
    {
      id: 't-34-85',
      order: 18,
      title: 'T-34/85 – Guerra Mundial',
      url: 'https://atack-em-area.vercel.app/',
      image: 'assets/covers/t-34-85.png',
      kicker: 'WAR SIMULATOR',
      creator: 'Klipza',
      datesAvailable: false,
      platform: { 'pt-BR': 'PC', en: 'PC' },
      categories: ['action', 'simulation', 'war', 'combat'],
      tags: { 'pt-BR': ['Simulação', 'Tanques', 'Combate 3D'], en: ['Simulation', 'Tanks', '3D Combat'] },
      mode: { 'pt-BR': 'Singleplayer', en: 'Single-player' },
      genres: {
        'pt-BR': 'Combat Simulator e Tanque de Guerra.',
        en: 'Combat Simulator and Tank Warfare.'
      },
      short: {
        'pt-BR': 'Comande um T-34/85 em uma zona de guerra dinâmica da Segunda Guerra Mundial.',
        en: 'Command a T-34/85 in a dynamic World War II combat zone.'
      },
      description: {
        'pt-BR': 'T-34/85 – Guerra Mundial é uma experiência interativa em 3D desenvolvida pela Klipza Studio que coloca você no comando do lendário tanque soviético T-34/85 em um campo de batalha da Segunda Guerra Mundial. O projeto combina um modelo 3D detalhado com uma simulação de combate dinâmica, permitindo explorar o tanque em tempo real, enfrentar inimigos como Panzer, Stuka e Me 262 e vivenciar a atmosfera de uma zona de guerra.',
        en: 'T-34/85 – World War is an interactive 3D experience developed by Klipza Studio that puts you in command of the legendary Soviet T-34/85 tank on a World War II battlefield. The project combines a detailed 3D model with dynamic combat simulation, allowing you to explore the tank in real time, face enemies such as the Panzer, Stuka and Me 262, and experience the atmosphere of a war zone.'
      }
    },
    {
      id: 'hortum',
      order: 19,
      title: 'HORTUM',
      url: 'https://sobre-desastre.vercel.app',
      image: 'assets/covers/hortum.png',
      kicker: 'TORNADO SIMULATION',
      creator: 'Klipza',
      datesAvailable: false,
      platform: { 'pt-BR': 'PC', en: 'PC' },
      categories: ['simulation', 'physics', 'disaster'],
      tags: { 'pt-BR': ['Simulação', 'Tornado', 'Física'], en: ['Simulation', 'Tornado', 'Physics'] },
      mode: { 'pt-BR': 'Singleplayer / Simulação', en: 'Single-player / Simulation' },
      genres: {
        'pt-BR': 'Simulação de Desastres Naturais e Física Ambiental.',
        en: 'Natural Disaster Simulation and Environmental Physics.'
      },
      short: {
        'pt-BR': 'Observe um tornado EF4 evoluir e destruir um ambiente físico em tempo real.',
        en: 'Watch an EF4 tornado evolve and destroy a physics-driven environment in real time.'
      },
      description: {
        'pt-BR': 'HORTUM 3D é uma simulação interativa de tornados desenvolvida pela Klipza Studio que combina física avançada com um calendário de desastres em tempo real. Você controla um piloto ou câmera em um campo aberto enquanto um tornado EF4 se forma, evolui e varre a paisagem, destruindo tudo em seu caminho. Com gráficos em 3D, partículas, ventos dinâmicos e física de corpos rígidos e fluidos, a experiência apresenta de forma imersiva e educativa a força da natureza.',
        en: 'HORTUM 3D is an interactive tornado simulation developed by Klipza Studio, combining advanced physics with a real-time disaster calendar. You control a pilot or camera in an open field while an EF4 tornado forms, evolves and sweeps across the landscape, destroying everything in its path. With 3D graphics, particles, dynamic winds and rigid-body and fluid physics, it offers an immersive and educational look at the force of nature.'
      }
    }
  ];

  let games = FALLBACK_GAMES.map(game => ({ ...game }));
  let catalogSource = 'fallback';
  const reviewStats = new Map();
  let currentUserRole = 'user';
  let reviewDialogGameId = null;
  let reviewDialogOwnReview = null;
  let reviewDraftRating = 0;
  let reviewEditorMode = 'new';
  let reviewDialogPublicRows = [];
  let adminEditingGameId = null;
  let adminGamesCache = [];
  let adminReviewsCache = [];
  let adminLogsCache = [];

  const root = document.documentElement;
  const STORAGE_BRIDGE_PROTOCOL = 'zoinho-storage-v2';
  const STORAGE_BRIDGE_VERSION = 2;
  const STORAGE_BRIDGE_MAX_BYTES = 512 * 1024;
  const CLOUD_WRITE_DELAY = 300;
  const BRIDGE_SNAPSHOT_REQUEST_DELAY = 500;
  const BRIDGE_HANDSHAKE_TIMEOUT = 12000;
  const FALLBACK_STORAGE_BRIDGE_GAMES = new Map([
    ['blood-machine', { title: 'Blood Machine', origin: 'https://blood-machine.vercel.app', saveVersion: 1, saveKeys: ['bloodMachineProgressUpdate12'] }],
    ['dead-signal', { title: 'Dead Signal', origin: 'https://zombie-survival-six.vercel.app', saveVersion: 1, saveKeys: ['dead_signal_nightfall_v1'] }],
    ['heroes-battle', { title: 'Heroes Battle', origin: 'https://heroes-battle-ultimate-version.vercel.app', saveVersion: 1, saveKeys: ['hb-rune-progression-v2', 'hb-reforged2-best'] }]
  ]);
  const storageBridgeGames = new Map(FALLBACK_STORAGE_BRIDGE_GAMES);

  const cloudGameRecords = new Map(
    [...storageBridgeGames.keys()].map(gameId => [gameId, {
      state: 'idle',
      hasCloudSave: false,
      lastSyncAt: null,
      clientUpdatedAt: null,
      revision: null,
      saveVersion: storageBridgeGames.get(gameId)?.saveVersion || 1,
      error: null
    }])
  );
  const bridgeGameRecords = new Map(
    [...storageBridgeGames.keys()].map(gameId => [gameId, {
      state: 'waiting',
      lastEventAt: null,
      error: null,
      detail: null,
      observedOrigin: null
    }])
  );
  let cloudInfoGameId = null;

  const supabaseConfig = window.ZOINHO_SUPABASE_CONFIG || {};
  const supabaseClient = window.supabase?.createClient && supabaseConfig.url && supabaseConfig.publishableKey
    ? window.supabase.createClient(supabaseConfig.url, supabaseConfig.publishableKey, {
        auth: {
          persistSession: true,
          autoRefreshToken: true,
          detectSessionInUrl: true
        }
      })
    : null;

  let authUser = null;
  let guestMode = sessionStorage.getItem(STORAGE_KEYS.guestSession) === '1';
  let accountTab = 'profile';
  let pendingProfileAvatar = undefined;
  let cloudProfile = null;
  let cloudProfileUserId = null;
  let profileLoadError = null;
  let profileLoading = false;
  let profileSaving = false;
  let myTitles = [];
  let pendingEquippedTitleIds = [];
  let titlesLoading = false;
  let titlesSaving = false;
  let publicProfileUserId = null;
  let publicProfileData = null;
  const NICKNAME_COOLDOWN_MS = 2 * 60 * 60 * 1000;
  let authMode = 'login';
  let authInitialized = false;
  let authReadyResolved = false;
  let resolveAuthReady;
  const authReadyPromise = new Promise(resolve => { resolveAuthReady = resolve; });
  let recoveryMode = new URLSearchParams(location.hash.replace(/^#/, '')).get('type') === 'recovery' || new URLSearchParams(location.search).get('type') === 'recovery';
  const cloudWriteTimers = new Map();
  const cloudWritePending = new Map();
  const bridgeWindowBindings = new WeakMap();
  const activeBridgeWindows = new Map();
  const bridgeState = {
    state: 'waiting',
    gameId: null,
    lastEventAt: null,
    error: null,
    detail: null,
    observedOrigin: null
  };
  const cloudState = {
    state: 'idle',
    lastSyncAt: null,
    lastGameId: null,
    error: null
  };

  function communityCopy() {
    return currentLanguage === 'en' ? {
      ratingEmpty: 'No ratings yet', ratingCount: n => `${n} rating${n === 1 ? '' : 's'}`,
      rateGame: 'Rate this game', reviewsTitle: 'Community reviews', yourReview: 'Your review',
      commentPlaceholder: 'What did you think of the game? (optional, up to 800 characters)',
      publishReview: 'Publish review', updateReview: 'Save changes', deleteReview: 'Delete', editReview: 'Edit', cancelEdit: 'Cancel edit', ownReviewBadge: 'Your review', editingReview: 'Editing your review',
      loginToReview: 'Sign in to rate and comment.', loginAction: 'Sign in or create account',
      reviewSaved: 'Review saved.', reviewDeleted: 'Review deleted.', reviewError: 'Could not save this review.',
      reviewDeleteConfirm: 'Delete your review for this game?', profileRequired: 'Choose a nickname in your account profile before posting a review.', reviewHidden: 'This review was hidden by moderation. You can delete it, but it cannot be edited while hidden.', verified: 'Verified player', edited: 'edited',
      noComments: 'No community reviews yet. Someone has to be first.', noOtherComments: 'No other community reviews yet.', ratingAria: value => `${value.toFixed(1)} out of 5 stars`
    } : {
      ratingEmpty: 'Sem avaliações', ratingCount: n => `${n} avaliação${n === 1 ? '' : 'ões'}`,
      rateGame: 'Avaliar este jogo', reviewsTitle: 'Avaliações da comunidade', yourReview: 'Sua avaliação',
      commentPlaceholder: 'O que você achou do jogo? (opcional, até 800 caracteres)',
      publishReview: 'Publicar avaliação', updateReview: 'Salvar alterações', deleteReview: 'Excluir', editReview: 'Editar', cancelEdit: 'Cancelar edição', ownReviewBadge: 'Sua avaliação', editingReview: 'Editando sua avaliação',
      loginToReview: 'Entre em uma conta para avaliar e comentar.', loginAction: 'Entrar ou criar conta',
      reviewSaved: 'Avaliação salva.', reviewDeleted: 'Avaliação excluída.', reviewError: 'Não foi possível salvar esta avaliação.',
      reviewDeleteConfirm: 'Excluir sua avaliação deste jogo?', profileRequired: 'Escolha um nickname no seu perfil antes de publicar uma avaliação.', reviewHidden: 'Esta avaliação foi ocultada pela moderação. Você pode excluí-la, mas não editá-la enquanto estiver oculta.', verified: 'Jogador verificado', edited: 'editado',
      noComments: 'Ainda não há avaliações da comunidade. Alguém precisa inaugurar a seção.', noOtherComments: 'Ainda não há outras avaliações da comunidade.', ratingAria: value => `${value.toFixed(1).replace('.', ',')} de 5 estrelas`
    };
  }

  function mapCatalogRow(row) {
    const fallback = FALLBACK_GAMES.find(game => game.id === row.id) || {};
    const value = (key, fallbackValue = '') => row[key] == null ? fallbackValue : row[key];
    return {
      id: row.id,
      order: Number(value('order_index', fallback.order || 999)),
      title: value('title', fallback.title || row.id),
      url: value('url', fallback.url || '#'),
      image: value('image_url', fallback.image || ''),
      kicker: value('kicker', fallback.kicker || 'JOGO'),
      creator: value('creator', fallback.creator || 'Z01NH0'),
      categories: Array.isArray(row.categories) ? row.categories : (fallback.categories || []),
      tags: {
        'pt-BR': Array.isArray(row.tags_pt) ? row.tags_pt : (fallback.tags?.['pt-BR'] || []),
        en: Array.isArray(row.tags_en) && row.tags_en.length ? row.tags_en : (Array.isArray(row.tags_pt) && row.tags_pt.length ? row.tags_pt : (fallback.tags?.en || fallback.tags?.['pt-BR'] || []))
      },
      mode: { 'pt-BR': row.mode_pt || fallback.mode?.['pt-BR'] || 'Singleplayer', en: row.mode_en || row.mode_pt || fallback.mode?.en || fallback.mode?.['pt-BR'] || 'Single-player' },
      genres: { 'pt-BR': row.genres_pt || fallback.genres?.['pt-BR'] || '', en: row.genres_en || row.genres_pt || fallback.genres?.en || fallback.genres?.['pt-BR'] || '' },
      short: { 'pt-BR': row.short_pt || fallback.short?.['pt-BR'] || '', en: row.short_en || row.short_pt || fallback.short?.en || fallback.short?.['pt-BR'] || '' },
      description: { 'pt-BR': row.description_pt || fallback.description?.['pt-BR'] || '', en: row.description_en || row.description_pt || fallback.description?.en || fallback.description?.['pt-BR'] || '' },
      platform: { 'pt-BR': row.platform_pt || fallback.platform?.['pt-BR'] || 'PC', en: row.platform_en || row.platform_pt || fallback.platform?.en || 'PC' },
      featured: Boolean(row.featured),
      published: row.published !== false,
      datesAvailable: row.dates_available !== false,
      vercelProjectId: row.vercel_project_id || null,
      bridgeEnabled: Boolean(row.bridge_enabled),
      bridgeOrigin: row.bridge_origin || null,
      bridgeSaveVersion: Math.max(1, Number(row.bridge_save_version) || 1),
      bridgeSaveKeys: Array.isArray(row.bridge_save_keys) ? row.bridge_save_keys.filter(Boolean) : []
    };
  }

  function resetCloudRegistryFromGames() {
    clearCloudQueue();
    storageBridgeGames.clear();
    if (catalogSource === 'cloud') {
      for (const game of games) {
        if (!game.bridgeEnabled || !game.bridgeOrigin || !game.bridgeSaveKeys?.length) continue;
        storageBridgeGames.set(game.id, { title: game.title, origin: game.bridgeOrigin, saveVersion: game.bridgeSaveVersion || 1, saveKeys: [...game.bridgeSaveKeys] });
      }
    } else {
      for (const [id, config] of FALLBACK_STORAGE_BRIDGE_GAMES) storageBridgeGames.set(id, { ...config, saveKeys: [...config.saveKeys] });
    }
    cloudGameRecords.clear();
    bridgeGameRecords.clear();
    for (const [gameId, config] of storageBridgeGames) {
      cloudGameRecords.set(gameId, { state: 'idle', hasCloudSave: false, lastSyncAt: null, clientUpdatedAt: null, revision: null, saveVersion: config.saveVersion || 1, error: null });
      bridgeGameRecords.set(gameId, { state: 'waiting', lastEventAt: null, error: null, detail: null, observedOrigin: null });
    }
    renderCloudState();
  }

  async function loadCatalogFromCloud({ rerender = true } = {}) {
    if (!supabaseClient) return false;
    try {
      const { data, error } = await supabaseClient.from('games').select('*').eq('published', true).order('order_index', { ascending: true }).order('title', { ascending: true });
      if (error) throw error;
      if (!Array.isArray(data)) return false;
      // Consulta bem-sucedida = Supabase é a fonte de verdade, mesmo com zero jogos publicados.
      // O fallback só entra quando a tabela/API realmente está indisponível.
      games = data.map(mapCatalogRow).sort((a,b) => a.order - b.order || a.title.localeCompare(b.title, currentLanguage, { sensitivity: 'base' }));
      catalogSource = 'cloud';
      resetCloudRegistryFromGames();
      if (authUser) void probeCloudAccess(authUser.id);
      if (rerender) {
        renderStats(); renderFeatured(); renderCatalog();
        void loadReviewStats();
        void loadGameDates();
      }
      return true;
    } catch (error) {
      console.warn('[ZOINHO Catalog] Catálogo dinâmico indisponível; usando fallback local.', error);
      return false;
    }
  }

  async function loadReviewStats({ rerender = true } = {}) {
    if (!supabaseClient) return false;
    try {
      const { data, error } = await supabaseClient.rpc('zoinho_get_review_stats');
      if (error) throw error;
      reviewStats.clear();
      for (const row of data || []) reviewStats.set(row.game_id, { average: Number(row.average_rating) || 0, count: Number(row.review_count) || 0 });
      if (rerender) renderCatalog();
      return true;
    } catch (error) {
      console.warn('[ZOINHO Reviews] Estatísticas indisponíveis.', error);
      return false;
    }
  }

  function starFillMarkup(value = 0) {
    const safe = Math.max(0, Math.min(5, Number(value) || 0));
    return Array.from({ length: 5 }, (_, index) => {
      const fill = Math.max(0, Math.min(1, safe - index)) * 100;
      return `<span class="rating-star" aria-hidden="true"><span class="rating-star-empty">☆</span><span class="rating-star-fill" style="width:${fill}%">★</span></span>`;
    }).join('');
  }

  function ratingSummaryMarkup(gameId) {
    const copy = communityCopy();
    const stats = reviewStats.get(gameId) || { average: 0, count: 0 };
    const label = stats.count ? `${stats.average.toFixed(1).replace('.', currentLanguage === 'en' ? '.' : ',')} · ${copy.ratingCount(stats.count)}` : copy.ratingEmpty;
    return `<div class="game-rating-row"><button class="rating-summary" type="button" data-open-reviews="${gameId}" aria-label="${copy.reviewsTitle}: ${label}"><span class="rating-stars">${starFillMarkup(stats.average)}</span><span class="rating-number">${stats.count ? stats.average.toFixed(1).replace('.', currentLanguage === 'en' ? '.' : ',') : '—'}</span><span class="rating-count">${stats.count ? `(${stats.count})` : ''}</span></button><button class="review-star-button" type="button" data-rate-game="${gameId}" aria-label="${copy.rateGame}" title="${copy.rateGame}">☆</button></div>`;
  }

  async function loadCurrentUserRole(expectedUserId = authUser?.id || null) {
    currentUserRole = 'user';
    renderAdminAccess();
    if (!supabaseClient || !expectedUserId) return currentUserRole;
    try {
      const { data, error } = await supabaseClient.from('user_roles').select('role').eq('user_id', expectedUserId).maybeSingle();
      if (error) throw error;
      if (authUser?.id !== expectedUserId) return 'user';
      currentUserRole = ['admin','moderator'].includes(data?.role) ? data.role : 'user';
    } catch (error) {
      console.warn('[ZOINHO Admin] Não foi possível carregar o cargo.', error);
      currentUserRole = 'user';
    }
    renderAdminAccess();
    return currentUserRole;
  }

  function renderAdminAccess() {
    const button = document.getElementById('openAdminPanel');
    const badge = document.getElementById('accountRoleBadge');
    const allowed = Boolean(authUser && ['admin','moderator'].includes(currentUserRole));
    if (button) button.hidden = !allowed;
    if (badge) {
      badge.hidden = !allowed;
      badge.textContent = currentUserRole === 'admin' ? 'ADMINISTRADOR' : 'MODERADOR';
    }
  }

  function settleAuthReady() {
    if (authReadyResolved) return;
    authReadyResolved = true;
    resolveAuthReady?.();
  }

  async function waitForAuthReady() {
    if (authInitialized) return;
    await authReadyPromise;
  }

  function setBridgeState(state, gameId = null, error = null, detail = null, observedOrigin = null) {
    bridgeState.state = state;
    bridgeState.gameId = gameId || bridgeState.gameId;
    bridgeState.error = error || null;
    bridgeState.detail = detail || null;
    bridgeState.observedOrigin = observedOrigin || bridgeState.observedOrigin || null;
    bridgeState.lastEventAt = new Date().toISOString();

    if (gameId && bridgeGameRecords.has(gameId)) {
      const record = bridgeGameRecords.get(gameId);
      record.state = state;
      record.error = error || null;
      record.detail = detail || null;
      record.observedOrigin = observedOrigin || record.observedOrigin || null;
      record.lastEventAt = bridgeState.lastEventAt;
    }
    renderCloudState();
  }

  function emptyBridgeCache() {
    return { version: 2, guest: {}, users: {} };
  }

  function readBridgeCache() {
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE_KEYS.bridgeCache) || 'null');
      if (parsed && parsed.version === 2 && parsed.guest && parsed.users) return parsed;
    } catch {}

    const migrated = emptyBridgeCache();
    try {
      const legacy = JSON.parse(localStorage.getItem(STORAGE_KEYS.bridgeCacheLegacy) || '{}');
      if (legacy && typeof legacy === 'object') migrated.guest = legacy;
    } catch {}
    return migrated;
  }

  function writeBridgeCache(cache) {
    try {
      localStorage.setItem(STORAGE_KEYS.bridgeCache, JSON.stringify(cache));
      return true;
    } catch (error) {
      console.warn('[ZOINHO Bridge] Não foi possível gravar o cache local do portal.', error);
      return false;
    }
  }

  function getBridgeBucket(cache, userId = authUser?.id || null, create = false) {
    if (!userId) return cache.guest;
    if (!cache.users[userId] && create) cache.users[userId] = {};
    return cache.users[userId] || {};
  }

  function readCachedSnapshot(gameId, userId = authUser?.id || null) {
    const cache = readBridgeCache();
    return getBridgeBucket(cache, userId, false)[gameId]?.snapshot || null;
  }

  function writeCachedSnapshot(gameId, snapshot, userId = authUser?.id || null) {
    const cache = readBridgeCache();
    const bucket = getBridgeBucket(cache, userId, true);
    bucket[gameId] = { snapshot, updatedAt: new Date().toISOString() };
    return writeBridgeCache(cache);
  }

  function sanitizeBridgeSnapshot(gameId, snapshot) {
    const config = storageBridgeGames.get(gameId);
    if (!config || !snapshot || snapshot.gameId !== gameId || !snapshot.storage || typeof snapshot.storage !== 'object' || Array.isArray(snapshot.storage)) return null;
    const storage = {};
    for (const key of config.saveKeys) {
      if (!Object.prototype.hasOwnProperty.call(snapshot.storage, key)) continue;
      const value = snapshot.storage[key];
      if (typeof value !== 'string') continue;
      storage[key] = value;
    }
    const cleaned = {
      gameId,
      storage,
      clientUpdatedAt: typeof snapshot.clientUpdatedAt === 'string' ? snapshot.clientUpdatedAt : null,
      portalReceivedAt: typeof snapshot.portalReceivedAt === 'string' ? snapshot.portalReceivedAt : new Date().toISOString()
    };
    if (new Blob([JSON.stringify(cleaned)]).size > STORAGE_BRIDGE_MAX_BYTES) return null;
    return cleaned;
  }

  function snapshotHasSave(snapshot) {
    if (!snapshot?.storage || typeof snapshot.storage !== 'object') return false;
    return Object.keys(snapshot.storage).length > 0;
  }

  function snapshotTimestamp(snapshot) {
    if (!snapshot) return 0;
    const clientTime = Date.parse(snapshot.clientUpdatedAt || '');
    if (Number.isFinite(clientTime)) return clientTime;
    const receivedTime = Date.parse(snapshot.portalReceivedAt || '');
    return Number.isFinite(receivedTime) ? receivedTime : 0;
  }

  function newestSnapshot(a, b) {
    if (!a) return b || null;
    if (!b) return a;
    return snapshotTimestamp(b) > snapshotTimestamp(a) ? b : a;
  }

  function bridgeLaunchUrl(game) {
    // Guest mode is deliberately local-only: no bridge handshake and no cloud snapshot.
    if (!authUser || guestMode || !storageBridgeGames.has(game.id)) return game.url;
    const url = new URL(game.url);
    url.searchParams.set('zoinhoBridge', '1');
    url.searchParams.set('zoinhoBridgeVersion', String(STORAGE_BRIDGE_VERSION));
    return url.toString();
  }

  function launchGame(game) {
    const child = window.open(bridgeLaunchUrl(game), '_blank');
    if (!child) showToast('O navegador bloqueou a nova aba. Libere pop-ups para jogar.');
    else if (authUser && !guestMode) void markGamePlayed(game.id);
    return child;
  }

  function bindGameLaunchers() {
    document.querySelectorAll('[data-launch-game]').forEach(link => {
      link.addEventListener('click', event => {
        const game = games.find(item => item.id === link.dataset.launchGame);
        if (!game) return;
        event.preventDefault();
        launchGame(game);
      });
    });
  }

  function cloudRowToSnapshot(gameId, row) {
    if (!row || !row.save_data || typeof row.save_data !== 'object') return null;
    return sanitizeBridgeSnapshot(gameId, {
      gameId,
      storage: row.save_data,
      clientUpdatedAt: row.client_updated_at || row.updated_at || null,
      portalReceivedAt: row.updated_at || null
    });
  }

  function setCloudState(state, gameId = null, error = null, syncedAt = null) {
    cloudState.state = state;
    cloudState.lastGameId = gameId || cloudState.lastGameId;
    cloudState.error = error || null;
    if (syncedAt) cloudState.lastSyncAt = syncedAt;

    if (gameId && cloudGameRecords.has(gameId)) {
      const record = cloudGameRecords.get(gameId);
      record.state = state;
      record.error = error || null;
      if (syncedAt) record.lastSyncAt = syncedAt;
      if (state === 'synced') record.hasCloudSave = true;
    }
    renderCloudState();
  }

  function applyCloudRowMetadata(gameId, row) {
    const record = cloudGameRecords.get(gameId);
    if (!record) return;
    if (!row) {
      record.hasCloudSave = false;
      record.lastSyncAt = null;
      record.clientUpdatedAt = null;
      record.revision = null;
      record.saveVersion = storageBridgeGames.get(gameId)?.saveVersion || 1;
      if (record.state !== 'syncing') record.state = 'ready';
      record.error = null;
      return;
    }
    record.hasCloudSave = true;
    record.lastSyncAt = row.updated_at || record.lastSyncAt || null;
    record.clientUpdatedAt = row.client_updated_at || record.clientUpdatedAt || null;
    record.revision = row.revision ?? record.revision ?? null;
    record.saveVersion = row.save_version ?? record.saveVersion ?? 1;
    record.state = 'synced';
    record.error = null;
  }

  async function fetchCloudSnapshot(gameId) {
    if (!supabaseClient || !authUser) return { snapshot: null, error: null };
    const { data, error } = await supabaseClient
      .from('game_saves')
      .select('game_id, save_version, save_data, client_updated_at, updated_at, revision')
      .eq('user_id', authUser.id)
      .eq('game_id', gameId)
      .limit(1);
    if (error) return { snapshot: null, error };
    const row = Array.isArray(data) ? data[0] : null;
    return { snapshot: cloudRowToSnapshot(gameId, row), error: null };
  }

  async function probeCloudAccess(expectedUserId = authUser?.id || null) {
    if (!supabaseClient || !expectedUserId || authUser?.id !== expectedUserId) return false;

    for (const record of cloudGameRecords.values()) {
      if (record.state !== 'synced' && record.state !== 'syncing') {
        record.state = 'checking';
        record.error = null;
      }
    }
    renderCloudState();

    const { data, error } = await supabaseClient
      .from('game_saves')
      .select('game_id, save_version, client_updated_at, updated_at, revision')
      .eq('user_id', expectedUserId);

    if (authUser?.id !== expectedUserId) return false;
    if (error) {
      console.warn('[ZOINHO Cloud] Banco indisponível para a conta autenticada.', error);
      for (const record of cloudGameRecords.values()) {
        record.state = 'error';
        record.error = error;
      }
      cloudState.state = 'error';
      cloudState.error = error;
      renderCloudState();
      return false;
    }

    const rowsByGame = new Map((Array.isArray(data) ? data : []).map(row => [row.game_id, row]));
    for (const gameId of storageBridgeGames.keys()) applyCloudRowMetadata(gameId, rowsByGame.get(gameId) || null);
    cloudState.state = 'ready';
    cloudState.error = null;
    console.info('[ZOINHO Cloud] Banco acessível para a conta autenticada.', { integratedGames: [...storageBridgeGames.keys()] });
    renderCloudState();
    return true;
  }

  async function upsertCloudSnapshot(gameId, snapshot, expectedUserId = authUser?.id || null) {
    if (!supabaseClient || !expectedUserId || authUser?.id !== expectedUserId || !snapshotHasSave(snapshot)) return false;
    const config = storageBridgeGames.get(gameId);
    if (!config) return false;

    setCloudState('syncing', gameId);
    let lastError = null;

    for (let attempt = 1; attempt <= 3; attempt++) {
      const { data, error } = await supabaseClient
        .from('game_saves')
        .upsert({
          user_id: expectedUserId,
          game_id: gameId,
          save_version: config.saveVersion || 1,
          save_data: snapshot.storage,
          client_updated_at: snapshot.clientUpdatedAt || snapshot.portalReceivedAt || new Date().toISOString()
        }, { onConflict: 'user_id,game_id' })
        .select('updated_at, client_updated_at, revision, save_version')
        .limit(1);

      if (!error) {
        const row = data?.[0] || null;
        const syncedAt = row?.updated_at || new Date().toISOString();
        applyCloudRowMetadata(gameId, {
          updated_at: syncedAt,
          client_updated_at: row?.client_updated_at || snapshot.clientUpdatedAt || snapshot.portalReceivedAt || syncedAt,
          revision: row?.revision ?? null,
          save_version: row?.save_version ?? config.saveVersion ?? 1
        });
        setCloudState('synced', gameId, null, syncedAt);
        console.info('[ZOINHO Cloud] Save gravado:', gameId, { revision: row?.revision, updatedAt: syncedAt });
        return true;
      }

      lastError = error;
      console.warn(`[ZOINHO Cloud] Falha ao salvar ${gameId} (tentativa ${attempt}/3)`, error);
      const status = Number(error?.status || 0);
      const message = String(error?.message || '').toLowerCase();
      const nonRetryable = status === 400 || status === 401 || status === 403 ||
        message.includes('row-level security') || message.includes('permission') ||
        message.includes('constraint') || message.includes('violates');
      if (nonRetryable || attempt === 3) break;
      await new Promise(resolve => setTimeout(resolve, 250 * attempt));
    }

    setCloudState('error', gameId, lastError || new Error('Falha desconhecida ao gravar o save.'));
    return false;
  }

  function scheduleCloudSnapshot(gameId, snapshot) {
    if (!authUser || !supabaseClient || !snapshotHasSave(snapshot)) return false;
    const userId = authUser.id;
    cloudWritePending.set(gameId, { userId, snapshot });
    clearTimeout(cloudWriteTimers.get(gameId));
    cloudWriteTimers.set(gameId, setTimeout(async () => {
      const pending = cloudWritePending.get(gameId);
      cloudWriteTimers.delete(gameId);
      cloudWritePending.delete(gameId);
      if (!pending || authUser?.id !== pending.userId) return;
      await upsertCloudSnapshot(gameId, pending.snapshot, pending.userId);
    }, CLOUD_WRITE_DELAY));
    return true;
  }

  function clearCloudQueue() {
    for (const timer of cloudWriteTimers.values()) clearTimeout(timer);
    cloudWriteTimers.clear();
    cloudWritePending.clear();
  }

  async function resolveInitialSnapshot(gameId) {
    const localSnapshot = readCachedSnapshot(gameId);
    if (!authUser || !supabaseClient) return localSnapshot;

    if (cloudGameRecords.get(gameId)?.state !== 'synced') setCloudState('checking', gameId);
    const { snapshot: cloudSnapshot, error } = await fetchCloudSnapshot(gameId);
    if (error) {
      console.warn('[ZOINHO Cloud] Não foi possível carregar o save.', error);
      setCloudState('error', gameId, error);
      return localSnapshot;
    }

    const chosen = newestSnapshot(localSnapshot, cloudSnapshot);
    if (chosen) writeCachedSnapshot(gameId, chosen, authUser.id);

    if (chosen === localSnapshot && localSnapshot && (!cloudSnapshot || snapshotTimestamp(localSnapshot) > snapshotTimestamp(cloudSnapshot))) {
      scheduleCloudSnapshot(gameId, localSnapshot);
    } else if (cloudSnapshot) {
      const { data } = await supabaseClient
        .from('game_saves')
        .select('game_id, save_version, client_updated_at, updated_at, revision')
        .eq('user_id', authUser.id)
        .eq('game_id', gameId)
        .limit(1);
      applyCloudRowMetadata(gameId, Array.isArray(data) ? data[0] : null);
      setCloudState('synced', gameId, null, cloudSnapshot.portalReceivedAt || cloudSnapshot.clientUpdatedAt || null);
    } else if (cloudGameRecords.get(gameId)?.state !== 'syncing') {
      applyCloudRowMetadata(gameId, null);
      setCloudState('ready', gameId);
    }
    return chosen;
  }

  function makeBridgeNonce() {
    if (globalThis.crypto?.randomUUID) return globalThis.crypto.randomUUID();
    const random = globalThis.crypto?.getRandomValues ? globalThis.crypto.getRandomValues(new Uint32Array(4)) : [Math.random() * 2 ** 32, Math.random() * 2 ** 32, Date.now(), performance.now()];
    return Array.from(random, value => Math.floor(Number(value)).toString(16)).join('-');
  }

  function clearHandshakeTimer(active) {
    if (active?.handshakeTimer) clearTimeout(active.handshakeTimer);
    if (active) active.handshakeTimer = 0;
  }

  function postToActive(active, message) {
    if (!active?.source || active.source.closed) return false;
    try {
      active.source.postMessage(message, active.origin);
      return true;
    } catch (error) {
      console.warn('[ZOINHO Bridge] Falha ao enviar mensagem para o jogo.', error);
      return false;
    }
  }

  async function beginBridgeHandshake(source, gameId, config) {
    await waitForAuthReady();
    const userId = authUser?.id || null;
    const previous = activeBridgeWindows.get(gameId);
    if (previous && previous.source !== source) clearHandshakeTimer(previous);

    let active = previous && previous.source === source && previous.userId === userId
      ? previous
      : { source, userId, origin: config.origin, nonce: makeBridgeNonce(), handshakeTimer: 0, authorized: false };

    active.source = source;
    active.userId = userId;
    active.origin = config.origin;
    active.authorized = false;
    if (!active.nonce) active.nonce = makeBridgeNonce();
    activeBridgeWindows.set(gameId, active);
    bridgeWindowBindings.set(source, { gameId, userId, nonce: active.nonce });
    setBridgeState('handshaking', gameId, null, 'READY recebido; aguardando autorização do jogo.');

    postToActive(active, {
      protocol: STORAGE_BRIDGE_PROTOCOL,
      bridgeVersion: STORAGE_BRIDGE_VERSION,
      type: 'hello',
      gameId,
      nonce: active.nonce,
      portalOrigin: location.origin
    });

    clearHandshakeTimer(active);
    active.handshakeTimer = setTimeout(() => {
      const current = activeBridgeWindows.get(gameId);
      if (!current || current !== active || current.authorized) return;
      const error = new Error('O jogo anunciou READY, mas não concluiu o handshake. Verifique a autorização exibida no jogo.');
      setBridgeState('error', gameId, error, 'handshake-timeout');
    }, BRIDGE_HANDSHAKE_TIMEOUT);
  }

  async function finishBridgeHandshake(source, message, config) {
    await waitForAuthReady();
    const active = activeBridgeWindows.get(message.gameId);
    const binding = bridgeWindowBindings.get(source);
    const currentUserId = authUser?.id || null;
    if (!active || active.source !== source || !binding || binding.userId !== currentUserId || binding.nonce !== message.nonce || active.nonce !== message.nonce) {
      setBridgeState('account-changed', message.gameId, null, 'binding-mismatch');
      return;
    }

    active.authorized = true;
    clearHandshakeTimer(active);
    setBridgeState('connected', message.gameId, null, message.hasSave ? 'handshake-ok-save-present' : 'handshake-ok-no-save');

    const snapshot = await resolveInitialSnapshot(message.gameId);
    if (!postToActive(active, {
      protocol: STORAGE_BRIDGE_PROTOCOL,
      bridgeVersion: STORAGE_BRIDGE_VERSION,
      type: 'sync',
      gameId: message.gameId,
      nonce: active.nonce,
      snapshot: snapshot || null
    })) {
      setBridgeState('error', message.gameId, new Error('A aba do jogo fechou durante a sincronização.'));
      return;
    }

    setTimeout(() => {
      const current = activeBridgeWindows.get(message.gameId);
      if (!current || current !== active || !current.authorized || current.userId !== (authUser?.id || null)) return;
      postToActive(current, {
        protocol: STORAGE_BRIDGE_PROTOCOL,
        bridgeVersion: STORAGE_BRIDGE_VERSION,
        type: 'request-snapshot',
        gameId: message.gameId,
        nonce: current.nonce
      });
    }, BRIDGE_SNAPSHOT_REQUEST_DELAY);
  }

  async function handleBridgeMessage(event) {
    const message = event.data;
    if (!message || message.protocol !== STORAGE_BRIDGE_PROTOCOL || typeof message.gameId !== 'string') return;
    const config = storageBridgeGames.get(message.gameId);
    if (!config || event.origin !== config.origin || !event.source) return;
    const source = event.source;

    if (message.type === 'ready') {
      void beginBridgeHandshake(source, message.gameId, config);
      return;
    }

    if (message.type === 'diagnostic') {
      const active = activeBridgeWindows.get(message.gameId);
      if (!active || active.source !== source) return;
      if (message.code === 'untrusted-portal-origin') {
        setBridgeState('authorization-required', message.gameId, null, message.detail || message.code, message.observedPortalOrigin || null);
      } else if (message.code === 'portal-origin-approved') {
        setBridgeState('handshaking', message.gameId, null, 'portal-origin-approved', message.observedPortalOrigin || null);
      } else if (message.code === 'portal-authorization-denied') {
        setBridgeState('error', message.gameId, new Error('A conexão foi recusada na janela do jogo.'), message.code, message.observedPortalOrigin || null);
      } else if (message.code === 'authorization-store-failed') {
        setBridgeState('error', message.gameId, new Error('O jogo não conseguiu guardar a autorização do portal.'), message.code, message.observedPortalOrigin || null);
      }
      return;
    }

    if (message.type === 'hello-ack') {
      await finishBridgeHandshake(source, message, config);
      return;
    }

    if (message.type === 'snapshot') {
      await waitForAuthReady();
      const active = activeBridgeWindows.get(message.gameId);
      const binding = bridgeWindowBindings.get(source);
      const currentUserId = authUser?.id || null;
      if (!active || active.source !== source || !active.authorized || !binding || binding.gameId !== message.gameId || binding.userId !== currentUserId || binding.nonce !== message.nonce || active.nonce !== message.nonce) {
        console.warn('[ZOINHO Bridge] Snapshot ignorado: sessão do bridge inválida ou conta alterada.', { binding, currentUserId });
        setBridgeState('account-changed', message.gameId);
        return;
      }

      const snapshot = sanitizeBridgeSnapshot(message.gameId, message.snapshot);
      if (!snapshot) {
        console.warn('[ZOINHO Bridge] Snapshot rejeitado para', message.gameId);
        setBridgeState('error', message.gameId, new Error('Snapshot inválido ou grande demais.'));
        return;
      }

      if (!snapshotHasSave(snapshot)) {
        setBridgeState('empty', message.gameId, null, 'no-save-present');
        const gameCloudRecord = cloudGameRecords.get(message.gameId);
        if (gameCloudRecord?.state !== 'synced' && gameCloudRecord?.state !== 'error') setCloudState('ready', message.gameId);
        postToActive(active, {
          protocol: STORAGE_BRIDGE_PROTOCOL,
          bridgeVersion: STORAGE_BRIDGE_VERSION,
          type: 'ack',
          gameId: message.gameId,
          nonce: active.nonce,
          cloudSaved: false
        });
        console.info('[ZOINHO Bridge] Jogo conectado, mas ainda não existe save persistente para enviar.');
        return;
      }

      const userId = authUser?.id || null;
      writeCachedSnapshot(message.gameId, snapshot, userId);
      setBridgeState('snapshot', message.gameId);
      // O Cloud Save não depende do cache local do portal. Mesmo se localStorage do portal falhar,
      // o snapshot autenticado ainda segue para o Supabase.
      if (authUser) scheduleCloudSnapshot(message.gameId, snapshot);

      postToActive(active, {
        protocol: STORAGE_BRIDGE_PROTOCOL,
        bridgeVersion: STORAGE_BRIDGE_VERSION,
        type: 'ack',
        gameId: message.gameId,
        nonce: active.nonce,
        cloudSaved: Boolean(authUser)
      });
      console.info('[ZOINHO Bridge] Save recebido:', message.gameId, snapshot.storage);
      return;
    }
  }

  function requestActiveGameSnapshot(gameId, options = {}) {
    const { silent = false } = options;
    const config = storageBridgeGames.get(gameId);
    if (!config) return false;
    const title = config.title || gameId;
    const active = activeBridgeWindows.get(gameId);
    if (!active || !active.source || active.source.closed) {
      if (active) clearHandshakeTimer(active);
      activeBridgeWindows.delete(gameId);
      if (!silent) showToast(getCopy().cloudManualNoGameOpen);
      setBridgeState('waiting', gameId);
      return false;
    }
    if (active.userId !== (authUser?.id || null)) {
      if (!silent) showToast(getCopy().cloudBridgeAccountChanged);
      setBridgeState('account-changed', gameId);
      return false;
    }
    if (!active.authorized) {
      if (!silent) showToast(getCopy().cloudAuthorizeGame);
      setBridgeState('authorization-required', gameId, null, 'manual-sync-before-authorization');
      return false;
    }
    if (!postToActive(active, {
      protocol: STORAGE_BRIDGE_PROTOCOL,
      bridgeVersion: STORAGE_BRIDGE_VERSION,
      type: 'request-snapshot',
      gameId,
      nonce: active.nonce
    })) {
      setBridgeState('error', gameId, new Error(`Não foi possível pedir o snapshot ao ${title}.`));
      return false;
    }
    setBridgeState('connected', gameId);
    return true;
  }

  function requestAllActiveSnapshots() {
    if (!authUser || guestMode) {
      showToast(getCopy().guestCloudText);
      return 0;
    }
    let requested = 0;
    for (const gameId of storageBridgeGames.keys()) {
      if (requestActiveGameSnapshot(gameId, { silent: true })) requested += 1;
    }
    showToast(requested ? getCopy().cloudManualRequested : getCopy().cloudManualNoGameOpen);
    return requested;
  }

  addEventListener('message', event => { void handleBridgeMessage(event); });

  const settingsModal = document.getElementById('settingsModal');
  const gameModal = document.getElementById('gameModal');
  const languageSelect = document.getElementById('languageSelect');
  const themeInputs = [...document.querySelectorAll('input[name="theme"]')];
  const fontSizeInputs = [...document.querySelectorAll('input[name="fontSize"]')];
  const fontFamilyInputs = [...document.querySelectorAll('input[name="fontFamily"]')];
  const searchInput = document.getElementById('gameSearch');
  const filterButtons = [...document.querySelectorAll('.filter-chip')];
  const gamesGrid = document.getElementById('gamesGrid');
  const emptyState = document.getElementById('emptyState');
  const toast = document.getElementById('toast');
  const accountModal = document.getElementById('accountModal');
  const openAccountButton = document.getElementById('openAccount');
  const accountButtonTitle = document.getElementById('accountButtonTitle');
  const accountButtonSubtitle = document.getElementById('accountButtonSubtitle');
  const accountAvatar = document.getElementById('accountAvatar');
  const authLoggedOut = document.getElementById('authLoggedOut');
  const authLoggedIn = document.getElementById('authLoggedIn');
  const authRecovery = document.getElementById('authRecovery');
  const authForm = document.getElementById('authForm');
  const authEmail = document.getElementById('authEmail');
  const authPassword = document.getElementById('authPassword');
  const authPasswordConfirmField = document.getElementById('authPasswordConfirmField');
  const authPasswordConfirm = document.getElementById('authPasswordConfirm');
  const authHelp = document.getElementById('authHelp');
  const authError = document.getElementById('authError');
  const authSubmit = document.getElementById('authSubmit');
  const googleAuthButton = document.getElementById('googleAuthButton');
  const forgotPassword = document.getElementById('forgotPassword');
  const recoveryForm = document.getElementById('recoveryForm');
  const recoveryPassword = document.getElementById('recoveryPassword');
  const recoveryPasswordConfirm = document.getElementById('recoveryPasswordConfirm');
  const recoveryError = document.getElementById('recoveryError');
  const cancelRecovery = document.getElementById('cancelRecovery');
  const accountEmailDisplay = document.getElementById('accountEmailDisplay');
  const accountProfileAvatar = document.getElementById('accountProfileAvatar');
  const accountDisplayName = document.getElementById('accountDisplayName');
  const accountEquippedTitles = document.getElementById('accountEquippedTitles');
  const closeAccountModalButton = document.getElementById('closeAccountModal');
  const guestEntryButton = document.getElementById('guestEntryButton');
  const accountProfileName = document.getElementById('accountProfileName');
  const profileNicknameStatus = document.getElementById('profileNicknameStatus');
  const profileAvatarPreview = document.getElementById('profileAvatarPreview');
  const profilePhotoInput = document.getElementById('profilePhotoInput');
  const chooseProfilePhoto = document.getElementById('chooseProfilePhoto');
  const removeProfilePhoto = document.getElementById('removeProfilePhoto');
  const saveLocalProfileButton = document.getElementById('saveLocalProfile');
  const profileTitleList = document.getElementById('profileTitleList');
  const profileTitleLimit = document.getElementById('profileTitleLimit');
  const saveProfileTitlesButton = document.getElementById('saveProfileTitles');
  const publicProfileModal = document.getElementById('publicProfileModal');
  const publicProfileAvatar = document.getElementById('publicProfileAvatar');
  const publicProfileDisplayName = document.getElementById('publicProfileDisplayName');
  const publicProfileTitles = document.getElementById('publicProfileTitles');
  const publicProfileGamesCount = document.getElementById('publicProfileGamesCount');
  const publicProfileReviewsCount = document.getElementById('publicProfileReviewsCount');
  const publicProfileLoading = document.getElementById('publicProfileLoading');
  const publicProfileContent = document.getElementById('publicProfileContent');
  const publicProfileError = document.getElementById('publicProfileError');
  const publicProfileGamesList = document.getElementById('publicProfileGamesList');
  const publicProfileReviewsList = document.getElementById('publicProfileReviewsList');
  const guestCloudNotice = document.getElementById('guestCloudNotice');
  const cloudSyncSection = document.getElementById('cloudSyncSection');
  const guestGoToLoginButton = document.getElementById('guestGoToLogin');
  const signOutButton = document.getElementById('signOutButton');
  const cloudGameSearch = document.getElementById('cloudGameSearch');
  const cloudGamesList = document.getElementById('cloudGamesList');
  const cloudSyncNowButton = document.getElementById('cloudSyncNowButton');
  const cloudGameInfoModal = document.getElementById('cloudGameInfoModal');
  const cloudInfoGameName = document.getElementById('cloudInfoGameName');
  const cloudInfoStatusValue = document.getElementById('cloudInfoStatusValue');
  const cloudInfoLastSyncValue = document.getElementById('cloudInfoLastSyncValue');
  const cloudInfoClientUpdateValue = document.getElementById('cloudInfoClientUpdateValue');
  const cloudInfoErrorRow = document.getElementById('cloudInfoErrorRow');
  const cloudInfoErrorValue = document.getElementById('cloudInfoErrorValue');

  let activeFilter = 'all';
  let currentLanguage = localStorage.getItem(STORAGE_KEYS.language) || 'pt-BR';
  let currentTheme = localStorage.getItem(STORAGE_KEYS.theme) || 'dark';
  let currentFontSize = localStorage.getItem(STORAGE_KEYS.fontSize) || 'normal';
  let currentFontFamily = localStorage.getItem(STORAGE_KEYS.fontFamily) || 'inter';
  let currentOpenGameId = null;
  let gameDates = {};
  let datesLoaded = false;
  let toastTimer;

  function getCopy() {
    return translations[currentLanguage] || translations['pt-BR'];
  }

  function emptyLocalProfiles() {
    return { version: 1, guest: {}, users: {} };
  }

  function readLocalProfiles() {
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE_KEYS.localProfiles) || 'null');
      if (parsed && parsed.version === 1 && parsed.guest && parsed.users) return parsed;
    } catch {}
    return emptyLocalProfiles();
  }

  function writeLocalProfiles(store) {
    try {
      localStorage.setItem(STORAGE_KEYS.localProfiles, JSON.stringify(store));
      return true;
    } catch (error) {
      console.warn('[ZOINHO Profile] Não foi possível salvar o perfil local.', error);
      return false;
    }
  }

  function localProfileKey() {
    return authUser?.id || 'guest';
  }

  function getLocalProfile() {
    const store = readLocalProfiles();
    if (authUser?.id) return store.users[authUser.id] || {};
    return store.guest || {};
  }

  function saveLocalProfile(profile) {
    const store = readLocalProfiles();
    if (authUser?.id) store.users[authUser.id] = profile;
    else store.guest = profile;
    return writeLocalProfiles(store);
  }

  function mapCloudProfile(row) {
    if (!row) return { exists: false };
    return {
      exists: true,
      nickname: String(row.nickname || '').trim(),
      displayName: String(row.nickname || '').trim(),
      avatarDataUrl: typeof row.avatar_data_url === 'string' ? row.avatar_data_url : '',
      nicknameChangedAt: row.nickname_changed_at || null,
      updatedAt: row.updated_at || null
    };
  }

  function getAccountProfile() {
    if (!authUser?.id) return {};
    if (cloudProfileUserId === authUser.id && cloudProfile) return cloudProfile;
    return getLocalProfile();
  }

  function fallbackDisplayName() {
    if (guestMode && !authUser) return 'Guest';
    const email = String(authUser?.email || '').trim();
    return email.includes('@') ? email.split('@')[0] : (email || 'Jogador');
  }

  function currentDisplayName() {
    if (guestMode && !authUser) return 'Guest';
    const profile = getAccountProfile();
    const name = String(profile.nickname || profile.displayName || '').trim();
    return name || fallbackDisplayName();
  }

  function accountInitial() {
    return currentDisplayName().charAt(0).toUpperCase() || 'Z';
  }

  function paintAvatar(element, profile = getAccountProfile()) {
    if (!element) return;
    const image = typeof profile.avatarDataUrl === 'string' && profile.avatarDataUrl.startsWith('data:image/') ? profile.avatarDataUrl : '';
    element.classList.toggle('has-photo', Boolean(image));
    element.style.backgroundImage = image ? `url(${JSON.stringify(image)})` : '';
    element.textContent = image ? '' : accountInitial();
  }

  function localizedTitleName(title) {
    if (!title) return '';
    return currentLanguage === 'en'
      ? String(title.name_en || title.name_pt || title.id || '').trim()
      : String(title.name_pt || title.name_en || title.id || '').trim();
  }

  function localizedTitleDescription(title) {
    if (!title) return '';
    return currentLanguage === 'en'
      ? String(title.description_en || title.description_pt || '').trim()
      : String(title.description_pt || title.description_en || '').trim();
  }

  function safeTitleStyle(value) {
    const style = String(value || 'default').toLowerCase().replace(/[^a-z0-9-]/g, '');
    return style || 'default';
  }

  function titleBadgeMarkup(title, extraClass = '') {
    const name = localizedTitleName(title);
    if (!name) return '';
    const style = safeTitleStyle(title.style_key);
    const description = localizedTitleDescription(title);
    return `<span class="user-title-badge title-style-${style}${extraClass ? ` ${escapeAttr(extraClass)}` : ''}"${description ? ` title="${escapeAttr(description)}"` : ''}>${escapeHtml(name)}</span>`;
  }

  function titleBadgesMarkup(titles, extraClass = '') {
    const list = Array.isArray(titles) ? titles.slice(0, 3) : [];
    return list.map(title => titleBadgeMarkup(title, extraClass)).join('');
  }

  function currentEquippedTitles() {
    return myTitles
      .filter(title => Number(title.equipped_slot) >= 1 && Number(title.equipped_slot) <= 3)
      .sort((a, b) => Number(a.equipped_slot) - Number(b.equipped_slot));
  }

  function renderProfileTitles() {
    if (!profileTitleList) return;
    const copy = getCopy();
    const selected = new Set(pendingEquippedTitleIds);
    if (profileTitleLimit) profileTitleLimit.textContent = `${selected.size} / 3`;
    if (saveProfileTitlesButton) saveProfileTitlesButton.disabled = !authUser || titlesLoading || titlesSaving;

    if (!authUser) {
      profileTitleList.innerHTML = '';
      return;
    }
    if (titlesLoading) {
      profileTitleList.innerHTML = `<p class="profile-title-empty">${escapeHtml(copy.profileTitlesLoading)}</p>`;
      return;
    }
    if (!myTitles.length) {
      profileTitleList.innerHTML = `<p class="profile-title-empty">${escapeHtml(copy.profileTitlesEmpty)}</p>`;
      return;
    }

    profileTitleList.innerHTML = myTitles.map(title => {
      const checked = selected.has(title.title_id);
      const name = localizedTitleName(title);
      const description = localizedTitleDescription(title);
      return `<button class="profile-title-option${checked ? ' is-selected' : ''}" type="button" data-profile-title="${escapeAttr(title.title_id)}" aria-pressed="${checked}"><span class="profile-title-option-badge">${titleBadgeMarkup(title)}</span><span class="profile-title-option-copy"><strong>${escapeHtml(name)}</strong><small>${escapeHtml(description)}</small></span><span class="profile-title-check" aria-hidden="true">${checked ? '✓' : '+'}</span></button>`;
    }).join('');
  }

  async function loadMyTitles(expectedUserId = authUser?.id || null) {
    if (!supabaseClient || !expectedUserId || authUser?.id !== expectedUserId) {
      myTitles = [];
      pendingEquippedTitleIds = [];
      renderProfileTitles();
      return [];
    }
    titlesLoading = true;
    renderProfileTitles();
    try {
      const { data, error } = await supabaseClient.rpc('zoinho_get_my_titles');
      if (error) throw error;
      if (authUser?.id !== expectedUserId) return [];
      myTitles = Array.isArray(data) ? data : [];
      pendingEquippedTitleIds = currentEquippedTitles().map(title => title.title_id);
      renderProfileTitles();
      renderAccount();
      if (reviewDialogGameId && reviewDialogOwnReview) renderOwnReviewSpotlight(reviewDialogPublicRows);
      return myTitles;
    } catch (error) {
      console.warn('[ZOINHO Titles] Não foi possível carregar os títulos.', error);
      myTitles = [];
      pendingEquippedTitleIds = [];
      renderProfileTitles();
      return [];
    } finally {
      titlesLoading = false;
      renderProfileTitles();
    }
  }

  function toggleProfileTitle(titleId) {
    if (!authUser || titlesLoading || titlesSaving || !myTitles.some(title => title.title_id === titleId)) return;
    const next = [...pendingEquippedTitleIds];
    const index = next.indexOf(titleId);
    if (index >= 0) next.splice(index, 1);
    else {
      if (next.length >= 3) {
        showToast(getCopy().profileTitlesLimit);
        return;
      }
      next.push(titleId);
    }
    pendingEquippedTitleIds = next;
    renderProfileTitles();
  }

  async function saveEquippedTitles() {
    if (!authUser || !supabaseClient || titlesLoading || titlesSaving) return false;
    titlesSaving = true;
    renderProfileTitles();
    try {
      const { error } = await supabaseClient.rpc('zoinho_set_equipped_titles', { p_title_ids: pendingEquippedTitleIds });
      if (error) throw error;
      await loadMyTitles(authUser.id);
      showToast(getCopy().profileTitlesSaved);
      if (reviewDialogGameId && reviewModal?.open) await loadReviewDialog(reviewDialogGameId);
      return true;
    } catch (error) {
      console.warn('[ZOINHO Titles] Não foi possível salvar os títulos.', error);
      showToast(error?.message?.includes('title_limit') ? getCopy().profileTitlesLimit : getCopy().profileSaveError);
      return false;
    } finally {
      titlesSaving = false;
      renderProfileTitles();
    }
  }

  function sanitizeDisplayName(value) {
    return String(value || '').replace(/\s+/g, ' ').trim().slice(0, 32);
  }

  function nicknameKey(value) {
    return sanitizeDisplayName(value).toLocaleLowerCase('pt-BR');
  }

  function nicknameCooldownRemaining(profile = getAccountProfile()) {
    if (!profile?.exists || !profile?.nickname || !profile?.nicknameChangedAt) return 0;
    const changedAt = Date.parse(profile.nicknameChangedAt);
    if (!Number.isFinite(changedAt)) return 0;
    return Math.max(0, changedAt + NICKNAME_COOLDOWN_MS - Date.now());
  }

  function formatCooldown(ms) {
    const totalMinutes = Math.max(1, Math.ceil(ms / 60000));
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    if (currentLanguage === 'en') return hours ? `${hours}h ${minutes}m` : `${minutes}m`;
    return hours ? `${hours}h ${minutes}min` : `${minutes}min`;
  }

  function renderNicknameCooldown() {
    if (!accountProfileName || !profileNicknameStatus) return;
    const copy = getCopy();
    const profile = getAccountProfile();
    const hasNickname = Boolean(profile?.exists && profile?.nickname);
    const remaining = nicknameCooldownRemaining(profile);
    const locked = hasNickname && remaining > 0;
    const unavailable = profileLoading || Boolean(profileLoadError);
    accountProfileName.disabled = !authUser || locked || profileSaving || unavailable;
    if (chooseProfilePhoto) chooseProfilePhoto.disabled = !authUser || profileSaving || unavailable;
    if (removeProfilePhoto) removeProfilePhoto.disabled = !authUser || profileSaving || unavailable;
    if (saveLocalProfileButton) saveLocalProfileButton.disabled = !authUser || profileSaving || unavailable;
    profileNicknameStatus.hidden = !authUser;
    if (profileLoading) {
      profileNicknameStatus.dataset.state = 'info';
      profileNicknameStatus.textContent = copy.profileLoading;
    } else if (profileLoadError) {
      profileNicknameStatus.dataset.state = 'error';
      profileNicknameStatus.textContent = copy.profileLoadError;
    } else {
      profileNicknameStatus.dataset.state = locked ? 'locked' : (hasNickname ? 'ready' : 'info');
      profileNicknameStatus.textContent = locked
        ? copy.profileNicknameCooldown.replace('{time}', formatCooldown(remaining))
        : (hasNickname ? copy.profileNicknameReady : copy.profileNicknameRule);
    }
  }

  async function loadCloudProfile(expectedUserId = authUser?.id || null) {
    if (!supabaseClient || !expectedUserId || authUser?.id !== expectedUserId) return null;
    profileLoading = true;
    profileLoadError = null;
    renderNicknameCooldown();
    const { data, error } = await supabaseClient
      .from('user_profiles')
      .select('user_id, nickname, avatar_data_url, nickname_changed_at, updated_at')
      .eq('user_id', expectedUserId)
      .limit(1);
    if (authUser?.id !== expectedUserId) { profileLoading = false; return null; }
    if (error) {
      profileLoading = false;
      profileLoadError = error;
      console.warn('[ZOINHO Profile] Não foi possível carregar o perfil da conta.', error);
      renderNicknameCooldown();
      return null;
    }
    const row = Array.isArray(data) ? data[0] : null;
    profileLoading = false;
    cloudProfileUserId = expectedUserId;
    if (row) {
      cloudProfile = mapCloudProfile(row);
      saveLocalProfile({
        displayName: cloudProfile.nickname,
        nickname: cloudProfile.nickname,
        avatarDataUrl: cloudProfile.avatarDataUrl,
        nicknameChangedAt: cloudProfile.nicknameChangedAt
      });
    } else {
      // Migração suave da v1.5.x: mostra o perfil local antigo como rascunho,
      // mas ele só passa a reservar o nickname depois de um Save bem-sucedido no banco.
      const cached = getLocalProfile();
      const cachedName = sanitizeDisplayName(cached.nickname || cached.displayName || '');
      cloudProfile = {
        exists: false,
        nickname: cachedName,
        displayName: cachedName,
        avatarDataUrl: cached.avatarDataUrl || '',
        nicknameChangedAt: null,
        updatedAt: null
      };
    }
    renderAccount();
    return cloudProfile;
  }

  function setAccountTab(tab) {
    const guestSession = guestMode && !authUser;
    accountTab = guestSession ? 'cloud' : (tab === 'cloud' ? 'cloud' : 'profile');
    document.querySelectorAll('[data-account-tab]').forEach(button => {
      const profileOnly = button.dataset.accountTab === 'profile';
      button.hidden = guestSession && profileOnly;
      const active = !button.hidden && button.dataset.accountTab === accountTab;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-selected', String(active));
    });
    document.querySelectorAll('[data-account-pane]').forEach(pane => {
      const profileOnly = pane.dataset.accountPane === 'profile';
      pane.hidden = (guestSession && profileOnly) || pane.dataset.accountPane !== accountTab;
    });
  }

  function hydrateProfileEditor() {
    const profile = getAccountProfile();
    if (accountProfileName) accountProfileName.value = profile.nickname || profile.displayName || fallbackDisplayName();
    pendingProfileAvatar = undefined;
    paintAvatar(profileAvatarPreview, profile);
    renderNicknameCooldown();
    renderProfileTitles();
  }

  function isEntryGateRequired() {
    return authInitialized && !authUser && !guestMode && !recoveryMode;
  }

  function syncEntryGate() {
    if (!accountModal) return;
    const gate = isEntryGateRequired();
    accountModal.classList.toggle('is-auth-gate', gate);
    accountModal.classList.toggle('is-guest-session', guestMode && !authUser);
    // O X só existe nas informações de uma sessão já iniciada. Login, cadastro e recuperação não têm botão de fechar.
    if (closeAccountModalButton) closeAccountModalButton.hidden = recoveryMode || (!authUser && !guestMode);
    if (gate) {
      if (settingsModal?.open) closeModal(settingsModal);
      if (gameModal?.open) closeModal(gameModal);
      if (cloudGameInfoModal?.open) closeModal(cloudGameInfoModal);
      if (publicProfileModal?.open) closeModal(publicProfileModal);
    }
    if ((gate || recoveryMode) && !accountModal.open) openModal(accountModal);
  }

  function setAuthMessage(element, message = '') {
    if (!element) return;
    element.textContent = message;
    element.hidden = !message;
  }

  function friendlyAuthError(error) {
    const copy = getCopy();
    const raw = String(error?.message || error || '').trim();
    const normalized = raw.toLowerCase();
    if (/email rate limit exceeded|rate limit|too many requests/.test(normalized)) return copy.authRateLimit;
    if (/invalid login credentials|invalid credentials/.test(normalized)) return copy.authInvalidCredentials;
    if (/email not confirmed|email_not_confirmed/.test(normalized)) return copy.authEmailNotConfirmed;
    if (/provider.*not enabled|unsupported provider|oauth provider/.test(normalized)) return copy.authGoogleUnavailable;
    return raw || copy.authServiceUnavailable;
  }

  function authRedirectUrl() {
    return `${location.origin}${location.pathname}`;
  }

  function setAuthMode(mode) {
    authMode = mode === 'signup' ? 'signup' : 'login';
    document.querySelectorAll('[data-auth-mode]').forEach(button => {
      const active = button.dataset.authMode === authMode;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-selected', String(active));
    });
    authPasswordConfirmField.hidden = authMode !== 'signup';
    authPasswordConfirm.required = authMode === 'signup';
    authPassword.autocomplete = authMode === 'signup' ? 'new-password' : 'current-password';
    authSubmit.textContent = authMode === 'signup' ? getCopy().accountCreate : getCopy().accountLogin;
    authHelp.textContent = authMode === 'signup' ? getCopy().accountSignupHelp : getCopy().accountLoginHelp;
    forgotPassword.hidden = authMode !== 'login';
    setAuthMessage(authError);
  }

  function formatCloudTimestamp(value) {
    if (!value) return getCopy().dateUnavailable;
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return getCopy().dateUnavailable;
    return new Intl.DateTimeFormat(currentLanguage, { dateStyle: 'short', timeStyle: 'short' }).format(date);
  }

  function bridgeStatusLabel(gameId) {
    const copy = getCopy();
    const state = bridgeGameRecords.get(gameId)?.state || 'waiting';
    if (state === 'handshaking') return copy.cloudHandshaking;
    if (state === 'connected') return copy.cloudStatusConnected;
    if (state === 'authorization-required') return copy.cloudStatusAuthorization;
    if (state === 'snapshot') return copy.cloudStatusReceiving;
    if (state === 'empty') return copy.cloudStatusEmpty;
    if (state === 'error' || state === 'account-changed') return copy.cloudStatusError;
    return copy.cloudStatusWaiting;
  }

  function isGameCloudHealthy(gameId) {
    const record = cloudGameRecords.get(gameId);
    return Boolean(record?.hasCloudSave && record.state !== 'error');
  }

  function renderCloudInfo() {
    if (!cloudInfoGameId || !cloudGameInfoModal) return;
    const config = storageBridgeGames.get(cloudInfoGameId);
    const cloud = cloudGameRecords.get(cloudInfoGameId);
    const bridge = bridgeGameRecords.get(cloudInfoGameId);
    if (!config || !cloud) return;
    const copy = getCopy();
    const healthy = isGameCloudHealthy(cloudInfoGameId);
    const error = cloud.error || bridge?.error || null;
    const bridgeErrorDetail = (bridge?.state === 'error' || bridge?.state === 'account-changed') ? bridge?.detail : '';
    const errorText = error?.message || error?.details || bridgeErrorDetail || '';

    cloudInfoGameName.textContent = config.title || cloudInfoGameId;
    cloudInfoStatusValue.textContent = healthy ? copy.cloudInfoSynced : copy.cloudInfoNotSynced;
    cloudInfoStatusValue.dataset.state = healthy ? 'synced' : 'unsynced';
    cloudInfoLastSyncValue.textContent = formatCloudTimestamp(cloud.lastSyncAt);
    cloudInfoClientUpdateValue.textContent = formatCloudTimestamp(cloud.clientUpdatedAt);
    cloudInfoErrorValue.textContent = errorText || copy.cloudInfoNoError;
    cloudInfoErrorRow.hidden = !errorText;
  }

  function renderCloudState() {
    if (!cloudGamesList) return;
    const copy = getCopy();
    const query = normalize(cloudGameSearch?.value || '');
    const sorted = [...storageBridgeGames.entries()]
      .sort((a, b) => (a[1].title || a[0]).localeCompare(b[1].title || b[0], currentLanguage, { sensitivity: 'base' }))
      .filter(([gameId, config]) => !query || normalize(config.title || gameId).includes(query));

    cloudGamesList.replaceChildren();
    if (!sorted.length) {
      const empty = document.createElement('p');
      empty.className = 'cloud-sync-empty';
      empty.textContent = copy.cloudSearchEmpty;
      cloudGamesList.appendChild(empty);
    } else {
      for (const [gameId, config] of sorted) {
        const healthy = isGameCloudHealthy(gameId);
        const row = document.createElement('div');
        row.className = 'cloud-sync-game';
        row.dataset.gameId = gameId;

        const name = document.createElement('strong');
        name.textContent = config.title || gameId;

        const actions = document.createElement('div');
        actions.className = 'cloud-sync-game-actions';

        const mark = document.createElement('span');
        mark.className = `cloud-sync-mark ${healthy ? 'is-synced' : 'is-unsynced'}`;
        mark.textContent = healthy ? '✓' : '×';
        mark.setAttribute('aria-label', healthy ? copy.cloudInfoSynced : copy.cloudInfoNotSynced);
        mark.title = healthy ? copy.cloudInfoSynced : copy.cloudInfoNotSynced;

        const info = document.createElement('button');
        info.type = 'button';
        info.className = 'cloud-info-button';
        info.dataset.cloudInfoGame = gameId;
        info.setAttribute('aria-label', `${copy.cloudInfoButton}: ${config.title || gameId}`);
        info.title = copy.cloudInfoButton;
        info.textContent = 'i';

        actions.append(mark, info);
        row.append(name, actions);
        cloudGamesList.appendChild(row);
      }
    }
    renderCloudInfo();
  }

  function renderAccount() {
    const copy = getCopy();
    const signedIn = Boolean(authUser);
    const guestSession = guestMode && !signedIn;
    const inSession = signedIn || guestSession;
    // Guest não possui perfil personalizável. Qualquer perfil guest legado é deliberadamente ignorado.
    const profile = signedIn ? getAccountProfile() : {};
    const displayName = guestSession ? 'Guest' : currentDisplayName();
    openAccountButton.classList.toggle('is-online', signedIn);
    openAccountButton.classList.toggle('is-guest', guestSession);

    if (inSession) {
      accountButtonTitle.textContent = displayName;
      accountButtonSubtitle.textContent = signedIn ? copy.accountCloudOn : copy.accountGuestSubtitle;
      paintAvatar(accountAvatar, profile);
      paintAvatar(accountProfileAvatar, profile);
      if (accountDisplayName) accountDisplayName.textContent = displayName;
      if (accountEquippedTitles) accountEquippedTitles.innerHTML = signedIn ? titleBadgesMarkup(currentEquippedTitles(), 'is-account-title') : '';
      if (accountEmailDisplay) accountEmailDisplay.textContent = signedIn ? (authUser.email || 'ZOINHO Account') : copy.accountGuestLocal;
      const statusLabel = document.getElementById('accountConnectionLabel');
      if (statusLabel) statusLabel.textContent = signedIn ? copy.accountConnected : copy.accountGuest;
    } else {
      accountButtonTitle.textContent = copy.accountLogin;
      accountButtonSubtitle.textContent = copy.accountCloudOff;
      accountAvatar.classList.remove('has-photo');
      accountAvatar.style.backgroundImage = '';
      accountAvatar.textContent = '?';
      if (accountEquippedTitles) accountEquippedTitles.innerHTML = '';
    }

    authLoggedOut.hidden = inSession || recoveryMode;
    authLoggedIn.hidden = !inSession || recoveryMode;
    authRecovery.hidden = !recoveryMode;
    if (guestCloudNotice) guestCloudNotice.hidden = !guestSession;
    if (cloudSyncSection) cloudSyncSection.hidden = !signedIn;
    // Só uma conta autenticada possui ação de logout. Guest não recebe botão de saída aqui.
    if (signOutButton) signOutButton.hidden = !signedIn;
    if (inSession) {
      if (guestSession) accountTab = 'cloud';
      if (signedIn) hydrateProfileEditor();
      setAccountTab(accountTab);
    }
    renderCloudState();
    renderAdminAccess();
    syncEntryGate();
  }

  function resetCloudSessionState() {
    cloudState.state = 'idle';
    cloudState.lastSyncAt = null;
    cloudState.lastGameId = null;
    cloudState.error = null;

    for (const [gameId, record] of cloudGameRecords) {
      record.state = 'idle';
      record.hasCloudSave = false;
      record.lastSyncAt = null;
      record.clientUpdatedAt = null;
      record.revision = null;
      record.saveVersion = storageBridgeGames.get(gameId)?.saveVersion || 1;
      record.error = null;
    }
    for (const record of bridgeGameRecords.values()) {
      record.state = 'waiting';
      record.lastEventAt = null;
      record.error = null;
      record.detail = null;
      record.observedOrigin = null;
    }
    renderCloudState();
  }

  function handleSession(session, eventName = '') {
    const wasInitialized = authInitialized;
    const previousId = authUser?.id || null;
    authUser = session?.user || null;
    if (authUser) {
      guestMode = false;
      sessionStorage.removeItem(STORAGE_KEYS.guestSession);
    }
    const currentId = authUser?.id || null;
    if (previousId !== currentId) {
      cloudProfile = null;
      cloudProfileUserId = null;
      profileLoadError = null;
      profileLoading = false;
      myTitles = [];
      pendingEquippedTitleIds = [];
      titlesLoading = false;
      titlesSaving = false;
      renderProfileTitles();
      clearCloudQueue();
      resetCloudSessionState();
      currentUserRole = 'user';
      renderAdminAccess();
      if (wasInitialized) {
        for (const [gameId, active] of activeBridgeWindows) {
          if (active.userId !== currentId) setBridgeState('account-changed', gameId);
        }
      }
    }
    if (eventName === 'PASSWORD_RECOVERY') recoveryMode = true;
    if (eventName === 'SIGNED_OUT') recoveryMode = false;
    authInitialized = true;
    settleAuthReady();
    renderAccount();
    if (authUser) {
      void loadCloudProfile(authUser.id);
      void loadCurrentUserRole(authUser.id);
      void loadMyTitles(authUser.id);
      void probeCloudAccess(authUser.id);
      if (accountModal?.open && !recoveryMode) closeModal(accountModal);
    }
  }

  async function initAuth() {
    if (!supabaseClient) {
      console.error('[ZOINHO Auth] Supabase JS/configuração não carregados.');
      authInitialized = true;
      settleAuthReady();
      renderAccount();
      return;
    }

    supabaseClient.auth.onAuthStateChange((eventName, session) => {
      queueMicrotask(() => handleSession(session, eventName));
    });

    const { data, error } = await supabaseClient.auth.getSession();
    if (error) console.warn('[ZOINHO Auth] Não foi possível restaurar a sessão.', error);
    handleSession(data?.session || null, 'INITIAL_SESSION');
  }

  async function submitAuthForm(event) {
    event.preventDefault();
    if (!supabaseClient) return setAuthMessage(authError, getCopy().authServiceUnavailable);
    setAuthMessage(authError);

    const email = authEmail.value.trim();
    const password = authPassword.value;
    if (authMode === 'signup' && password !== authPasswordConfirm.value) {
      return setAuthMessage(authError, getCopy().authPasswordsMismatch);
    }

    authSubmit.disabled = true;
    try {
      if (authMode === 'signup') {
        const { data, error } = await supabaseClient.auth.signUp({ email, password });
        if (error) throw error;
        if (data?.session) {
          showToast(getCopy().authAccountCreated);
        } else {
          showToast(getCopy().authAccountCreatedNeedsConfirmation);
          setAuthMode('login');
        }
      } else {
        const { error } = await supabaseClient.auth.signInWithPassword({ email, password });
        if (error) throw error;
        showToast(getCopy().authSignedIn);
      }
      authPassword.value = '';
      authPasswordConfirm.value = '';
    } catch (error) {
      console.warn('[ZOINHO Auth] Falha de autenticação.', error);
      setAuthMessage(authError, friendlyAuthError(error));
    } finally {
      authSubmit.disabled = false;
    }
  }

  async function signInWithGoogle() {
    if (!supabaseClient) return setAuthMessage(authError, getCopy().authServiceUnavailable);
    setAuthMessage(authError);
    if (googleAuthButton) googleAuthButton.disabled = true;
    try {
      const { error } = await supabaseClient.auth.signInWithOAuth({
        provider: 'google',
        options: { redirectTo: authRedirectUrl() }
      });
      if (error) throw error;
      // Em navegadores comuns o método redireciona imediatamente. Se isso não ocorrer,
      // o botão é reativado pelo finally para que a interface não fique presa.
    } catch (error) {
      console.warn('[ZOINHO Auth] Falha no login com Google.', error);
      setAuthMessage(authError, friendlyAuthError(error));
    } finally {
      if (googleAuthButton) googleAuthButton.disabled = false;
    }
  }

  async function sendPasswordReset() {
    if (!supabaseClient) return;
    const email = authEmail.value.trim();
    if (!email) {
      setAuthMessage(authError, getCopy().authEnterEmail);
      authEmail.focus();
      return;
    }
    setAuthMessage(authError);
    const { error } = await supabaseClient.auth.resetPasswordForEmail(email, {
      redirectTo: authRedirectUrl()
    });
    if (error) {
      console.warn('[ZOINHO Auth] Falha ao solicitar recuperação.', error);
      setAuthMessage(authError, friendlyAuthError(error));
    }
    else showToast(getCopy().authResetSent);
  }

  async function submitRecoveryForm(event) {
    event.preventDefault();
    if (!supabaseClient) return;
    setAuthMessage(recoveryError);
    if (recoveryPassword.value !== recoveryPasswordConfirm.value) {
      return setAuthMessage(recoveryError, getCopy().authPasswordsMismatch);
    }
    const { error } = await supabaseClient.auth.updateUser({ password: recoveryPassword.value });
    if (error) return setAuthMessage(recoveryError, error.message);
    recoveryMode = false;
    recoveryPassword.value = '';
    recoveryPasswordConfirm.value = '';
    renderAccount();
    showToast(getCopy().authPasswordUpdated);
  }

  function enterGuestMode() {
    guestMode = true;
    accountTab = 'profile';
    sessionStorage.setItem(STORAGE_KEYS.guestSession, '1');
    clearCloudQueue();
    resetCloudSessionState();
    renderAccount();
    closeModal(accountModal);
    showToast(getCopy().accountGuestHelp);
  }

  function leaveGuestMode({ openLogin = true } = {}) {
    guestMode = false;
    sessionStorage.removeItem(STORAGE_KEYS.guestSession);
    accountTab = 'profile';
    renderAccount();
    setAuthMode('login');
    if (openLogin) syncEntryGate();
  }

  async function imageFileToAvatar(file) {
    const allowed = new Set(['image/png', 'image/jpeg', 'image/webp']);
    if (!file || !allowed.has(file.type)) throw new Error('invalid-image');
    if (file.size > 8 * 1024 * 1024) throw new Error('image-too-large');
    const source = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result || ''));
      reader.onerror = () => reject(new Error('image-read-error'));
      reader.readAsDataURL(file);
    });
    const image = await new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error('image-decode-error'));
      img.src = source;
    });
    const size = 224;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) throw new Error('canvas-unavailable');
    const scale = Math.max(size / image.naturalWidth, size / image.naturalHeight);
    const sw = size / scale;
    const sh = size / scale;
    const sx = Math.max(0, (image.naturalWidth - sw) / 2);
    const sy = Math.max(0, (image.naturalHeight - sh) / 2);
    ctx.fillStyle = '#111217';
    ctx.fillRect(0, 0, size, size);
    ctx.drawImage(image, sx, sy, sw, sh, 0, 0, size, size);
    let result = canvas.toDataURL('image/webp', .82);
    if (!result.startsWith('data:image/webp')) result = canvas.toDataURL('image/jpeg', .82);
    if (result.length > 320000) result = canvas.toDataURL('image/jpeg', .68);
    return result;
  }

  async function handleProfilePhotoChange() {
    const file = profilePhotoInput?.files?.[0];
    if (!file) return;
    try {
      pendingProfileAvatar = await imageFileToAvatar(file);
      paintAvatar(profileAvatarPreview, { ...getAccountProfile(), avatarDataUrl: pendingProfileAvatar });
    } catch (error) {
      const code = error?.message;
      showToast(code === 'invalid-image' ? getCopy().profileInvalidImage : code === 'image-too-large' ? getCopy().profileImageTooLarge : getCopy().profileImageError);
    } finally {
      if (profilePhotoInput) profilePhotoInput.value = '';
    }
  }

  async function saveProfileEditor() {
    if (!authUser || !supabaseClient || profileSaving || profileLoading || profileLoadError) return false;
    const copy = getCopy();
    const name = sanitizeDisplayName(accountProfileName?.value);
    if (name.length < 2) {
      showToast(copy.profileInvalidName);
      accountProfileName?.focus();
      return false;
    }

    const previous = getAccountProfile();
    const nicknameChanged = Boolean(previous.exists && previous.nickname) && nicknameKey(name) !== nicknameKey(previous.nickname);
    if (nicknameChanged && nicknameCooldownRemaining(previous) > 0) {
      showToast(copy.profileNicknameCooldownError);
      renderNicknameCooldown();
      return false;
    }

    const avatarDataUrl = pendingProfileAvatar === undefined ? (previous.avatarDataUrl || '') : (pendingProfileAvatar || '');
    profileSaving = true;
    if (saveLocalProfileButton) saveLocalProfileButton.disabled = true;
    renderNicknameCooldown();

    try {
      const { data, error } = await supabaseClient
        .from('user_profiles')
        .upsert({
          user_id: authUser.id,
          nickname: name,
          avatar_data_url: avatarDataUrl
        }, { onConflict: 'user_id' })
        .select('user_id, nickname, avatar_data_url, nickname_changed_at, updated_at')
        .limit(1);

      if (error) {
        const message = String(error.message || '').toLowerCase();
        if (error.code === '23505' || message.includes('nickname_key') || message.includes('duplicate')) {
          showToast(copy.profileNicknameTaken);
          return false;
        }
        if (message.includes('nickname_cooldown')) {
          showToast(copy.profileNicknameCooldownError);
          await loadCloudProfile(authUser.id);
          return false;
        }
        console.warn('[ZOINHO Profile] Falha ao salvar perfil.', error);
        showToast(copy.profileSaveError);
        return false;
      }

      const row = Array.isArray(data) ? data[0] : null;
      cloudProfileUserId = authUser.id;
      cloudProfile = mapCloudProfile(row || { nickname: name, avatar_data_url: avatarDataUrl, nickname_changed_at: previous.nicknameChangedAt });
      saveLocalProfile({
        displayName: cloudProfile.nickname,
        nickname: cloudProfile.nickname,
        avatarDataUrl: cloudProfile.avatarDataUrl,
        nicknameChangedAt: cloudProfile.nicknameChangedAt
      });
      pendingProfileAvatar = undefined;
      renderAccount();
      showToast(copy.profileSaved);
      return true;
    } finally {
      profileSaving = false;
      renderNicknameCooldown();
    }
  }

  async function signOut() {
    if (!supabaseClient) return;
    guestMode = false;
    sessionStorage.removeItem(STORAGE_KEYS.guestSession);
    const { error } = await supabaseClient.auth.signOut();
    if (error) return showToast(error.message);
    showToast(getCopy().authSignedOut);
    // SIGNED_OUT will re-render and reopen the mandatory entry gate.
  }

  function normalize(value) {
    return String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  }

  function formatDate(value, includeTime = false) {
    if (!value) return getCopy().dateUnavailable;
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return getCopy().dateUnavailable;

    const options = includeTime
      ? { dateStyle: 'long', timeStyle: 'short' }
      : { dateStyle: 'long' };

    return new Intl.DateTimeFormat(currentLanguage, options).format(date);
  }

  function renderGameDates(gameId) {
    const createdElement = document.getElementById('gameModalCreatedAt');
    const updatedElement = document.getElementById('gameModalUpdatedAt');
    if (!createdElement || !updatedElement) return;

    const game = games.find(item => item.id === gameId);
    if (game?.datesAvailable === false) {
      createdElement.classList.remove('date-loading');
      updatedElement.classList.remove('date-loading');
      createdElement.textContent = getCopy().noData;
      updatedElement.textContent = getCopy().noData;
      return;
    }

    const info = gameDates[gameId];
    const isLoading = !datesLoaded && !info;
    createdElement.classList.toggle('date-loading', isLoading);
    updatedElement.classList.toggle('date-loading', isLoading);

    if (isLoading) {
      createdElement.textContent = getCopy().loadingDates;
      updatedElement.textContent = getCopy().loadingDates;
      return;
    }

    createdElement.textContent = formatDate(info?.createdAt, false);
    updatedElement.textContent = formatDate(info?.updatedAt, true);
  }

  async function loadGameDates() {
    try {
      const response = await fetch('/api/games-info', {
        headers: { Accept: 'application/json' }
      });

      if (!response.ok) throw new Error(`games-info returned ${response.status}`);
      const payload = await response.json();
      gameDates = payload?.games && typeof payload.games === 'object' ? payload.games : {};
    } catch (error) {
      console.warn('[ZOINHO GAMES] Não foi possível carregar as datas dos jogos.', error);
      gameDates = {};
    } finally {
      datesLoaded = true;
      if (currentOpenGameId) renderGameDates(currentOpenGameId);
    }
  }

  function applyTypography(fontSize = currentFontSize, fontFamily = currentFontFamily, persist = true) {
    const allowedSizes = new Set(['compact', 'normal', 'comfortable', 'large']);
    const allowedFamilies = new Set(['inter', 'open-sans', 'montserrat', 'georgia', 'courier', 'papyrus']);
    currentFontSize = allowedSizes.has(fontSize) ? fontSize : 'normal';
    currentFontFamily = allowedFamilies.has(fontFamily) ? fontFamily : 'inter';
    root.dataset.fontSize = currentFontSize;
    root.dataset.fontFamily = currentFontFamily;
    fontSizeInputs.forEach(input => { input.checked = input.value === currentFontSize; });
    fontFamilyInputs.forEach(input => { input.checked = input.value === currentFontFamily; });
    if (persist) {
      localStorage.setItem(STORAGE_KEYS.fontSize, currentFontSize);
      localStorage.setItem(STORAGE_KEYS.fontFamily, currentFontFamily);
    }
  }

  function applyTheme(theme, persist = true) {
    currentTheme = theme === 'light' ? 'light' : 'dark';
    root.dataset.theme = currentTheme;
    root.style.colorScheme = currentTheme;
    themeInputs.forEach(input => {
      input.checked = input.value === currentTheme;
    });
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) metaTheme.setAttribute('content', currentTheme === 'dark' ? '#09090b' : '#f4f7fb');
    if (persist) localStorage.setItem(STORAGE_KEYS.theme, currentTheme);
  }

  function showToast(message) {
    clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.add('is-visible');
    toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 2400);
  }


  function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>'"]/g, char => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', "'":'&#39;', '"':'&quot;' }[char]));
  }

  function escapeAttr(value) { return escapeHtml(value).replace(/`/g, '&#96;'); }

  function formatReviewDate(value) {
    if (!value) return '';
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return '';
    return new Intl.DateTimeFormat(currentLanguage, { dateStyle:'medium', timeStyle:'short' }).format(date);
  }

  function renderPublicProfile(data = publicProfileData) {
    if (!publicProfileModal) return;
    const copy = getCopy();
    if (!data) return;
    const nickname = String(data.nickname || 'Jogador').trim() || 'Jogador';
    const avatar = String(data.avatar_data_url || '');
    const titles = Array.isArray(data.titles) ? data.titles : [];
    const played = Array.isArray(data.games_played) ? data.games_played : [];
    const reviews = Array.isArray(data.reviews) ? data.reviews : [];

    const titleEl = document.getElementById('publicProfileName');
    if (titleEl) titleEl.textContent = nickname;
    if (publicProfileDisplayName) publicProfileDisplayName.textContent = nickname;
    if (publicProfileAvatar) {
      const hasPhoto = avatar.startsWith('data:image/');
      publicProfileAvatar.classList.toggle('has-photo', hasPhoto);
      publicProfileAvatar.style.backgroundImage = hasPhoto ? `url(${JSON.stringify(avatar)})` : '';
      publicProfileAvatar.textContent = hasPhoto ? '' : ([...nickname][0]?.toUpperCase() || 'J');
    }
    if (publicProfileTitles) {
      publicProfileTitles.innerHTML = titles.length
        ? titleBadgesMarkup(titles, 'is-public-profile-title')
        : '<span class="public-profile-no-title">—</span>';
    }
    if (publicProfileGamesCount) publicProfileGamesCount.textContent = String(Number(data.stats?.games_played) || played.length || 0);
    if (publicProfileReviewsCount) publicProfileReviewsCount.textContent = String(Number(data.stats?.reviews) || reviews.length || 0);

    if (publicProfileGamesList) {
      publicProfileGamesList.innerHTML = played.length ? played.map(game => {
        const image = String(game.image_url || '');
        const genres = currentLanguage === 'en' ? (game.genres_en || game.genres_pt || '') : (game.genres_pt || game.genres_en || '');
        const when = formatReviewDate(game.last_played_at);
        return `<article class="public-game-card">${image ? `<img src="${escapeAttr(image)}" alt="" loading="lazy" />` : '<div class="public-game-placeholder">ZG</div>'}<div><strong>${escapeHtml(game.title || game.game_id || 'Jogo')}</strong>${genres ? `<p>${escapeHtml(genres)}</p>` : ''}<small>${escapeHtml(copy.publicProfileLastPlayed)}: ${escapeHtml(when || copy.dateUnavailable)}</small></div></article>`;
      }).join('') : `<div class="public-profile-empty">${escapeHtml(copy.publicProfileNoGames)}</div>`;
    }

    if (publicProfileReviewsList) {
      publicProfileReviewsList.innerHTML = reviews.length ? reviews.map(review => {
        const rating = Number(review.rating) || 0;
        const edited = review.updated_at && review.created_at && Math.abs(new Date(review.updated_at) - new Date(review.created_at)) > 1500 ? ` · ${communityCopy().edited}` : '';
        return `<article class="public-profile-review"><div class="public-profile-review-head"><div><strong>${escapeHtml(review.game_title || review.game_id || 'Jogo')}</strong>${review.verified_player ? `<span class="verified-badge">✓ ${escapeHtml(communityCopy().verified)}</span>` : ''}</div><span>${escapeHtml(formatReviewDate(review.updated_at || review.created_at))}${escapeHtml(edited)}</span></div><div class="rating-stars community-review-stars" aria-label="${escapeAttr(communityCopy().ratingAria(rating))}">${starFillMarkup(rating)}</div>${review.comment ? `<p>${escapeHtml(review.comment)}</p>` : ''}</article>`;
      }).join('') : `<div class="public-profile-empty">${escapeHtml(copy.publicProfileNoReviews)}</div>`;
    }

    if (publicProfileLoading) publicProfileLoading.hidden = true;
    if (publicProfileError) publicProfileError.hidden = true;
    if (publicProfileContent) publicProfileContent.hidden = false;
  }

  function setPublicProfileLoadingState() {
    if (publicProfileLoading) {
      publicProfileLoading.hidden = false;
      publicProfileLoading.textContent = getCopy().publicProfileLoading;
    }
    if (publicProfileContent) publicProfileContent.hidden = true;
    if (publicProfileError) {
      publicProfileError.hidden = true;
      publicProfileError.textContent = getCopy().publicProfileError;
    }
    if (publicProfileTitles) publicProfileTitles.innerHTML = '';
    if (publicProfileGamesCount) publicProfileGamesCount.textContent = '—';
    if (publicProfileReviewsCount) publicProfileReviewsCount.textContent = '—';
  }

  async function openPublicProfile(userId) {
    if (!supabaseClient || !userId || !publicProfileModal) return;
    publicProfileUserId = userId;
    publicProfileData = null;
    setPublicProfileLoadingState();
    const titleEl = document.getElementById('publicProfileName');
    if (titleEl) titleEl.textContent = getCopy().publicProfileLoading;
    if (publicProfileDisplayName) publicProfileDisplayName.textContent = '—';
    if (publicProfileAvatar) {
      publicProfileAvatar.classList.remove('has-photo');
      publicProfileAvatar.style.backgroundImage = '';
      publicProfileAvatar.textContent = '?';
    }
    openModal(publicProfileModal);
    try {
      const { data, error } = await supabaseClient.rpc('zoinho_get_public_profile', { p_user_id: userId });
      if (error) throw error;
      if (publicProfileUserId !== userId) return;
      if (!data || typeof data !== 'object') throw new Error('profile_not_found');
      publicProfileData = data;
      renderPublicProfile(data);
    } catch (error) {
      console.warn('[ZOINHO Profile] Falha ao carregar perfil público.', error);
      if (publicProfileLoading) publicProfileLoading.hidden = true;
      if (publicProfileContent) publicProfileContent.hidden = true;
      if (publicProfileError) {
        publicProfileError.hidden = false;
        publicProfileError.textContent = getCopy().publicProfileError;
      }
    }
  }

  async function markGamePlayed(gameId) {
    if (!authUser || guestMode || !supabaseClient || !gameId) return;
    try {
      const { error } = await supabaseClient.rpc('zoinho_mark_game_played', { p_game_id: gameId });
      if (error) throw error;
    } catch (error) {
      // Atividade pública é complementar; nunca deve impedir o jogo de abrir.
      console.warn('[ZOINHO Activity] Não foi possível registrar a abertura do jogo.', error);
    }
  }

  function setReviewDraftRating(value, { preview = false } = {}) {
    const picker = document.getElementById('ratingPicker');
    const stars = document.getElementById('ratingPickerStars');
    const valueLabel = document.getElementById('reviewDraftValue');
    const saveButton = document.getElementById('saveReviewButton');
    const safe = Math.max(0, Math.min(5, Math.round((Number(value) || 0) * 2) / 2));
    if (!preview) reviewDraftRating = safe;
    const shown = preview ? safe : reviewDraftRating;
    if (stars) stars.innerHTML = starFillMarkup(shown);
    if (picker) {
      picker.dataset.previewRating = String(shown);
      picker.setAttribute('aria-valuenow', String(Math.max(.5, shown || .5)));
      picker.setAttribute('aria-valuetext', shown ? communityCopy().ratingAria(shown) : communityCopy().ratingEmpty);
    }
    if (valueLabel) valueLabel.textContent = shown ? `${shown.toFixed(1).replace('.', currentLanguage === 'en' ? '.' : ',')} / 5` : '— / 5';
    if (saveButton) saveButton.disabled = !authUser || reviewDraftRating < .5;
  }

  function ratingFromPointer(event, element) {
    const target = element?.querySelector?.('.rating-stars') || element;
    const rect = target.getBoundingClientRect();
    const x = Math.max(0, Math.min(rect.width, event.clientX - rect.left));
    return Math.max(.5, Math.min(5, Math.ceil((x / Math.max(1, rect.width)) * 10) / 2));
  }

  function renderReviewOverview(gameId) {
    const stats = reviewStats.get(gameId) || { average:0, count:0 };
    const copy = communityCopy();
    const avgNumber = document.getElementById('reviewAverageNumber');
    const avgStars = document.getElementById('reviewAverageStars');
    const avgCount = document.getElementById('reviewAverageCount');
    if (avgNumber) avgNumber.textContent = stats.count ? stats.average.toFixed(1).replace('.', currentLanguage === 'en' ? '.' : ',') : '—';
    if (avgStars) avgStars.innerHTML = starFillMarkup(stats.average);
    if (avgCount) avgCount.textContent = stats.count ? copy.ratingCount(stats.count) : copy.ratingEmpty;
  }

  function reviewAvatarMarkup(nick, avatar) {
    const safeNick = String(nick || 'Jogador').trim() || 'Jogador';
    const image = String(avatar || '');
    const initial = [...safeNick][0]?.toUpperCase() || 'J';
    const avatarStyle = image.startsWith('data:image/') ? ` style="background-image:url('${escapeAttr(image)}')"` : '';
    return { nick: safeNick, avatarStyle, avatarText: avatarStyle ? '' : escapeHtml(initial) };
  }

  function renderOwnReviewSpotlight(publicRows = []) {
    const root = document.getElementById('ownReviewSpotlight');
    if (!root) return;
    const own = reviewDialogOwnReview;
    if (!authUser || !own || reviewEditorMode === 'edit') {
      root.hidden = true;
      root.innerHTML = '';
      return;
    }
    const copy = communityCopy();
    const publicOwn = publicRows.find(row => row.user_id === authUser.id || row.id === own.id) || null;
    const profile = getAccountProfile();
    const avatarInfo = reviewAvatarMarkup(publicOwn?.nickname || profile?.nickname || fallbackDisplayName(), publicOwn?.avatar_data_url || profile?.avatarDataUrl || '');
    const equippedTitles = Array.isArray(publicOwn?.equipped_titles) ? publicOwn.equipped_titles : currentEquippedTitles();
    const edited = own.updated_at && own.created_at && Math.abs(new Date(own.updated_at) - new Date(own.created_at)) > 1500 ? ` · ${copy.edited}` : '';
    const hiddenNotice = own.is_hidden ? `<p class="review-moderation-notice own-review-moderation">${escapeHtml(copy.reviewHidden)}</p>` : '';
    const profileAria = getCopy().publicProfileOpen.replace('{name}', avatarInfo.nick);
    root.innerHTML = `<article class="community-review is-own-review"><button class="community-review-avatar community-profile-trigger" type="button" data-public-profile="${escapeAttr(authUser.id)}" aria-label="${escapeAttr(profileAria)}"${avatarInfo.avatarStyle}>${avatarInfo.avatarText}</button><div class="own-review-content"><div class="own-review-topline"><span class="own-review-badge">★ ${escapeHtml(copy.ownReviewBadge)}</span><span class="community-review-date">${escapeHtml(formatReviewDate(own.updated_at || own.created_at))}${escapeHtml(edited)}</span></div><div class="community-review-headline"><div><div class="community-review-identity-line"><button class="community-review-user community-profile-trigger" type="button" data-public-profile="${escapeAttr(authUser.id)}" aria-label="${escapeAttr(profileAria)}">${escapeHtml(avatarInfo.nick)}</button><span class="comment-title-list">${titleBadgesMarkup(equippedTitles, 'is-comment-title')}</span>${publicOwn?.verified_player ? `<span class="verified-badge">✓ ${escapeHtml(copy.verified)}</span>` : ''}</div><div class="rating-stars community-review-stars" aria-label="${escapeAttr(copy.ratingAria(Number(own.rating)||0))}">${starFillMarkup(Number(own.rating)||0)}</div></div></div>${own.comment ? `<p class="community-review-comment">${escapeHtml(own.comment)}</p>` : ''}${hiddenNotice}<div class="own-review-actions">${own.is_hidden ? '' : `<button class="admin-mini-btn" type="button" data-edit-own-review>${escapeHtml(copy.editReview)}</button>`}<button class="admin-mini-btn danger" type="button" data-delete-own-review>${escapeHtml(copy.deleteReview)}</button></div></div></article>`;
    root.hidden = false;
  }

  function renderCommunityReviews(rows = []) {
    reviewDialogPublicRows = Array.isArray(rows) ? rows : [];
    const root = document.getElementById('communityReviewList');
    if (!root) return;
    const copy = communityCopy();
    const visibleRows = authUser && reviewDialogOwnReview ? rows.filter(row => row.user_id !== authUser.id && row.id !== reviewDialogOwnReview.id) : rows;
    renderOwnReviewSpotlight(rows);
    if (!visibleRows.length) {
      root.innerHTML = `<div class="community-review-empty">${escapeHtml(reviewDialogOwnReview ? copy.noOtherComments : copy.noComments)}</div>`;
      return;
    }
    root.innerHTML = visibleRows.map(row => {
      const avatarInfo = reviewAvatarMarkup(row.nickname, row.avatar_data_url);
      const edited = row.updated_at && row.created_at && Math.abs(new Date(row.updated_at) - new Date(row.created_at)) > 1500 ? ` · ${copy.edited}` : '';
      const profileAria = getCopy().publicProfileOpen.replace('{name}', avatarInfo.nick);
      const titles = Array.isArray(row.equipped_titles) ? row.equipped_titles : [];
      return `<article class="community-review"><button class="community-review-avatar community-profile-trigger" type="button" data-public-profile="${escapeAttr(row.user_id)}" aria-label="${escapeAttr(profileAria)}"${avatarInfo.avatarStyle}>${avatarInfo.avatarText}</button><div><div class="community-review-headline"><div><div class="community-review-identity-line"><button class="community-review-user community-profile-trigger" type="button" data-public-profile="${escapeAttr(row.user_id)}" aria-label="${escapeAttr(profileAria)}">${escapeHtml(avatarInfo.nick)}</button><span class="comment-title-list">${titleBadgesMarkup(titles, 'is-comment-title')}</span>${row.verified_player ? `<span class="verified-badge">✓ ${escapeHtml(copy.verified)}</span>` : ''}</div><div class="rating-stars community-review-stars" aria-label="${escapeAttr(copy.ratingAria(Number(row.rating)||0))}">${starFillMarkup(Number(row.rating)||0)}</div></div><span class="community-review-date">${escapeHtml(formatReviewDate(row.updated_at || row.created_at))}${escapeHtml(edited)}</span></div>${row.comment ? `<p class="community-review-comment">${escapeHtml(row.comment)}</p>` : ''}</div></article>`;
    }).join('');
  }

  function renderReviewEditor() {
    const copy = communityCopy();
    const guest = !authUser;
    const own = Boolean(reviewDialogOwnReview);
    const editing = own && reviewEditorMode === 'edit';
    const card = document.getElementById('yourReviewCard');
    const picker = document.getElementById('ratingPicker');
    const textarea = document.getElementById('reviewComment');
    const footer = document.querySelector('#yourReviewCard .review-editor-footer');
    const loginNotice = document.getElementById('reviewLoginNotice');
    const saveButton = document.getElementById('saveReviewButton');
    const cancelButton = document.getElementById('cancelReviewEdit');
    const label = document.getElementById('yourReviewLabel');
    const moderationNotice = document.getElementById('reviewModerationNotice');
    const hiddenByModeration = Boolean(reviewDialogOwnReview?.is_hidden);

    if (card) card.hidden = own && !editing;
    if (label) label.textContent = editing ? copy.editingReview : copy.yourReview;
    if (document.getElementById('reviewLoginText')) document.getElementById('reviewLoginText').textContent = copy.loginToReview;
    if (document.getElementById('reviewLoginButton')) document.getElementById('reviewLoginButton').textContent = copy.loginAction;
    if (textarea) textarea.placeholder = copy.commentPlaceholder;
    if (picker) picker.hidden = guest;
    if (textarea) textarea.hidden = guest;
    if (footer) footer.hidden = guest;
    if (loginNotice) loginNotice.hidden = !guest;
    if (saveButton) saveButton.textContent = editing ? copy.updateReview : copy.publishReview;
    if (cancelButton) { cancelButton.textContent = copy.cancelEdit; cancelButton.hidden = !editing; }
    if (moderationNotice) { moderationNotice.hidden = !hiddenByModeration; moderationNotice.textContent = copy.reviewHidden; }
    if (picker) picker.setAttribute('aria-disabled', String(hiddenByModeration));
    if (textarea) textarea.disabled = hiddenByModeration;

    setReviewDraftRating(editing ? Number(reviewDialogOwnReview.rating) : 0);
    if (textarea) textarea.value = editing ? (reviewDialogOwnReview?.comment || '') : '';
    if (saveButton && hiddenByModeration) saveButton.disabled = true;
    const count = document.getElementById('reviewCharCount');
    if (count) count.textContent = `${textarea?.value.length || 0}/800`;
    renderOwnReviewSpotlight(reviewDialogPublicRows);
  }

  function startOwnReviewEdit() {
    if (!reviewDialogOwnReview || reviewDialogOwnReview.is_hidden) return;
    reviewEditorMode = 'edit';
    renderReviewEditor();
    document.getElementById('yourReviewCard')?.scrollIntoView({ behavior:'smooth', block:'center' });
  }

  function cancelOwnReviewEdit() {
    reviewEditorMode = 'new';
    renderReviewEditor();
    document.getElementById('ownReviewSpotlight')?.scrollIntoView({ behavior:'smooth', block:'center' });
  }

  async function loadReviewDialog(gameId) {
    if (!supabaseClient) return;
    const copy = communityCopy();
    const list = document.getElementById('communityReviewList');
    if (list) list.innerHTML = '<div class="community-review-empty">Carregando...</div>';
    try {
      const reviewRequest = supabaseClient.rpc('zoinho_get_game_reviews', { p_game_id: gameId, p_limit: 50, p_offset: 0 });
      const ownRequest = authUser ? supabaseClient.from('game_reviews').select('id,user_id,game_id,rating,comment,is_hidden,created_at,updated_at').eq('user_id', authUser.id).eq('game_id', gameId).maybeSingle() : Promise.resolve({ data:null, error:null });
      const [reviewsResult, ownResult] = await Promise.all([reviewRequest, ownRequest]);
      if (reviewsResult.error) throw reviewsResult.error;
      if (ownResult.error) console.warn('[ZOINHO Reviews] Falha ao carregar a própria avaliação.', ownResult.error);
      reviewDialogOwnReview = ownResult.data || null;
      reviewEditorMode = 'new';
      renderCommunityReviews(reviewsResult.data || []);
      renderReviewEditor();
      renderReviewOverview(gameId);
      document.getElementById('communityReviewsTitle').textContent = copy.reviewsTitle;
    } catch (error) {
      console.warn('[ZOINHO Reviews] Falha ao carregar avaliações.', error);
      if (list) list.innerHTML = `<div class="community-review-empty">${escapeHtml(copy.reviewError)}</div>`;
    }
  }

  async function openReviewDialog(gameId, { focusEditor = false } = {}) {
    const game = games.find(item => item.id === gameId);
    const modal = document.getElementById('reviewModal');
    if (!game || !modal) return;
    reviewDialogGameId = gameId;
    reviewDialogOwnReview = null;
    reviewDraftRating = 0;
    reviewEditorMode = 'new';
    reviewDialogPublicRows = [];
    document.getElementById('reviewModalTitle').textContent = communityCopy().reviewsTitle;
    document.getElementById('reviewGameName').textContent = game.title;
    renderReviewOverview(gameId);
    renderReviewEditor();
    openModal(modal);
    await loadReviewDialog(gameId);
    if (focusEditor) (reviewDialogOwnReview ? document.getElementById('ownReviewSpotlight') : document.getElementById('yourReviewCard'))?.scrollIntoView({ behavior:'smooth', block:'start' });
  }

  async function saveReview() {
    if (!authUser || !supabaseClient || !reviewDialogGameId || reviewDraftRating < .5 || reviewDialogOwnReview?.is_hidden) return;
    let profile = getAccountProfile();
    if (!(cloudProfileUserId === authUser.id && cloudProfile?.exists)) profile = await loadCloudProfile(authUser.id) || profile;
    if (!profile?.nickname || !profile?.exists) {
      showToast(communityCopy().profileRequired);
      closeModal(document.getElementById('reviewModal'));
      accountTab = 'profile';
      renderAccount();
      openModal(accountModal);
      return;
    }
    const textarea = document.getElementById('reviewComment');
    const comment = String(textarea?.value || '').trim().slice(0,800);
    const button = document.getElementById('saveReviewButton');
    button.disabled = true;
    try {
      const { error } = await supabaseClient.from('game_reviews').upsert({ user_id:authUser.id, game_id:reviewDialogGameId, rating:reviewDraftRating, comment, is_hidden:false }, { onConflict:'user_id,game_id' });
      if (error) throw error;
      showToast(communityCopy().reviewSaved);
      await loadReviewStats({ rerender:true });
      await loadReviewDialog(reviewDialogGameId);
    } catch (error) {
      console.warn('[ZOINHO Reviews] Falha ao salvar avaliação.', error);
      showToast(communityCopy().reviewError);
    } finally {
      button.disabled = false;
    }
  }

  async function deleteOwnReview() {
    if (!authUser || !reviewDialogOwnReview || !supabaseClient) return;
    if (!confirm(communityCopy().reviewDeleteConfirm)) return;
    try {
      const { error } = await supabaseClient.from('game_reviews').delete().eq('id', reviewDialogOwnReview.id).eq('user_id', authUser.id);
      if (error) throw error;
      reviewDialogOwnReview = null;
      reviewEditorMode = 'new';
      showToast(communityCopy().reviewDeleted);
      await loadReviewStats({ rerender:true });
      await loadReviewDialog(reviewDialogGameId);
    } catch (error) {
      console.warn('[ZOINHO Reviews] Falha ao excluir avaliação.', error);
      showToast(communityCopy().reviewError);
    }
  }

  function csvList(value) { return String(value || '').split(',').map(item => item.trim()).filter(Boolean); }
  function normalizedOrigin(value) { try { return new URL(String(value || '').trim()).origin; } catch (_) { return ''; } }

  function setAdminTab(tab) {
    const allowedTabs = currentUserRole === 'admin' ? ['overview','games','reviews','logs'] : ['overview','reviews'];
    const target = allowedTabs.includes(tab) ? tab : 'overview';
    document.querySelectorAll('[data-admin-tab]').forEach(button => {
      const hiddenForRole = currentUserRole !== 'admin' && ['games','logs'].includes(button.dataset.adminTab);
      button.hidden = hiddenForRole;
      button.classList.toggle('is-active', !hiddenForRole && button.dataset.adminTab === target);
    });
    document.querySelectorAll('[data-admin-pane]').forEach(pane => { pane.hidden = pane.dataset.adminPane !== target; });
  }

  async function loadAdminGames() {
    if (!supabaseClient || currentUserRole !== 'admin') { adminGamesCache = []; renderAdminGames(); return []; }
    const { data, error } = await supabaseClient.from('games').select('*').order('order_index',{ascending:true}).order('title',{ascending:true});
    if (error) { console.warn('[ZOINHO Admin] Falha ao carregar jogos.',error); return []; }
    adminGamesCache = data || [];
    renderAdminGames();
    return adminGamesCache;
  }

  function renderAdminGames() {
    const root = document.getElementById('adminGamesList'); if (!root) return;
    if (!adminGamesCache.length) { root.innerHTML='<div class="community-review-empty">Nenhum jogo carregado.</div>'; return; }
    root.innerHTML = adminGamesCache.map(game => `<article class="admin-row"><div class="admin-row-main"><div class="admin-row-title">${escapeHtml(game.title)}<span class="admin-status ${game.published?'live':'hidden'}">${game.published?'PUBLICADO':'OCULTO'}</span>${game.bridge_enabled?'<span class="admin-status live">CLOUD</span>':''}</div><div class="admin-row-meta">${escapeHtml(game.id)} · ordem ${Number(game.order_index)||999} · ${escapeHtml(game.url)}</div></div><div class="admin-row-actions"><button class="admin-mini-btn" data-admin-edit-game="${escapeAttr(game.id)}">Editar</button><button class="admin-mini-btn ${game.published?'warning':''}" data-admin-toggle-game="${escapeAttr(game.id)}">${game.published?'Ocultar':'Publicar'}</button></div></article>`).join('');
  }

  async function loadAdminReviews() {
    if (!supabaseClient || !['admin','moderator'].includes(currentUserRole)) { adminReviewsCache=[]; renderAdminReviews(); return []; }
    const { data,error }=await supabaseClient.rpc('zoinho_admin_get_reviews',{p_limit:200,p_offset:0});
    if(error){console.warn('[ZOINHO Admin] Falha ao carregar avaliações.',error);return []}
    adminReviewsCache=data||[]; renderAdminReviews(); return adminReviewsCache;
  }

  function renderAdminReviews() {
    const root=document.getElementById('adminReviewsList'); if(!root)return;
    if(!adminReviewsCache.length){root.innerHTML='<div class="community-review-empty">Nenhuma avaliação encontrada.</div>';return}
    root.innerHTML=adminReviewsCache.map(review=>`<article class="admin-row"><div class="admin-row-main"><div class="admin-row-title">${escapeHtml(review.nickname)} · ${Number(review.rating).toFixed(1).replace('.',',')} ★ <span class="admin-status ${review.is_hidden?'hidden':'live'}">${review.is_hidden?'OCULTA':'VISÍVEL'}</span></div><div class="admin-row-meta">${escapeHtml(review.game_title)} · ${escapeHtml(formatReviewDate(review.updated_at))}</div>${review.comment?`<div class="admin-row-comment">${escapeHtml(review.comment)}</div>`:''}</div><div class="admin-row-actions">${review.comment?`<button class="admin-mini-btn" data-admin-clear-comment="${escapeAttr(review.id)}">Remover comentário</button>`:''}<button class="admin-mini-btn warning" data-admin-hide-review="${escapeAttr(review.id)}" data-hidden="${review.is_hidden?'1':'0'}">${review.is_hidden?'Reexibir':'Ocultar'}</button><button class="admin-mini-btn danger" data-admin-delete-review="${escapeAttr(review.id)}">Excluir avaliação</button></div></article>`).join('');
  }

  async function loadAdminLogs() {
    if (!supabaseClient || currentUserRole !== 'admin') { adminLogsCache=[]; renderAdminLogs(); return []; }
    const { data,error }=await supabaseClient.from('admin_audit_log').select('id,actor_user_id,actor_role,action,entity_type,entity_id,details,created_at').order('created_at',{ascending:false}).limit(100);
    if(error){console.warn('[ZOINHO Admin] Falha ao carregar logs.',error);return []}
    adminLogsCache=data||[]; renderAdminLogs(); return adminLogsCache;
  }

  function renderAdminLogs(){const root=document.getElementById('adminLogsList');if(!root)return;if(!adminLogsCache.length){root.innerHTML='<div class="community-review-empty">Nenhum log administrativo ainda.</div>';return}root.innerHTML=adminLogsCache.map(log=>`<article class="admin-row"><div class="admin-row-main"><div class="admin-row-title"><span class="admin-log-action">${escapeHtml(String(log.action||'').toUpperCase())}</span> · ${escapeHtml(log.entity_type||'')}</div><div class="admin-row-meta">${escapeHtml(formatReviewDate(log.created_at))} · ${escapeHtml(log.actor_role||'')} · ${escapeHtml(log.entity_id||'—')}</div><div class="admin-row-comment">${escapeHtml(JSON.stringify(log.details||{}))}</div></div></article>`).join('')}

  function renderAdminOverview(){const gamesCount=adminGamesCache.length,published=adminGamesCache.filter(g=>g.published).length,hidden=adminReviewsCache.filter(r=>r.is_hidden).length;document.getElementById('adminMetricGames').textContent=String(gamesCount||games.length);document.getElementById('adminMetricPublished').textContent=String(gamesCount?published:games.length);document.getElementById('adminMetricReviews').textContent=String(adminReviewsCache.length);document.getElementById('adminMetricHidden').textContent=String(hidden);document.getElementById('adminRoleSummary').textContent=currentUserRole==='admin'?'Administrador':'Moderador'}

  async function openAdminPanel(){if(!authUser||!['admin','moderator'].includes(currentUserRole))return;const modal=document.getElementById('adminModal');setAdminTab('overview');openModal(modal);await Promise.all([currentUserRole==='admin'?loadAdminGames():Promise.resolve([]),loadAdminReviews(),currentUserRole==='admin'?loadAdminLogs():Promise.resolve([])]);renderAdminOverview()}

  function clearAdminGameForm(){adminEditingGameId=null;const form=document.getElementById('adminGameForm');form?.reset();document.getElementById('adminGameOrder').value='999';document.getElementById('adminGameCreator').value='Z01NH0';document.getElementById('adminGameModePt').value='Singleplayer';document.getElementById('adminGameModeEn').value='Single-player';document.getElementById('adminGamePlatformPt').value='PC';document.getElementById('adminGamePlatformEn').value='PC';document.getElementById('adminGameBridgeVersion').value='1';document.getElementById('adminGamePublished').checked=true;document.getElementById('adminGameDatesAvailable').checked=true;document.getElementById('adminGameId').disabled=false;document.getElementById('adminDeleteGame').hidden=true;document.getElementById('adminCoverPreview').src='';document.getElementById('adminGameModalTitle').textContent='Adicionar jogo';document.getElementById('adminGameError').hidden=true}

  function openAdminGameEditor(id=null){if(currentUserRole!=='admin')return;clearAdminGameForm();const modal=document.getElementById('adminGameModal');if(id){const g=adminGamesCache.find(x=>x.id===id);if(!g)return;adminEditingGameId=id;document.getElementById('adminGameModalTitle').textContent=`Editar ${g.title}`;document.getElementById('adminGameId').value=g.id;document.getElementById('adminGameId').disabled=true;document.getElementById('adminGameOrder').value=g.order_index??999;document.getElementById('adminGameTitle').value=g.title||'';document.getElementById('adminGameUrl').value=g.url||'';document.getElementById('adminGameKicker').value=g.kicker||'';document.getElementById('adminGameCreator').value=g.creator||'Z01NH0';document.getElementById('adminGameCategories').value=(g.categories||[]).join(', ');document.getElementById('adminGameTagsPt').value=(g.tags_pt||[]).join(', ');document.getElementById('adminGameTagsEn').value=(g.tags_en||[]).join(', ');document.getElementById('adminGameModePt').value=g.mode_pt||'';document.getElementById('adminGameModeEn').value=g.mode_en||'';document.getElementById('adminGameGenresPt').value=g.genres_pt||'';document.getElementById('adminGameGenresEn').value=g.genres_en||'';document.getElementById('adminGameShortPt').value=g.short_pt||'';document.getElementById('adminGameShortEn').value=g.short_en||'';document.getElementById('adminGameDescriptionPt').value=g.description_pt||'';document.getElementById('adminGameDescriptionEn').value=g.description_en||'';document.getElementById('adminGamePlatformPt').value=g.platform_pt||'PC';document.getElementById('adminGamePlatformEn').value=g.platform_en||'PC';document.getElementById('adminGameImageUrl').value=g.image_url||'';document.getElementById('adminCoverPreview').src=g.image_url||'';document.getElementById('adminGameVercelProjectId').value=g.vercel_project_id||'';document.getElementById('adminGamePublished').checked=!!g.published;document.getElementById('adminGameFeatured').checked=!!g.featured;document.getElementById('adminGameDatesAvailable').checked=g.dates_available!==false;document.getElementById('adminGameBridgeEnabled').checked=!!g.bridge_enabled;document.getElementById('adminGameBridgeOrigin').value=g.bridge_origin||'';document.getElementById('adminGameBridgeVersion').value=g.bridge_save_version||1;document.getElementById('adminGameBridgeKeys').value=(g.bridge_save_keys||[]).join(', ');document.getElementById('adminDeleteGame').hidden=false}openModal(modal)}

  function managedCoverPath(url) {
    const marker = '/storage/v1/object/public/game-covers/';
    const value = String(url || '');
    const index = value.indexOf(marker);
    if (index < 0) return null;
    try { return decodeURIComponent(value.slice(index + marker.length).split('?')[0]); } catch (_) { return value.slice(index + marker.length).split('?')[0]; }
  }

  async function removeManagedCover(url) {
    const path = managedCoverPath(url);
    if (!path || !supabaseClient) return;
    const { error } = await supabaseClient.storage.from('game-covers').remove([path]);
    if (error) console.warn('[ZOINHO Admin] Não foi possível remover capa antiga.', error);
  }

  async function uploadAdminCover(gameId,file){if(!file)return null;const allowed={'image/png':'png','image/jpeg':'jpg','image/webp':'webp'};const ext=allowed[file.type];if(!ext)throw new Error('Use PNG, JPG ou WEBP.');if(file.size>5*1024*1024)throw new Error('A capa deve ter no máximo 5 MB.');const path=`${gameId}/${Date.now()}-${crypto.randomUUID?.()||Math.random().toString(36).slice(2)}.${ext}`;const {error}=await supabaseClient.storage.from('game-covers').upload(path,file,{cacheControl:'3600',upsert:false,contentType:file.type});if(error)throw error;return supabaseClient.storage.from('game-covers').getPublicUrl(path).data.publicUrl}

  async function saveAdminGame(event){event.preventDefault();if(currentUserRole!=='admin'||!supabaseClient)return;const errorEl=document.getElementById('adminGameError');errorEl.hidden=true;const id=(adminEditingGameId||document.getElementById('adminGameId').value).trim().toLowerCase();if(!/^[a-z0-9][a-z0-9-]{1,63}$/.test(id)){errorEl.textContent='ID inválido. Use letras minúsculas, números e hífens.';errorEl.hidden=false;return}try{const previousGame=adminEditingGameId?adminGamesCache.find(x=>x.id===adminEditingGameId):null;const oldImageUrl=previousGame?.image_url||'';let imageUrl=document.getElementById('adminGameImageUrl').value.trim();const file=document.getElementById('adminGameCoverFile').files?.[0];if(file)imageUrl=await uploadAdminCover(id,file);const bridgeEnabled=document.getElementById('adminGameBridgeEnabled').checked;const payload={id,order_index:Number(document.getElementById('adminGameOrder').value)||999,title:document.getElementById('adminGameTitle').value.trim(),url:document.getElementById('adminGameUrl').value.trim(),image_url:imageUrl,kicker:document.getElementById('adminGameKicker').value.trim()||'JOGO',creator:document.getElementById('adminGameCreator').value.trim()||'Z01NH0',categories:csvList(document.getElementById('adminGameCategories').value),tags_pt:csvList(document.getElementById('adminGameTagsPt').value),tags_en:csvList(document.getElementById('adminGameTagsEn').value),mode_pt:document.getElementById('adminGameModePt').value.trim()||'Singleplayer',mode_en:document.getElementById('adminGameModeEn').value.trim()||'Single-player',genres_pt:document.getElementById('adminGameGenresPt').value.trim(),genres_en:document.getElementById('adminGameGenresEn').value.trim(),short_pt:document.getElementById('adminGameShortPt').value.trim(),short_en:document.getElementById('adminGameShortEn').value.trim(),description_pt:document.getElementById('adminGameDescriptionPt').value.trim(),description_en:document.getElementById('adminGameDescriptionEn').value.trim(),platform_pt:document.getElementById('adminGamePlatformPt').value.trim()||'PC',platform_en:document.getElementById('adminGamePlatformEn').value.trim()||'PC',published:document.getElementById('adminGamePublished').checked,featured:document.getElementById('adminGamePublished').checked&&document.getElementById('adminGameFeatured').checked,dates_available:document.getElementById('adminGameDatesAvailable').checked,vercel_project_id:document.getElementById('adminGameVercelProjectId').value.trim()||null,bridge_enabled:bridgeEnabled,bridge_origin:bridgeEnabled?normalizedOrigin(document.getElementById('adminGameBridgeOrigin').value):null,bridge_save_version:Math.max(1,Number(document.getElementById('adminGameBridgeVersion').value)||1),bridge_save_keys:bridgeEnabled?csvList(document.getElementById('adminGameBridgeKeys').value):[]};if(!payload.title||!/^https?:\/\//.test(payload.url))throw new Error('Nome e URL HTTPS/HTTP válidos são obrigatórios.');if(bridgeEnabled&&(!/^https?:\/\//.test(payload.bridge_origin||'')||!payload.bridge_save_keys.length))throw new Error('Cloud Save exige origin e pelo menos uma save key.');if(payload.featured){const {error:clearError}=await supabaseClient.from('games').update({featured:false}).neq('id',id).eq('featured',true);if(clearError)throw clearError}const {error}=await supabaseClient.from('games').upsert(payload,{onConflict:'id'});if(error)throw error;if(file&&oldImageUrl&&oldImageUrl!==imageUrl)await removeManagedCover(oldImageUrl);closeModal(document.getElementById('adminGameModal'));showToast('Jogo salvo no catálogo.');await loadAdminGames();await loadCatalogFromCloud({rerender:true});renderAdminOverview()}catch(error){console.warn('[ZOINHO Admin] Falha ao salvar jogo.',error);errorEl.textContent=error.message||String(error);errorEl.hidden=false}}

  async function toggleAdminGamePublished(id){if(currentUserRole!=='admin')return;const g=adminGamesCache.find(x=>x.id===id);if(!g)return;const changes=g.published?{published:false,featured:false}:{published:true};const {error}=await supabaseClient.from('games').update(changes).eq('id',id);if(error)return showToast(error.message);await loadAdminGames();await loadCatalogFromCloud({rerender:true});renderAdminOverview()}

  async function deleteAdminGame(){if(currentUserRole!=='admin'||!adminEditingGameId)return;const g=adminGamesCache.find(x=>x.id===adminEditingGameId);if(!confirm(`Excluir definitivamente "${g?.title||adminEditingGameId}"? Avaliações desse jogo também serão removidas. Para só tirar do catálogo, prefira Ocultar.`))return;const oldImageUrl=g?.image_url||'';const {error}=await supabaseClient.from('games').delete().eq('id',adminEditingGameId);if(error)return showToast(error.message);await removeManagedCover(oldImageUrl);closeModal(document.getElementById('adminGameModal'));showToast('Jogo excluído.');await loadAdminGames();await loadCatalogFromCloud({rerender:true});await loadAdminReviews();renderAdminOverview()}

  async function moderateReview(id,hide){if(!['admin','moderator'].includes(currentUserRole))return;const {error}=await supabaseClient.from('game_reviews').update({is_hidden:hide}).eq('id',id);if(error)return showToast(error.message);await loadAdminReviews();await loadReviewStats({rerender:true});renderAdminOverview()}
  async function adminClearReviewComment(id){if(!['admin','moderator'].includes(currentUserRole)||!confirm('Remover somente o comentário e manter a nota desta avaliação?'))return;const {error}=await supabaseClient.from('game_reviews').update({comment:''}).eq('id',id);if(error)return showToast(error.message);await loadAdminReviews();if(reviewDialogGameId)await loadReviewDialog(reviewDialogGameId);showToast('Comentário removido.');}
  async function adminDeleteReview(id){if(!['admin','moderator'].includes(currentUserRole)||!confirm('Excluir definitivamente esta avaliação?'))return;const {error}=await supabaseClient.from('game_reviews').delete().eq('id',id);if(error)return showToast(error.message);await loadAdminReviews();await loadReviewStats({rerender:true});renderAdminOverview()}

  function createCard(game) {
    const copy = getCopy();
    const tags = game.tags?.[currentLanguage] || game.tags?.['pt-BR'] || [];
    const platform = game.platform?.[currentLanguage] || 'PC';
    const short = game.short?.[currentLanguage] || game.short?.['pt-BR'] || '';
    return `
      <article class="game-card" data-game="${escapeAttr(game.id)}" data-categories="${escapeAttr((game.categories || []).join(' '))}">
        <div class="game-art">
          <img class="cover-image" src="${escapeAttr(game.image || '')}" alt="Capa de ${escapeAttr(game.title)}" loading="lazy" />
          <div class="art-topline"><span class="game-number">${String(game.order || 0).padStart(2, '0')}</span><span>${escapeHtml(game.kicker || 'JOGO')}</span></div>
          <span class="art-title">${escapeHtml(game.title)}</span>
        </div>
        <div class="game-content">
          <div class="game-meta"><span class="platform-badge">${escapeHtml(platform)}</span><span class="availability"><i></i><span>${escapeHtml(copy.available)}</span></span></div>
          <h3>${escapeHtml(game.title)}</h3>
          ${ratingSummaryMarkup(game.id)}
          <p>${escapeHtml(short)}</p>
          <div class="genre-list" aria-label="${escapeAttr(copy.genres)}">${tags.map(tag => `<span>${escapeHtml(tag)}</span>`).join('')}</div>
          <div class="game-actions">
            <a class="button button-primary button-play" href="${escapeAttr(game.url)}" target="_blank" rel="noopener noreferrer" data-launch-game="${escapeAttr(game.id)}">
              <svg class="icon play-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m8 5 11 7-11 7V5Z"/></svg>
              <span>${escapeHtml(copy.playNow)}</span>
            </a>
            <button class="button button-square game-details" type="button" data-game-id="${escapeAttr(game.id)}" aria-label="Ver detalhes de ${escapeAttr(game.title)}">
              <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 11v6m0-10h.01"/></svg>
            </button>
          </div>
        </div>
      </article>`;
  }

  function renderCatalog() {
    gamesGrid.innerHTML = games.map(createCard).join('');
    bindGameLaunchers();
    document.querySelectorAll('.game-details').forEach(button => {
      button.addEventListener('click', () => openGameDetails(button.dataset.gameId));
    });
    document.querySelectorAll('[data-open-reviews]').forEach(button => button.addEventListener('click', () => { void openReviewDialog(button.dataset.openReviews); }));
    document.querySelectorAll('[data-rate-game]').forEach(button => button.addEventListener('click', () => { void openReviewDialog(button.dataset.rateGame, { focusEditor:true }); }));
    filterGames();
  }

  function renderFeatured() {
    const featuredGame = games.find(game => game.featured) || games[0];
    if (!featuredGame) return;
    document.getElementById('featuredArtImage').src = featuredGame.image;
    document.getElementById('featuredArtImage').alt = `${featuredGame.title} cover`;
    document.getElementById('featuredTitle').textContent = featuredGame.title;
    document.getElementById('featuredDescription').textContent = featuredGame.short[currentLanguage];
    const featuredLink = document.getElementById('featuredLink');
    featuredLink.href = featuredGame.url;
    featuredLink.dataset.launchGame = featuredGame.id;
  }

  function renderStats() {
    document.getElementById('statGamesCount').textContent = String(games.length);
  }

  function applyLanguage(language, persist = true) {
    currentLanguage = translations[language] ? language : 'pt-BR';
    root.lang = currentLanguage;
    languageSelect.value = currentLanguage;
    const copy = getCopy();

    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.dataset.i18n;
      if (copy[key] != null) element.textContent = copy[key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
      const key = element.dataset.i18nPlaceholder;
      if (copy[key] != null) element.placeholder = copy[key];
    });

    renderFeatured();
    renderCatalog();
    if (currentOpenGameId) openGameDetails(currentOpenGameId, true);
    if (reviewDialogGameId && document.getElementById('reviewModal')?.open) {
      document.getElementById('reviewModalTitle').textContent = communityCopy().reviewsTitle;
      renderReviewOverview(reviewDialogGameId);
      renderReviewEditor();
      void loadReviewDialog(reviewDialogGameId);
    }

    renderAccount();
    renderProfileTitles();
    if (publicProfileData && publicProfileModal?.open) renderPublicProfile(publicProfileData);
    if (persist) localStorage.setItem(STORAGE_KEYS.language, currentLanguage);
  }

  function filterGames() {
    const query = normalize(searchInput.value.trim());
    const cards = [...document.querySelectorAll('.game-card')];
    let visibleCount = 0;

    cards.forEach(card => {
      const title = normalize(card.querySelector('h3').textContent);
      const categories = normalize(card.dataset.categories || '');
      const description = normalize(card.querySelector('.game-content > p').textContent);
      const matchesSearch = !query || `${title} ${categories} ${description}`.includes(query);
      const matchesFilter = activeFilter === 'all' || categories.includes(activeFilter);
      const visible = matchesSearch && matchesFilter;
      card.hidden = !visible;
      if (visible) visibleCount += 1;
    });

    emptyState.hidden = visibleCount > 0;
  }

  function setActiveFilter(filter) {
    activeFilter = filter;
    filterButtons.forEach(button => {
      const isActive = button.dataset.filter === filter;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
    });
    filterGames();
  }

  function openModal(modal) {
    if (typeof modal.showModal === 'function') modal.showModal();
    else modal.setAttribute('open', '');
    document.body.classList.add('modal-open');
  }

  function closeModal(modal) {
    if (!modal) return;
    if (typeof modal.close === 'function') modal.close();
    else modal.removeAttribute('open');
    const anyOpen = [...document.querySelectorAll('dialog.modal')].some(item => item.open || item.hasAttribute('open'));
    if (!anyOpen) document.body.classList.remove('modal-open');
  }

  function syncModalOpenClass() {
    const anyOpen = [...document.querySelectorAll('dialog.modal')].some(item => item.open || item.hasAttribute('open'));
    document.body.classList.toggle('modal-open', anyOpen);
  }

  function openGameDetails(id, keepOpen = false) {
    const game = games.find(item => item.id === id);
    if (!game) return;
    currentOpenGameId = id;
    const copy = getCopy();
    const art = document.getElementById('gameModalArt');
    art.innerHTML = `<img class="cover-image" src="${escapeAttr(game.image || '')}" alt="Capa de ${escapeAttr(game.title)}" /><div class="modal-art-overlay"></div><div class="modal-art-label">${escapeHtml(game.kicker || 'JOGO')}</div>`;
    document.getElementById('gameModalKicker').textContent = game.kicker;
    document.getElementById('gameModalTitle').textContent = game.title;
    document.getElementById('gameModalDescription').textContent = game.description[currentLanguage];
    document.getElementById('gameModalPlatform').textContent = game.platform?.[currentLanguage] || 'PC';
    document.getElementById('gameModalMode').textContent = game.mode[currentLanguage];
    document.getElementById('gameModalGenres').textContent = game.genres[currentLanguage];
    document.getElementById('gameModalCreator').textContent = game.creator;
    renderGameDates(game.id);
    const modalLink = document.getElementById('gameModalLink');
    modalLink.href = game.url;
    modalLink.dataset.launchGame = game.id;
    if (!keepOpen) openModal(gameModal);
  }

  document.addEventListener('click', event => {
    const link = event.target.closest?.('[data-launch-game]');
    if (!link || link.closest('#gamesGrid')) return;
    const game = games.find(item => item.id === link.dataset.launchGame);
    if (!game) return;
    event.preventDefault();
    launchGame(game);
  });

  document.getElementById('openSettings').addEventListener('click', () => openModal(settingsModal));
  openAccountButton.addEventListener('click', () => {
    if (authUser || guestMode) {
      accountTab = authUser ? 'profile' : 'cloud';
      renderAccount();
    }
    openModal(accountModal);
  });
  closeAccountModalButton.addEventListener('click', () => {
    if (!isEntryGateRequired()) closeModal(accountModal);
  });
  accountModal.addEventListener('click', event => {
    if (event.target === accountModal && !isEntryGateRequired()) closeModal(accountModal);
  });
  accountModal.addEventListener('cancel', event => {
    if (isEntryGateRequired()) event.preventDefault();
  });
  accountModal.addEventListener('close', () => {
    queueMicrotask(syncModalOpenClass);
    if (isEntryGateRequired()) queueMicrotask(syncEntryGate);
  });
  document.querySelectorAll('[data-auth-mode]').forEach(button => button.addEventListener('click', () => setAuthMode(button.dataset.authMode)));
  authForm.addEventListener('submit', submitAuthForm);
  googleAuthButton?.addEventListener('click', signInWithGoogle);
  guestEntryButton?.addEventListener('click', enterGuestMode);
  document.querySelectorAll('[data-account-tab]').forEach(button => button.addEventListener('click', () => setAccountTab(button.dataset.accountTab)));
  chooseProfilePhoto?.addEventListener('click', () => profilePhotoInput?.click());
  profilePhotoInput?.addEventListener('change', () => { void handleProfilePhotoChange(); });
  removeProfilePhoto?.addEventListener('click', () => {
    pendingProfileAvatar = '';
    paintAvatar(profileAvatarPreview, { ...getAccountProfile(), avatarDataUrl: '' });
  });
  saveLocalProfileButton?.addEventListener('click', saveProfileEditor);
  profileTitleList?.addEventListener('click', event => {
    const button = event.target.closest?.('[data-profile-title]');
    if (button) toggleProfileTitle(button.dataset.profileTitle);
  });
  saveProfileTitlesButton?.addEventListener('click', () => { void saveEquippedTitles(); });
  guestGoToLoginButton?.addEventListener('click', () => leaveGuestMode({ openLogin: true }));
  forgotPassword.addEventListener('click', sendPasswordReset);
  recoveryForm.addEventListener('submit', submitRecoveryForm);
  cancelRecovery.addEventListener('click', () => {
    recoveryMode = false;
    renderAccount();
    setAuthMode('login');
  });
  signOutButton.addEventListener('click', signOut);
  cloudSyncNowButton?.addEventListener('click', requestAllActiveSnapshots);
  cloudGameSearch?.addEventListener('input', renderCloudState);
  cloudGamesList?.addEventListener('click', event => {
    const button = event.target.closest?.('[data-cloud-info-game]');
    if (!button) return;
    const gameId = button.dataset.cloudInfoGame;
    if (!storageBridgeGames.has(gameId)) return;
    cloudInfoGameId = gameId;
    renderCloudInfo();
    openModal(cloudGameInfoModal);
  });
  document.getElementById('closeCloudGameInfoModal')?.addEventListener('click', () => closeModal(cloudGameInfoModal));
  document.getElementById('cloudInfoCloseButton')?.addEventListener('click', () => closeModal(cloudGameInfoModal));
  cloudGameInfoModal?.addEventListener('click', event => {
    if (event.target === cloudGameInfoModal) closeModal(cloudGameInfoModal);
  });
  cloudGameInfoModal?.addEventListener('close', () => {
    cloudInfoGameId = null;
    queueMicrotask(syncModalOpenClass);
  });
  document.getElementById('themeQuickToggle').addEventListener('click', () => {
    applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
    showToast(getCopy().settingsSaved);
  });

  themeInputs.forEach(input => input.addEventListener('change', () => {
    applyTheme(input.value);
    showToast(getCopy().settingsSaved);
  }));

  fontSizeInputs.forEach(input => input.addEventListener('change', () => {
    if (!input.checked) return;
    applyTypography(input.value, currentFontFamily);
    showToast(getCopy().settingsSaved);
  }));

  fontFamilyInputs.forEach(input => input.addEventListener('change', () => {
    if (!input.checked) return;
    applyTypography(currentFontSize, input.value);
    showToast(getCopy().settingsSaved);
  }));

  languageSelect.addEventListener('change', () => {
    applyLanguage(languageSelect.value);
    showToast(getCopy().settingsSaved);
  });

  document.getElementById('resetSettings').addEventListener('click', () => {
    applyTheme('dark');
    applyTypography('normal', 'inter');
    applyLanguage('pt-BR');
    searchInput.value = '';
    setActiveFilter('all');
    showToast(getCopy().defaultsRestored);
  });

  settingsModal.addEventListener('close', () => queueMicrotask(syncModalOpenClass));
  settingsModal.addEventListener('click', event => {
    if (event.target === settingsModal) closeModal(settingsModal);
  });

  searchInput.addEventListener('input', filterGames);
  filterButtons.forEach(button => button.addEventListener('click', () => setActiveFilter(button.dataset.filter)));
  document.getElementById('clearFilters').addEventListener('click', () => {
    searchInput.value = '';
    setActiveFilter('all');
    searchInput.focus();
  });

  document.getElementById('closeGameModal').addEventListener('click', () => {
    currentOpenGameId = null;
    closeModal(gameModal);
  });
  gameModal.addEventListener('click', event => {
    if (event.target === gameModal) {
      currentOpenGameId = null;
      closeModal(gameModal);
    }
  });
  gameModal.addEventListener('close', () => {
    currentOpenGameId = null;
    queueMicrotask(syncModalOpenClass);
  });

  document.addEventListener('keydown', event => {
    if (event.key === '/' && !settingsModal.open && !gameModal.open && !accountModal.open && document.activeElement !== searchInput) {
      event.preventDefault();
      searchInput.focus();
      document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  setInterval(() => {
    if (authUser && accountModal?.open) renderNicknameCooldown();
  }, 30000);


  const reviewModal = document.getElementById('reviewModal');
  const adminModal = document.getElementById('adminModal');
  const adminGameModal = document.getElementById('adminGameModal');
  const ratingPicker = document.getElementById('ratingPicker');
  const reviewComment = document.getElementById('reviewComment');

  document.getElementById('closeReviewModal')?.addEventListener('click', () => closeModal(reviewModal));
  reviewModal?.addEventListener('click', event => { if (event.target === reviewModal) closeModal(reviewModal); });
  reviewModal?.addEventListener('close', () => { reviewDialogGameId = null; reviewDialogOwnReview = null; reviewDraftRating = 0; reviewEditorMode = 'new'; reviewDialogPublicRows = []; queueMicrotask(syncModalOpenClass); });
  ratingPicker?.addEventListener('pointermove', event => { if (authUser && !reviewDialogOwnReview?.is_hidden) setReviewDraftRating(ratingFromPointer(event, ratingPicker), { preview:true }); });
  ratingPicker?.addEventListener('pointerleave', () => setReviewDraftRating(reviewDraftRating, { preview:true }));
  ratingPicker?.addEventListener('click', event => { if (authUser && !reviewDialogOwnReview?.is_hidden) setReviewDraftRating(ratingFromPointer(event, ratingPicker)); });
  ratingPicker?.addEventListener('keydown', event => {
    if (!authUser || reviewDialogOwnReview?.is_hidden) return;
    let next = reviewDraftRating || .5;
    if (event.key === 'ArrowRight' || event.key === 'ArrowUp') next = Math.min(5, next + .5);
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') next = Math.max(.5, next - .5);
    else if (event.key === 'Home') next = .5;
    else if (event.key === 'End') next = 5;
    else return;
    event.preventDefault();
    setReviewDraftRating(next);
  });
  reviewComment?.addEventListener('input', () => { const count=document.getElementById('reviewCharCount'); if(count) count.textContent=`${reviewComment.value.length}/800`; });
  document.getElementById('saveReviewButton')?.addEventListener('click', () => { void saveReview(); });
  document.getElementById('cancelReviewEdit')?.addEventListener('click', cancelOwnReviewEdit);
  document.getElementById('ownReviewSpotlight')?.addEventListener('click', event => {
    if (event.target.closest?.('[data-edit-own-review]')) return startOwnReviewEdit();
    if (event.target.closest?.('[data-delete-own-review]')) void deleteOwnReview();
  });
  document.getElementById('reviewLoginButton')?.addEventListener('click', () => {
    closeModal(reviewModal);
    if (guestMode) leaveGuestMode({ openLogin:true }); else { setAuthMode('login'); openModal(accountModal); }
  });

  document.addEventListener('click', event => {
    const trigger = event.target.closest?.('[data-public-profile]');
    if (!trigger) return;
    const userId = trigger.dataset.publicProfile;
    if (!userId) return;
    event.preventDefault();
    void openPublicProfile(userId);
  });
  document.getElementById('closePublicProfileModal')?.addEventListener('click', () => closeModal(publicProfileModal));
  publicProfileModal?.addEventListener('click', event => { if (event.target === publicProfileModal) closeModal(publicProfileModal); });
  publicProfileModal?.addEventListener('close', () => {
    publicProfileUserId = null;
    publicProfileData = null;
    queueMicrotask(syncModalOpenClass);
  });

  document.getElementById('openAdminPanel')?.addEventListener('click', () => { void openAdminPanel(); });
  document.getElementById('closeAdminModal')?.addEventListener('click', () => closeModal(adminModal));
  adminModal?.addEventListener('click', event => { if (event.target === adminModal) closeModal(adminModal); });
  adminModal?.addEventListener('close', () => queueMicrotask(syncModalOpenClass));
  document.querySelectorAll('[data-admin-tab]').forEach(button => button.addEventListener('click', () => setAdminTab(button.dataset.adminTab)));
  document.getElementById('adminAddGame')?.addEventListener('click', () => openAdminGameEditor());
  document.getElementById('adminRefreshReviews')?.addEventListener('click', async () => { await loadAdminReviews(); renderAdminOverview(); });
  document.getElementById('adminRefreshLogs')?.addEventListener('click', () => { void loadAdminLogs(); });
  document.getElementById('adminGamesList')?.addEventListener('click', event => {
    const edit = event.target.closest?.('[data-admin-edit-game]');
    if (edit) return openAdminGameEditor(edit.dataset.adminEditGame);
    const toggle = event.target.closest?.('[data-admin-toggle-game]');
    if (toggle) void toggleAdminGamePublished(toggle.dataset.adminToggleGame);
  });
  document.getElementById('adminReviewsList')?.addEventListener('click', event => {
    const clear = event.target.closest?.('[data-admin-clear-comment]');
    if (clear) return void adminClearReviewComment(clear.dataset.adminClearComment);
    const hide = event.target.closest?.('[data-admin-hide-review]');
    if (hide) return void moderateReview(hide.dataset.adminHideReview, hide.dataset.hidden !== '1');
    const del = event.target.closest?.('[data-admin-delete-review]');
    if (del) void adminDeleteReview(del.dataset.adminDeleteReview);
  });
  document.getElementById('closeAdminGameModal')?.addEventListener('click', () => closeModal(adminGameModal));
  adminGameModal?.addEventListener('click', event => { if (event.target === adminGameModal) closeModal(adminGameModal); });
  adminGameModal?.addEventListener('close', () => queueMicrotask(syncModalOpenClass));
  document.getElementById('adminGameForm')?.addEventListener('submit', event => { void saveAdminGame(event); });
  document.getElementById('adminDeleteGame')?.addEventListener('click', () => { void deleteAdminGame(); });
  document.getElementById('adminGameCoverFile')?.addEventListener('change', event => {
    const file = event.target.files?.[0]; if (!file) return;
    const preview = document.getElementById('adminCoverPreview');
    const objectUrl = URL.createObjectURL(file); preview.src = objectUrl; preview.onload = () => URL.revokeObjectURL(objectUrl);
  });


  document.getElementById('currentYear').textContent = new Date().getFullYear();
  renderStats();
  renderFeatured();
  renderCatalog();
  void loadReviewStats({ rerender:true });
  void loadGameDates();
  applyTheme(currentTheme, false);
  applyTypography(currentFontSize, currentFontFamily, false);
  applyLanguage(currentLanguage, false);
  setActiveFilter('all');
  setAuthMode('login');
  renderAccount();
  void loadCatalogFromCloud({ rerender:true });
  void initAuth();
})();
