import resumePt from "./resumes/luis_gustavo_pt_cv.pdf";
import resumeEn from "./resumes/luis_gustavo_en_cv.pdf";
import resumeJp from "./resumes/luis_gustavo_jp_cv.pdf";

export const links = {
  github: "https://github.com/luisgomes2002",
  linkedin: "https://www.linkedin.com/in/luis-gomes-8462b321a/",
};

export const resumes = [
  { code: "PT", file: resumePt },
  { code: "EN", file: resumeEn },
  { code: "JP", file: resumeJp },
];

export const categories = ["work", "personal", "group", "freelance", "study"];

const capitalize = (s) => s[0].toUpperCase() + s.slice(1);
export const catKey = (c) => `cat${capitalize(c)}`;
export const statusKey = (s) => `status${capitalize(s)}`;
export const yearsLabel = ([start, end], t) =>
  end === start ? String(start) : `${start} – ${end ?? t.present}`;

// Prints: cada projeto lê as imagens de src/assets/<assets ou id>/, em ordem
// alfabética. `cover` escolhe qual arquivo abre a lista.
const imageFiles = import.meta.glob("./assets/*/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});

const slidesFor = (folder, cover) => {
  const entries = Object.entries(imageFiles)
    .filter(([path]) => path.split("/")[2] === folder)
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }));
  if (cover) {
    entries.sort(([a], [b]) => (b.endsWith(`/${cover}`) ? 1 : 0) - (a.endsWith(`/${cover}`) ? 1 : 0));
  }
  return entries.map(([, url]) => url);
};

// Ordem da lista = ordem de exibição. `featured` ganha o formato largo.
// `years`: [início, fim]; fim null = em andamento.
const projectList = [
  {
    id: "murasaki",
    title: "Murasaki Languages",
    category: "personal",
    status: "development",
    featured: true,
    years: [2025, null],
    descKey: "pdesc1",
    roleKey: "roleMurasaki",
    cover: "home.png",
    stack: [
      "TypeScript", "React", "Styled Components", "Java", "Spring Boot",
      "MongoDB", "Clean Architecture", "Redis", "AI", "Google Vision",
      "Google Cloud Storage", "Stripe", "Docker", "NGINX", "Prometheus", "Grafana",
    ],
    site: "https://murasakilanguages.com/",
  },
  {
    id: "ecosys",
    org: "ZTHA",
    title: "Ecosys",
    category: "work",
    status: "development",
    featured: true,
    years: [2026, null],
    descKey: "pdesc9",
    roleKey: "roleEcosys",
    stack: [
      "Java", "Spring Boot", "PostgreSQL", "Redis", "Flyway", "JWT", "Bucket4j",
      "MapStruct", "AspectJ", "Docker", "React", "TypeScript",
      "Styled Components", "Recharts", "Leaflet", "React Native", "Expo",
    ],
    private: true,
  },
  {
    id: "sagyou",
    title: "Sagyou",
    category: "personal",
    status: "live",
    featured: true,
    years: [2026, null],
    descKey: "pdesc8",
    roleKey: "roleSolo",
    stack: ["Electron", "React", "TypeScript", "Zustand", "dnd kit", "Tailwind CSS", "Vitest"],
    repo: "https://github.com/luisgomes2002/Sagyou",
  },
  {
    id: "hotel-ellus",
    assets: "hellos",
    cover: "img2.png",
    title: "Hotel Ellus",
    category: "freelance",
    status: "live",
    featured: true,
    years: [2026, 2026],
    descKey: "pdesc7",
    roleKey: "roleFreelance",
    stack: [
      "Electron", "TypeScript", "React", "SQLite", "Radix UI", "Zustand", "Zod",
      "React Hook Form", "TanStack Table", "Vite",
    ],
    private: true,
  },
  {
    id: "caderneta",
    org: "ZTHA",
    title: "Caderneta Digital",
    category: "work",
    status: "development",
    years: [2025, 2026],
    descKey: "pdesc10",
    roleKey: "roleCaderneta",
    stack: [
      "Java", "Spring Boot", "PostgreSQL", "Clean Architecture",
      "Modular Monolith", "React Native", "Expo",
    ],
    private: true,
  },
  {
    id: "ztha-acessos",
    org: "ZTHA",
    title: "ZTHA Acessos",
    category: "work",
    status: "development",
    years: [2026, null],
    descKey: "pdesc11",
    roleKey: "roleAcessos",
    stack: ["TypeScript", "NestJS", "Prisma", "PostgreSQL", "Next.js", "Tailwind CSS", "Docker"],
    private: true,
  },
  {
    id: "ztha-auth",
    org: "ZTHA",
    title: "ZTHA Auth",
    category: "work",
    status: "archived",
    years: [2024, 2025],
    descKey: "pdesc18",
    roleKey: "roleAuth",
    stack: [
      "TypeScript", "React Native", "Expo", "TOTP", "Biometrics", "Node.js",
      "Fastify", "Prisma", "PostgreSQL", "JWT", "Zod",
    ],
    private: true,
  },
  {
    id: "immerse",
    title: "Murasaki Immerse",
    category: "personal",
    status: "development",
    years: [2026, null],
    descKey: "pdesc12",
    roleKey: "roleSolo",
    stack: ["JavaScript", "Chrome Extension (Manifest V3)", "YouTube Data API", "Google OAuth"],
    private: true,
  },
  {
    id: "shokuji",
    title: "Shokuji",
    category: "personal",
    status: "development",
    years: [2026, null],
    descKey: "pdesc15",
    roleKey: "roleSolo",
    stack: ["Java", "Spring Boot", "PostgreSQL", "React", "TypeScript", "PWA", "Mercado Pago", "Docker"],
    repo: "https://github.com/luisgomes2002/SGG",
  },
  {
    id: "dsr",
    title: "DSR Network",
    category: "personal",
    status: "development",
    years: [2026, null],
    descKey: "pdesc14",
    roleKey: "roleSolo",
    stack: ["C++17", "Winsock", "TLS 1.2", "DTLS 1.2", "CMake", "Python"],
    repo: "https://github.com/luisgomes2002/DSR_CWSC",
  },
  {
    id: "lost-heaven",
    title: "Lost Heaven",
    category: "personal",
    status: "development",
    years: [2026, null],
    descKey: "pdesc16",
    roleKey: "roleSolo",
    stack: ["Unity", "C#"],
    private: true,
  },
  {
    id: "aniboard",
    team: 4,
    title: "AniBoard",
    category: "group",
    status: "live",
    years: [2026, null],
    descKey: "pdesc17",
    roleKey: "roleAniboard",
    stack: [
      "TypeScript", "Next.js", "React", "Supabase", "PostgreSQL",
      "Tailwind CSS", "shadcn/ui", "Vitest", "Playwright",
    ],
    site: "https://aniboard-v0.vercel.app",
  },
  {
    id: "trifase",
    title: "Trifase",
    category: "freelance",
    status: "live",
    years: [2024, 2025],
    descKey: "pdesc2",
    roleKey: "roleFreelance",
    stack: ["React", "CSS"],
    site: "https://trifaseenergiasolar.com/",
  },
  {
    id: "tsunagi",
    title: "Tsunagi",
    category: "study",
    status: "paused",
    years: [2025, 2026],
    descKey: "pdesc13",
    roleKey: "roleSolo",
    stack: ["C++17", "TCP Sockets", "Multithreading", "CMake", "JavaScript", "Python", "Java"],
    repo: "https://github.com/luisgomes2002/Tsunagi",
  },
  {
    id: "murasaki-prototype",
    title: "Murasaki Languages Prototype",
    category: "study",
    status: "archived",
    years: [2023, 2025],
    descKey: "pdesc3",
    roleKey: "roleSolo",
    stack: ["JavaScript", "React", "Styled Components", "Node.js", "Express", "MongoDB"],
    repo: "https://github.com/luisgomes2002/Murasaki-Languages-Prototype",
  },
  {
    id: "health-manager",
    title: "Health Manager",
    category: "study",
    status: "development",
    years: [2026, 2026],
    descKey: "pdesc4",
    stack: ["Java", "Spring Boot", "PostgreSQL", "Redis", "JPA", "Flyway", "MapStruct"],
    repo: "https://github.com/luisgomes2002/Health-Manager-Backend",
  },
  {
    id: "rabbitmq",
    title: "Microservices Email RabbitMQ",
    category: "study",
    status: "study",
    years: [2025, 2025],
    descKey: "pdesc5",
    stack: ["Java", "Spring Boot", "PostgreSQL", "RabbitMQ"],
    repo: "https://github.com/luisgomes2002/Microsservices-Email-RabbitMQ",
  },
];

export const projects = projectList.map((p) => ({
  ...p,
  slides: slidesFor(p.assets ?? p.id, p.cover),
}));

export const skillGroups = [
  {
    key: "skBackend",
    items: [
      ["devicon-java-plain", "Java"],
      ["devicon-spring-original", "Spring Boot"],
      ["devicon-nodejs-plain", "Node.js"],
      ["devicon-nestjs-original", "NestJS"],
      ["devicon-express-original", "Express"],
      ["devicon-prisma-original", "Prisma"],
    ],
  },
  {
    key: "skFrontend",
    items: [
      ["devicon-typescript-plain", "TypeScript"],
      ["devicon-javascript-plain", "JavaScript"],
      ["devicon-react-original", "React / React Native"],
      ["devicon-nextjs-plain", "Next.js"],
      ["devicon-electron-original", "Electron"],
    ],
  },
  {
    key: "skData",
    items: [
      ["devicon-postgresql-plain", "PostgreSQL"],
      ["devicon-mysql-original", "MySQL"],
      ["devicon-mongodb-plain", "MongoDB"],
      ["devicon-redis-plain", "Redis"],
    ],
  },
  {
    key: "skInfra",
    items: [
      ["devicon-docker-plain", "Docker"],
      ["devicon-nginx-original", "NGINX"],
      ["devicon-git-plain", "Git"],
      ["devicon-cplusplus-plain", "C++"],
      ["devicon-csharp-plain", "C#"],
      ["devicon-unity-plain", "Unity"],
    ],
  },
];

export const i18nJson = {
  pt: {
    teamOf: "{n} pessoas",
    catWorkDesc: "Sistemas que desenvolvo na ZTHA, onde trabalho.",
    catPersonalDesc: "Ideias minhas, tocadas do começo ao fim.",
    catGroupDesc: "Feitos em equipe com amigos.",
    catFreelanceDesc: "Entregues para clientes.",
    catStudyDesc: "Feitos para aprender uma tecnologia a fundo.",
    badge: "Luis Gomes · desenvolvedor fullstack",
    heroPre: "Construo sistemas que continuam ",
    heroHl: "fáceis de mudar",
    heroPost: ".",
    ctaProjects: "Ver projetos",
    noteHero: "{n} projetos, do trabalho ao hobby",
    projectsPre: "Coisas que eu ",
    projectsHl: "construí",
    projectsPost: "",
    stackPre: "Com o que eu ",
    stackHl: "trabalho",
    stackPost: "",
    contactTitle: "Quer conversar sobre algum projeto?",
    noteContact: "o jeito mais rápido de falar comigo",
    projectLabel: "Projeto",
    role: "Desenvolvedor fullstack, focado em backend e arquitetura de software.",
    desc: "Gosto de sistemas bem desenhados: APIs consistentes, módulos com fronteiras claras e código que continua fácil de mudar depois de crescer. Trabalho com Java e Spring no backend e React no front, e estudo C++ e redes por diversão.",
    resume: "Currículo",
    projectsTitle: "Projetos",
    stackTitle: "Stack",
    filterAll: "Todos",
    present: "hoje",
    skBackend: "Backend",
    skFrontend: "Frontend e apps",
    skData: "Bancos de dados",
    skInfra: "Infra e outros",
    navProjects: "Projetos",
    navStack: "Stack",
    visitSite: "Ver site",
    viewCode: "Código",
    privateRepo: "Código privado",
    close: "Fechar",
    prevImage: "Imagem anterior",
    nextImage: "Próxima imagem",
    openGallery: "Abrir imagens de",
    imagesSoon: "Prints em breve",
    statusLive: "No ar",
    statusDevelopment: "Em desenvolvimento",
    statusPaused: "Pausado",
    statusArchived: "Arquivado",
    statusStudy: "Estudo",
    catWork: "Profissional",
    catPersonal: "Pessoal",
    catGroup: "Em grupo",
    catFreelance: "Freelancer",
    catStudy: "Estudo",
    roleSolo: "Projeto individual, do planejamento à publicação.",
    roleFreelance: "Freelance individual, do desenvolvimento à entrega.",
    roleMurasaki:
      "Projeto individual: front-end em React, API em Spring Boot, infraestrutura e monitoramento.",
    roleEcosys: "Principal desenvolvedor da API, da aplicação web e do app mobile.",
    roleCaderneta: "Desenvolvi a API em Spring Boot e contribuí com o app mobile.",
    roleAcessos: "Desenvolvi a API e o front-end web.",
    roleAuth: "Desenvolvi o app mobile e contribuí com a API.",
    roleAniboard: "Um dos quatro desenvolvedores do projeto.",
    pdesc1: "Plataforma de aprendizado de idiomas com aulas, cursos, flashcards e leitura com OCR.",
    pdesc2: "Site para empresa de energia solar.",
    pdesc3: "Versão inicial da plataforma Murasaki.",
    pdesc4: "Plataforma de gestão para profissionais da saúde.",
    pdesc5: "Projeto de estudo sobre microsserviços com RabbitMQ.",
    pdesc7:
      "Sistema desktop de gestão hoteleira com módulos de reservas, quartos, hóspedes, relatórios e auditoria.",
    pdesc8:
      "Kanban pessoal offline com hábitos, metas, lista de compras, canvas e importação via IA.",
    pdesc9:
      "Plataforma de gestão de cooperativas agrícolas: web administrativa, API e app mobile para produtores venderem seus produtos.",
    pdesc10:
      "Fintech de cooperativa de crédito digital com contas, empréstimos, investimentos e cartões, em monólito modular com Clean Architecture.",
    pdesc11:
      "Portal interno para pedir, aprovar e liberar acesso a credenciais e repositórios, com revogação total no desligamento e histórico auditável.",
    pdesc12:
      "Extensão do Chrome que registra o tempo de imersão em idiomas assistindo YouTube, integrada ao Murasaki Languages.",
    pdesc13:
      "Servidor de filas de mensagens TCP leve, com TTL, notificações de expiração e bibliotecas cliente em JS, Python e Java.",
    pdesc14:
      "Camada de rede para um mod co-op de Dark Souls Remastered: salas protegidas, TLS/DTLS, pinning de certificado e rate limiting.",
    pdesc15:
      "SaaS de gestão gastronômica com pedidos por QR Code, PDV offline, estoque e arquitetura orientada a eventos com Transactional Outbox.",
    pdesc16:
      "Jogo PvPvE de fantasia em primeira pessoa com exploração, combate, loot, progressão de habilidades e chefe final.",
    pdesc17:
      "Mural compartilhado do grupo do Discord para registrar, avaliar e recomendar animes, mangás e manhwas.",
    pdesc18:
      "Autenticação centralizada do ecossistema ZTHA: app mobile com 2FA (TOTP), biometria e leitura de QR Code, e API com JWT e verificação de e-mail.",
  },
  en: {
    teamOf: "{n} people",
    catWorkDesc: "Systems I build at ZTHA, where I work.",
    catPersonalDesc: "My own ideas, built end to end.",
    catGroupDesc: "Built as a team with friends.",
    catFreelanceDesc: "Delivered to clients.",
    catStudyDesc: "Built to learn a technology in depth.",
    badge: "Luis Gomes · fullstack developer",
    heroPre: "I build systems that stay ",
    heroHl: "easy to change",
    heroPost: ".",
    ctaProjects: "View projects",
    noteHero: "{n} projects, from work to hobby",
    projectsPre: "Things I've ",
    projectsHl: "built",
    projectsPost: "",
    stackPre: "What I ",
    stackHl: "work with",
    stackPost: "",
    contactTitle: "Want to talk about a project?",
    noteContact: "the fastest way to reach me",
    projectLabel: "Project",
    role: "Fullstack developer focused on backend and software architecture.",
    desc: "I like well-designed systems: consistent APIs, modules with clear boundaries and code that stays easy to change as it grows. I work with Java and Spring on the backend and React on the front end, and study C++ and networking for fun.",
    resume: "Resume",
    projectsTitle: "Projects",
    stackTitle: "Stack",
    filterAll: "All",
    present: "present",
    skBackend: "Backend",
    skFrontend: "Frontend and apps",
    skData: "Databases",
    skInfra: "Infra and more",
    navProjects: "Projects",
    navStack: "Stack",
    visitSite: "Visit site",
    viewCode: "Code",
    privateRepo: "Private code",
    close: "Close",
    prevImage: "Previous image",
    nextImage: "Next image",
    openGallery: "Open images of",
    imagesSoon: "Screenshots coming soon",
    statusLive: "Live",
    statusDevelopment: "In development",
    statusPaused: "Paused",
    statusArchived: "Archived",
    statusStudy: "Study",
    catWork: "Professional",
    catPersonal: "Personal",
    catGroup: "Group",
    catFreelance: "Freelance",
    catStudy: "Study",
    roleSolo: "Solo project, from planning to release.",
    roleFreelance: "Solo freelance work, from development to delivery.",
    roleMurasaki:
      "Solo project: React front end, Spring Boot API, infrastructure and monitoring.",
    roleEcosys: "Lead developer of the API, the web app and the mobile app.",
    roleCaderneta: "Built the Spring Boot API and contributed to the mobile app.",
    roleAcessos: "Built the API and the web front end.",
    roleAuth: "Built the mobile app and contributed to the API.",
    roleAniboard: "One of the project's four developers.",
    pdesc1: "Language learning platform with lessons, courses, flashcards and OCR-assisted reading.",
    pdesc2: "Website for a solar energy company.",
    pdesc3: "Initial version of the Murasaki platform.",
    pdesc4: "Management platform for healthcare professionals.",
    pdesc5: "Study project on microservices with RabbitMQ.",
    pdesc7:
      "Desktop hotel management system with modules for reservations, rooms, guests, reports and audit.",
    pdesc8:
      "Offline personal kanban with habits, goals, shopping list, canvas and AI-assisted import.",
    pdesc9:
      "Agricultural cooperative management platform: admin web app, API and mobile app for farmers to sell their products.",
    pdesc10:
      "Digital credit union fintech with accounts, loans, investments and cards, built as a modular monolith with Clean Architecture.",
    pdesc11:
      "Internal portal to request, approve and grant access to credentials and repositories, with full revocation on offboarding and an audit trail.",
    pdesc12:
      "Chrome extension that tracks language immersion time while watching YouTube, integrated with Murasaki Languages.",
    pdesc13:
      "Lightweight TCP message queue server with TTL, expiration notifications and client libraries in JS, Python and Java.",
    pdesc14:
      "Networking layer for a Dark Souls Remastered co-op mod: protected rooms, TLS/DTLS, certificate pinning and rate limiting.",
    pdesc15:
      "Restaurant management SaaS with QR Code ordering, offline POS, inventory and event-driven architecture with Transactional Outbox.",
    pdesc16:
      "First-person fantasy PvPvE game with exploration, combat, loot, skill progression and a final boss.",
    pdesc17:
      "Shared board for our Discord group to log, rate and recommend anime, manga and manhwa.",
    pdesc18:
      "Centralized authentication for the ZTHA ecosystem: mobile app with 2FA (TOTP), biometrics and QR Code scanning, plus an API with JWT and email verification.",
  },
  jp: {
    teamOf: "{n}人",
    catWorkDesc: "勤務先のZTHAで開発しているシステム。",
    catPersonalDesc: "自分のアイデアを最初から最後まで形にしたもの。",
    catGroupDesc: "友人とチームで開発したもの。",
    catFreelanceDesc: "クライアントに納品したもの。",
    catStudyDesc: "技術を深く学ぶためにつくったもの。",
    badge: "Luis Gomes · フルスタック開発者",
    heroPre: "",
    heroHl: "変えやすさ",
    heroPost: "が続くシステムをつくっています。",
    ctaProjects: "プロジェクトを見る",
    noteHero: "仕事から趣味まで{n}件",
    projectsPre: "",
    projectsHl: "つくったもの",
    projectsPost: "",
    stackPre: "",
    stackHl: "使っている技術",
    stackPost: "",
    contactTitle: "プロジェクトについて話しませんか？",
    noteContact: "いちばん早い連絡方法",
    projectLabel: "プロジェクト",
    role: "バックエンドとソフトウェアアーキテクチャを得意とするフルスタック開発者。",
    desc: "一貫性のあるAPI、境界の明確なモジュール、成長しても変更しやすいコードなど、よく設計されたシステムづくりが好きです。バックエンドはJavaとSpring、フロントエンドはReactを使い、趣味でC++とネットワークを学んでいます。",
    resume: "履歴書",
    projectsTitle: "プロジェクト",
    stackTitle: "スキル",
    filterAll: "すべて",
    present: "現在",
    skBackend: "バックエンド",
    skFrontend: "フロントエンドとアプリ",
    skData: "データベース",
    skInfra: "インフラ・その他",
    navProjects: "プロジェクト",
    navStack: "スキル",
    visitSite: "サイトを見る",
    viewCode: "コード",
    privateRepo: "非公開コード",
    close: "閉じる",
    prevImage: "前の画像",
    nextImage: "次の画像",
    openGallery: "画像を開く：",
    imagesSoon: "スクリーンショット準備中",
    statusLive: "公開中",
    statusDevelopment: "開発中",
    statusPaused: "一時停止",
    statusArchived: "アーカイブ済み",
    statusStudy: "学習",
    catWork: "業務",
    catPersonal: "個人",
    catGroup: "グループ",
    catFreelance: "フリーランス",
    catStudy: "学習",
    roleSolo: "個人プロジェクト。企画から公開まで担当。",
    roleFreelance: "個人でのフリーランス案件。開発から納品まで担当。",
    roleMurasaki:
      "個人プロジェクト：ReactのフロントエンドとSpring BootのAPI、インフラ、監視まで担当。",
    roleEcosys: "API、Webアプリ、モバイルアプリの主担当開発者。",
    roleCaderneta: "Spring BootのAPIを開発し、モバイルアプリにも参加。",
    roleAcessos: "APIとWebフロントエンドを開発。",
    roleAuth: "モバイルアプリを開発し、APIにも参加。",
    roleAniboard: "4人の開発メンバーの1人。",
    pdesc1: "レッスン、コース、フラッシュカード、OCRによる読解機能を備えた語学学習プラットフォーム。",
    pdesc2: "太陽光発電会社のウェブサイト。",
    pdesc3: "Murasakiプラットフォームの初期バージョン。",
    pdesc4: "医療専門職向けの管理プラットフォーム。",
    pdesc5: "RabbitMQを使ったマイクロサービスの学習プロジェクト。",
    pdesc7:
      "予約・客室・宿泊客・レポート・監査モジュールを備えたデスクトップホテル管理システム。",
    pdesc8:
      "習慣、目標、買い物リスト、キャンバス、AIによるインポート機能を備えたオフライン個人用かんばん。",
    pdesc9:
      "農業協同組合の管理プラットフォーム：管理用Webアプリ、API、生産者が商品を販売するためのモバイルアプリ。",
    pdesc10:
      "口座・ローン・投資・カードを提供するデジタル信用組合向けフィンテック。クリーンアーキテクチャによるモジュラーモノリス。",
    pdesc11:
      "認証情報やリポジトリへのアクセスを申請・承認・付与する社内ポータル。退職時の一括取り消しと監査履歴付き。",
    pdesc12:
      "YouTube視聴中の語学イマージョン時間を記録するChrome拡張機能。Murasaki Languagesと連携。",
    pdesc13:
      "TTL、期限切れ通知、JS・Python・Javaのクライアントライブラリを備えた軽量TCPメッセージキューサーバー。",
    pdesc14:
      "Dark Souls Remasteredの協力プレイMOD向けネットワーク層：保護されたルーム、TLS/DTLS、証明書ピンニング、レート制限。",
    pdesc15:
      "QRコード注文、オフラインPOS、在庫管理、Transactional Outboxによるイベント駆動アーキテクチャを備えた飲食店向けSaaS。",
    pdesc16:
      "探索、戦闘、ルート、スキル成長、ラスボスを備えた一人称ファンタジーPvPvEゲーム。",
    pdesc17:
      "Discordグループでアニメ・漫画・マンファを記録、評価、おすすめし合う共有ボード。",
    pdesc18:
      "ZTHAエコシステムの統合認証：2FA（TOTP）、生体認証、QRコード読み取りを備えたモバイルアプリと、JWT・メール認証対応のAPI。",
  },
};
