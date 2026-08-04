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
      aboutTitle: 'Jogos independentes. Ideias sem limite.',
      aboutDescription: 'A ZOINHO GAMES reúne jogos de Z01NH0 e projetos de criadores parceiros em um só catálogo, com foco em experiências marcantes e diversão direta no navegador.',
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
      noData: 'Sem Dados',
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
      aboutTitle: 'Independent games. Limitless ideas.',
      aboutDescription: 'ZOINHO GAMES brings together games by Z01NH0 and projects from partner creators in one catalog, focused on memorable experiences and browser-ready fun.',
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
      id: 'blockbar',
      order: 13,
      title: 'Blockbar',
      url: 'https://gamebloorck.vercel.app',
      image: 'assets/covers/blockbar.png',
      kicker: 'RETRO PLATFORMER',
      creator: 'Klipza',
      datesAvailable: false,
      platform: { 'pt-BR': 'PC / Celular', en: 'PC / Mobile' },
      categories: ['action', 'platformer', 'mobile', 'retro'],
      tags: { 'pt-BR': ['Plataforma 2D', 'Ação', 'Retrô'], en: ['2D Platformer', 'Action', 'Retro'] },
      mode: { 'pt-BR': 'Singleplayer', en: 'Single-player' },
      genres: {
        'pt-BR': 'Plataforma 2D e Action Platformer.',
        en: '2D Platformer and Action Platformer.'
      },
      short: {
        'pt-BR': 'Supere 10 fases retrô, colete moedas e enfrente inimigos e chefes.',
        en: 'Clear 10 retro stages, collect coins and face enemies and bosses.'
      },
      description: {
        'pt-BR': 'Blockbar é um jogo de plataforma em estilo retrô desenvolvido pela Klipza Estudio. Controle o herói em uma jornada de 10 níveis desafiadores, colete moedas, derrote inimigos e enfrente chefes poderosos. Com estética pixelada e controles responsivos, o jogo funciona tanto no computador quanto no celular.',
        en: 'Blockbar is a retro-style platform game developed by Klipza Estudio. Control the hero through 10 challenging levels, collect coins, defeat enemies and face powerful bosses. With pixel-art visuals and responsive controls, the game works on both computers and mobile devices.'
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
    document.getElementById('gameModalPlatform').textContent = game.platform?.[currentLanguage] || 'PC';
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
