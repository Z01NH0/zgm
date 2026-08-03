(() => {
  'use strict';

  const STORAGE_KEYS = {
    theme: 'zoinho-games-theme',
    language: 'zoinho-games-language'
  };

  const translations = {
    'pt-BR': {
      navHome: 'Início',
      navGames: 'Jogos',
      navAbout: 'Sobre',
      settings: 'Configurações',
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
      aboutTitle: 'Jogos autorais. Ideias sem limite.',
      aboutDescription: 'A ZOINHO GAMES reúne projetos independentes criados com foco em mecânicas marcantes, identidade própria e diversão imediata. Este portal é a casa oficial de todos eles.',
      pointOneTitle: 'Feito de forma independente',
      pointOneText: 'Cada projeto nasce de ideias próprias e evolui com novas atualizações.',
      pointTwoTitle: 'Jogue sem instalar',
      pointTwoText: 'Abra no navegador, escolha um jogo e comece a jogar.',
      pointThreeTitle: 'Catálogo em expansão',
      pointThreeText: 'Mais jogos, capas, previews e novidades chegarão ao portal.',
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
      settingsSaved: 'Preferências atualizadas',
      defaultsRestored: 'Configurações restauradas'
    },
    en: {
      navHome: 'Home',
      navGames: 'Games',
      navAbout: 'About',
      settings: 'Settings',
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
      aboutTitle: 'Original games. Limitless ideas.',
      aboutDescription: 'ZOINHO GAMES brings together independent projects focused on memorable mechanics, a distinct identity and immediate fun. This portal is their official home.',
      pointOneTitle: 'Independently made',
      pointOneText: 'Each project starts with original ideas and grows through new updates.',
      pointTwoTitle: 'Play without installing',
      pointTwoText: 'Open your browser, choose a game and start playing.',
      pointThreeTitle: 'An expanding catalog',
      pointThreeText: 'More games, covers, previews and updates are coming to the portal.',
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
    }
  ];

  const root = document.documentElement;
  const settingsModal = document.getElementById('settingsModal');
  const gameModal = document.getElementById('gameModal');
  const languageSelect = document.getElementById('languageSelect');
  const themeInputs = [...document.querySelectorAll('input[name="theme"]')];
  const searchInput = document.getElementById('gameSearch');
  const filterButtons = [...document.querySelectorAll('.filter-chip')];
  const gamesGrid = document.getElementById('gamesGrid');
  const emptyState = document.getElementById('emptyState');
  const toast = document.getElementById('toast');

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
    return `
      <article class="game-card" data-game="${game.id}" data-categories="${game.categories.join(' ')}">
        <div class="game-art">
          <img class="cover-image" src="${game.image}" alt="Capa de ${game.title}" loading="lazy" />
          <div class="art-topline"><span class="game-number">${String(game.order).padStart(2, '0')}</span><span>${game.kicker}</span></div>
          <span class="art-title">${game.title}</span>
        </div>
        <div class="game-content">
          <div class="game-meta"><span class="platform-badge">PC</span><span class="availability"><i></i><span>${copy.available}</span></span></div>
          <h3>${game.title}</h3>
          <p>${game.short[currentLanguage]}</p>
          <div class="genre-list" aria-label="${copy.genres}">${tags.map(tag => `<span>${tag}</span>`).join('')}</div>
          <div class="game-actions">
            <a class="button button-primary button-play" href="${game.url}" target="_blank" rel="noopener noreferrer">
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
    document.getElementById('featuredLink').href = featuredGame.url;
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
    if (!settingsModal.open && !gameModal.open) document.body.classList.remove('modal-open');
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
    document.getElementById('gameModalMode').textContent = game.mode[currentLanguage];
    document.getElementById('gameModalGenres').textContent = game.genres[currentLanguage];
    document.getElementById('gameModalCreator').textContent = game.creator;
    renderGameDates(game.id);
    document.getElementById('gameModalLink').href = game.url;
    if (!keepOpen) openModal(gameModal);
  }

  document.getElementById('openSettings').addEventListener('click', () => openModal(settingsModal));
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
    if (event.key === '/' && !settingsModal.open && !gameModal.open && document.activeElement !== searchInput) {
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
})();
