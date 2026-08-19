(() => {
  'use strict';

  const STORAGE_KEYS = {
    theme: 'zoinho-games-theme',
    language: 'zoinho-games-language',
    bridgeCache: 'zoinho-games-storage-bridge-v2',
    bridgeCacheLegacy: 'zoinho-games-storage-bridge-v1'
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
      accountSignupHelp: 'Crie sua conta ZOINHO. O Supabase pode pedir confirmação por e-mail antes do primeiro login.',
      accountForgot: 'Esqueci minha senha',
      accountLogout: 'Sair da conta',
      accountConnected: 'CONECTADO',
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
      cloudDatabaseReady: 'Banco conectado. Aguardando o save do Blood Machine.',
      cloudSnapshotQueued: 'Save recebido do Blood Machine; aguardando gravação no Supabase.',
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
      authPasswordsMismatch: 'As senhas não são iguais.',
      authAccountCreated: 'Conta criada. Confira seu e-mail se a confirmação estiver ativada.',
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
      accountSignupHelp: 'Create your ZOINHO account. Supabase may require email confirmation before the first sign-in.',
      accountForgot: 'Forgot my password',
      accountLogout: 'Sign out',
      accountConnected: 'CONNECTED',
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
      cloudDatabaseReady: 'Database connected. Waiting for the Blood Machine save.',
      cloudSnapshotQueued: 'Save received from Blood Machine; waiting for Supabase write.',
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
      authPasswordsMismatch: 'The passwords do not match.',
      authAccountCreated: 'Account created. Check your email if confirmation is enabled.',
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

  const games = [
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

  const root = document.documentElement;
  const STORAGE_BRIDGE_PROTOCOL = 'zoinho-storage-v2';
  const STORAGE_BRIDGE_VERSION = 2;
  const STORAGE_BRIDGE_MAX_BYTES = 512 * 1024;
  const CLOUD_WRITE_DELAY = 300;
  const BRIDGE_SNAPSHOT_REQUEST_DELAY = 500;
  const BRIDGE_HANDSHAKE_TIMEOUT = 12000;
  const storageBridgeGames = new Map([
    ['blood-machine', {
      title: 'Blood Machine',
      origin: 'https://blood-machine.vercel.app',
      saveVersion: 1,
      saveKeys: ['bloodMachineProgressUpdate12']
    }],
    ['dead-signal', {
      title: 'Dead Signal',
      origin: 'https://zombie-survival-six.vercel.app',
      saveVersion: 1,
      saveKeys: ['dead_signal_nightfall_v1']
    }],
    ['heroes-battle', {
      title: 'Heroes Battle',
      origin: 'https://heroes-battle-ultimate-version.vercel.app',
      saveVersion: 1,
      saveKeys: ['hb-rune-progression-v2', 'hb-reforged2-best']
    }]
  ]);

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
    if (!storageBridgeGames.has(game.id)) return game.url;
    const url = new URL(game.url);
    url.searchParams.set('zoinhoBridge', '1');
    url.searchParams.set('zoinhoBridgeVersion', String(STORAGE_BRIDGE_VERSION));
    return url.toString();
  }

  function launchGame(game) {
    const child = window.open(bridgeLaunchUrl(game), '_blank');
    if (!child) showToast('O navegador bloqueou a nova aba. Libere pop-ups para jogar.');
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
  const forgotPassword = document.getElementById('forgotPassword');
  const recoveryForm = document.getElementById('recoveryForm');
  const recoveryPassword = document.getElementById('recoveryPassword');
  const recoveryPasswordConfirm = document.getElementById('recoveryPasswordConfirm');
  const recoveryError = document.getElementById('recoveryError');
  const cancelRecovery = document.getElementById('cancelRecovery');
  const signOutButton = document.getElementById('signOutButton');
  const accountEmailDisplay = document.getElementById('accountEmailDisplay');
  const accountUserId = document.getElementById('accountUserId');
  const accountProfileAvatar = document.getElementById('accountProfileAvatar');
  const cloudGameSearch = document.getElementById('cloudGameSearch');
  const cloudGamesList = document.getElementById('cloudGamesList');
  const cloudSyncNowButton = document.getElementById('cloudSyncNowButton');
  const cloudGameInfoModal = document.getElementById('cloudGameInfoModal');
  const cloudInfoGameName = document.getElementById('cloudInfoGameName');
  const cloudInfoStatusValue = document.getElementById('cloudInfoStatusValue');
  const cloudInfoLastSyncValue = document.getElementById('cloudInfoLastSyncValue');
  const cloudInfoRevisionValue = document.getElementById('cloudInfoRevisionValue');
  const cloudInfoSaveVersionValue = document.getElementById('cloudInfoSaveVersionValue');
  const cloudInfoClientUpdateValue = document.getElementById('cloudInfoClientUpdateValue');
  const cloudInfoBridgeValue = document.getElementById('cloudInfoBridgeValue');
  const cloudInfoErrorRow = document.getElementById('cloudInfoErrorRow');
  const cloudInfoErrorValue = document.getElementById('cloudInfoErrorValue');

  let activeFilter = 'all';
  let currentLanguage = localStorage.getItem(STORAGE_KEYS.language) || 'pt-BR';
  let currentTheme = localStorage.getItem(STORAGE_KEYS.theme) || 'dark';
  let currentOpenGameId = null;
  let gameDates = {};
  let datesLoaded = false;
  let toastTimer;

  function getCopy() {
    return translations[currentLanguage] || translations['pt-BR'];
  }

  function accountInitial(user) {
    return String(user?.email || 'Z').trim().charAt(0).toUpperCase() || 'Z';
  }

  function setAuthMessage(element, message = '') {
    if (!element) return;
    element.textContent = message;
    element.hidden = !message;
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
    cloudInfoRevisionValue.textContent = cloud.revision == null ? copy.dateUnavailable : `#${cloud.revision}`;
    cloudInfoSaveVersionValue.textContent = String(cloud.saveVersion || config.saveVersion || 1);
    cloudInfoClientUpdateValue.textContent = formatCloudTimestamp(cloud.clientUpdatedAt);
    cloudInfoBridgeValue.textContent = bridgeStatusLabel(cloudInfoGameId);
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
    openAccountButton.classList.toggle('is-online', signedIn);

    if (signedIn) {
      const email = authUser.email || 'ZOINHO Account';
      accountButtonTitle.textContent = email;
      accountButtonSubtitle.textContent = copy.accountCloudOn;
      accountAvatar.textContent = accountInitial(authUser);
      accountEmailDisplay.textContent = email;
      accountUserId.textContent = authUser.id;
      accountProfileAvatar.textContent = accountInitial(authUser);
    } else {
      accountButtonTitle.textContent = copy.accountLogin;
      accountButtonSubtitle.textContent = copy.accountCloudOff;
      accountAvatar.textContent = '?';
    }

    authLoggedOut.hidden = signedIn || recoveryMode;
    authLoggedIn.hidden = !signedIn || recoveryMode;
    authRecovery.hidden = !recoveryMode;
    renderCloudState();
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
    const currentId = authUser?.id || null;
    if (previousId !== currentId) {
      clearCloudQueue();
      resetCloudSessionState();
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
    if (authUser) void probeCloudAccess(authUser.id);
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
    if (!supabaseClient) return setAuthMessage(authError, 'Supabase indisponível.');
    setAuthMessage(authError);

    const email = authEmail.value.trim();
    const password = authPassword.value;
    if (authMode === 'signup' && password !== authPasswordConfirm.value) {
      return setAuthMessage(authError, getCopy().authPasswordsMismatch);
    }

    authSubmit.disabled = true;
    try {
      if (authMode === 'signup') {
        const { data, error } = await supabaseClient.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: `${location.origin}${location.pathname}` }
        });
        if (error) throw error;
        showToast(getCopy().authAccountCreated);
        if (!data?.session) setAuthMode('login');
      } else {
        const { error } = await supabaseClient.auth.signInWithPassword({ email, password });
        if (error) throw error;
        showToast(getCopy().authSignedIn);
      }
      authPassword.value = '';
      authPasswordConfirm.value = '';
    } catch (error) {
      setAuthMessage(authError, error?.message || String(error));
    } finally {
      authSubmit.disabled = false;
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
      redirectTo: `${location.origin}${location.pathname}`
    });
    if (error) setAuthMessage(authError, error.message);
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

  async function signOut() {
    if (!supabaseClient) return;
    const { error } = await supabaseClient.auth.signOut();
    if (error) return showToast(error.message);
    showToast(getCopy().authSignedOut);
    closeModal(accountModal);
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

  function createCard(game) {
    const copy = getCopy();
    const tags = game.tags[currentLanguage] || game.tags['pt-BR'];
    const platform = game.platform?.[currentLanguage] || 'PC';
    return `
      <article class="game-card" data-game="${game.id}" data-categories="${game.categories.join(' ')}">
        <div class="game-art">
          <img class="cover-image" src="${game.image}" alt="Capa de ${game.title}" loading="lazy" />
          <div class="art-topline"><span class="game-number">${String(game.order).padStart(2, '0')}</span><span>${game.kicker}</span></div>
          <span class="art-title">${game.title}</span>
        </div>
        <div class="game-content">
          <div class="game-meta"><span class="platform-badge">${platform}</span><span class="availability"><i></i><span>${copy.available}</span></span></div>
          <h3>${game.title}</h3>
          <p>${game.short[currentLanguage]}</p>
          <div class="genre-list" aria-label="${copy.genres}">${tags.map(tag => `<span>${tag}</span>`).join('')}</div>
          <div class="game-actions">
            <a class="button button-primary button-play" href="${game.url}" target="_blank" rel="noopener noreferrer" data-launch-game="${game.id}">
              <svg class="icon play-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m8 5 11 7-11 7V5Z"/></svg>
              <span>${copy.playNow}</span>
            </a>
            <button class="button button-square game-details" type="button" data-game-id="${game.id}" aria-label="Ver detalhes de ${game.title}">
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
    filterGames();
  }

  function renderFeatured() {
    const featuredGame = games.find(game => game.featured) || games[0];
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

    renderAccount();
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
    if (typeof modal.close === 'function') modal.close();
    else modal.removeAttribute('open');
    if (!settingsModal.open && !gameModal.open && !accountModal.open) document.body.classList.remove('modal-open');
  }

  function openGameDetails(id, keepOpen = false) {
    const game = games.find(item => item.id === id);
    if (!game) return;
    currentOpenGameId = id;
    const copy = getCopy();
    const art = document.getElementById('gameModalArt');
    art.innerHTML = `<img class="cover-image" src="${game.image}" alt="Capa de ${game.title}" /><div class="modal-art-overlay"></div><div class="modal-art-label">${game.kicker}</div>`;
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
  openAccountButton.addEventListener('click', () => openModal(accountModal));
  document.getElementById('closeAccountModal').addEventListener('click', () => closeModal(accountModal));
  accountModal.addEventListener('click', event => {
    if (event.target === accountModal) closeModal(accountModal);
  });
  accountModal.addEventListener('close', () => document.body.classList.remove('modal-open'));
  document.querySelectorAll('[data-auth-mode]').forEach(button => button.addEventListener('click', () => setAuthMode(button.dataset.authMode)));
  authForm.addEventListener('submit', submitAuthForm);
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
    document.body.classList.remove('modal-open');
  });
  document.getElementById('themeQuickToggle').addEventListener('click', () => {
    applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
    showToast(getCopy().settingsSaved);
  });

  themeInputs.forEach(input => input.addEventListener('change', () => {
    applyTheme(input.value);
    showToast(getCopy().settingsSaved);
  }));

  languageSelect.addEventListener('change', () => {
    applyLanguage(languageSelect.value);
    showToast(getCopy().settingsSaved);
  });

  document.getElementById('resetSettings').addEventListener('click', () => {
    applyTheme('dark');
    applyLanguage('pt-BR');
    searchInput.value = '';
    setActiveFilter('all');
    showToast(getCopy().defaultsRestored);
  });

  settingsModal.addEventListener('close', () => document.body.classList.remove('modal-open'));
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
    document.body.classList.remove('modal-open');
  });

  document.addEventListener('keydown', event => {
    if (event.key === '/' && !settingsModal.open && !gameModal.open && !accountModal.open && document.activeElement !== searchInput) {
      event.preventDefault();
      searchInput.focus();
      document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  document.getElementById('currentYear').textContent = new Date().getFullYear();
  renderStats();
  renderFeatured();
  renderCatalog();
  loadGameDates();
  applyTheme(currentTheme, false);
  applyLanguage(currentLanguage, false);
  setActiveFilter('all');
  setAuthMode('login');
  renderAccount();
  void initAuth();
})();
