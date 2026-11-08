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

// Onde o projeto roda; cada uma vira uma tag no card.
export const platformKey = (p) => `plat${p[0].toUpperCase()}${p.slice(1)}`;
export const platforms = ["web", "desktop", "mobile", "extension"];

// Título traduzível para projetos ainda sem nome próprio.
export const projectTitle = (p, t) => (p.titleKey ? t[p.titleKey] : p.title);

const capitalize = (s) => s[0].toUpperCase() + s.slice(1);
export const catKey = (c) => `cat${capitalize(c)}`;
export const statusKey = (s) => `status${capitalize(s)}`;
export const yearsLabel = ([start, end], t) =>
  end === start ? String(start) : `${start} – ${end ?? t.present}`;

// Prints: cada projeto lê as imagens de src/assets/<assets ou id>/, em ordem
// alfabética. `cover` escolhe qual arquivo abre a lista.
const imageFiles = import.meta.glob("./assets/*/*.{png,jpg,jpeg,webp,avif}", {
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
    platforms: ["web", "extension"],
    title: "Murasaki Languages",
    category: "personal",
    status: "development",
    featured: true,
    years: [2025, null],
    descKey: "pdesc1",
    roleKey: "roleMurasaki",
    cover: "home.png",
    tech: [
      "TypeScript", "Java", "React", "Spring Boot", "Spring AI", "MongoDB", "Redis",
      "Docker", "Chrome Extension",
    ],
    stack: [
      "Styled Components", "Clean Architecture", "Google Vision", "Google Cloud Storage",
      "Stripe", "NGINX", "Prometheus", "Grafana", "Testcontainers", "Manifest V3",
      "YouTube Data API", "Google OAuth",
    ],
    site: "https://murasakilanguages.com/",
  },
  {
    id: "confidencial",
    platforms: ["web", "mobile"],
    org: "ZTHA",
    titleKey: "titleConfidential",
    category: "work",
    status: "development",
    featured: true,
    years: [2026, null],
    descKey: "pdesc9",
    roleKey: "roleConfidential",
    tech: [
      "Java", "TypeScript", "Spring Boot", "React", "React Native", "Expo", "PostgreSQL",
      "MongoDB", "Kafka", "ClickHouse", "Redis", "SQLite", "Docker",
    ],
    stack: [
      "CQRS", "Event Sourcing", "Debezium", "Flyway", "JWT", "Bucket4j", "MapStruct", "AspectJ", "Testcontainers",
      "Styled Components", "Recharts", "Leaflet", "Vitest", "Playwright", "Jest",
    ],
    private: true,
  },
  {
    id: "sagyou",
    platforms: ["desktop", "mobile"],
    title: "Sagyou",
    category: "personal",
    status: "live",
    featured: true,
    years: [2026, null],
    descKey: "pdesc8",
    roleKey: "roleSolo",
    tech: [
      "TypeScript", "Electron", "React", "React Native", "Expo", "SQLite",
      "Cloudflare Workers", "Tailwind CSS",
    ],
    stack: ["Zustand", "dnd kit", "D3", "xterm.js", "MCP", "Vitest", "Jest"],
    repo: "https://github.com/luisgomes2002/Sagyou",
  },
  {
    id: "hotel-ellus",
    platforms: ["desktop"],
    assets: "hellos",
    title: "Hotel Ellus",
    category: "freelance",
    status: "live",
    featured: true,
    years: [2026, 2026],
    descKey: "pdesc7",
    roleKey: "roleFreelance",
    tech: ["TypeScript", "Electron", "React", "SQLite"],
    stack: [
      "Radix UI", "Styled Components", "Zustand", "Zod", "React Hook Form",
      "TanStack Table", "Vite", "Vitest",
    ],
    private: true,
  },
  {
    id: "caderneta",
    platforms: ["web", "mobile"],
    org: "ZTHA",
    title: "Caderneta Digital",
    category: "work",
    status: "archived",
    years: [2025, 2026],
    descKey: "pdesc10",
    roleKey: "roleCaderneta",
    tech: [
      "Java", "TypeScript", "Spring Boot", "React Native", "Expo", "PostgreSQL", "Redis",
    ],
    stack: [
      "Clean Architecture", "Modular Monolith", "Flyway", "JWT", "MapStruct",
      "Testcontainers", "NativeWind",
    ],
    private: true,
  },
  {
    id: "ztha-acessos",
    platforms: ["web"],
    org: "ZTHA",
    title: "ZTHA Acessos",
    category: "work",
    status: "development",
    years: [2026, null],
    descKey: "pdesc11",
    roleKey: "roleAcessos",
    tech: ["TypeScript", "Express", "Next.js", "Prisma", "PostgreSQL", "Tailwind CSS", "Docker"],
    stack: ["Passport", "JWT", "Jest"],
    private: true,
  },
  {
    id: "ztha-auth",
    platforms: ["mobile"],
    org: "ZTHA",
    title: "ZTHA Auth",
    category: "work",
    status: "archived",
    years: [2024, 2025],
    descKey: "pdesc18",
    roleKey: "roleAuth",
    tech: [
      "TypeScript", "React Native", "Expo", "Node.js", "Fastify", "Prisma", "PostgreSQL",
    ],
    stack: ["TOTP", "Biometrics", "JWT", "Zod"],
    private: true,
  },
  {
    id: "shokuji",
    platforms: ["web"],
    title: "Shokuji",
    category: "study",
    status: "development",
    years: [2026, null],
    descKey: "pdesc15",
    roleKey: "roleSolo",
    tech: [
      "Java", "TypeScript", "Spring Boot", "React", "PostgreSQL", "Redis", "Kafka",
      "gRPC", "Docker",
    ],
    stack: [
      "Microservices", "Transactional Outbox", "WebSocket", "Flyway", "Traefik",
      "Testcontainers", "PWA", "Mercado Pago",
    ],
    repo: "https://github.com/luisgomes2002/SGG",
  },
  {
    id: "dsr",
    platforms: ["desktop"],
    title: "DSR Network",
    category: "personal",
    status: "development",
    years: [2026, null],
    descKey: "pdesc14",
    roleKey: "roleSolo",
    tech: ["C++", "Python", "OpenSSL", "CMake"],
    stack: ["C++17", "Winsock", "TLS 1.2", "DTLS 1.2"],
    repo: "https://github.com/luisgomes2002/DSR_CWSC",
  },
  {
    id: "lost-heaven",
    platforms: ["desktop"],
    org: "Lost Heaven",
    title: "Untitled game",
    titleKey: "titleLostHeaven",
    category: "personal",
    status: "development",
    years: [2026, null],
    descKey: "pdesc16",
    roleKey: "roleLostHeaven",
    tech: ["C#", "Unity"],
    stack: [],
    private: true,
  },
  {
    id: "aniboard",
    platforms: ["web"],
    team: 4,
    title: "AniBoard",
    category: "group",
    status: "live",
    years: [2026, null],
    descKey: "pdesc17",
    roleKey: "roleAniboard",
    tech: ["TypeScript", "Next.js", "React", "Supabase", "PostgreSQL", "Tailwind CSS"],
    stack: ["shadcn/ui", "Vitest", "Playwright"],
    site: "https://aniboard-v0.vercel.app",
  },
  {
    id: "trifase",
    platforms: ["web"],
    title: "Trifase",
    category: "freelance",
    status: "live",
    years: [2024, 2025],
    descKey: "pdesc2",
    roleKey: "roleFreelance",
    tech: ["JavaScript", "React"],
    stack: ["Vite", "CSS"],
    site: "https://trifaseenergiasolar.com/",
  },
  {
    id: "tsunagi",
    title: "Tsunagi",
    category: "study",
    status: "archived",
    years: [2025, 2026],
    descKey: "pdesc13",
    roleKey: "roleSolo",
    tech: ["C++", "Java", "JavaScript", "Python", "CMake"],
    stack: ["C++17", "TCP Sockets", "Multithreading"],
    repo: "https://github.com/luisgomes2002/Tsunagi",
  },
  {
    id: "computer8bit",
    title: "Computer 8-bit",
    category: "study",
    status: "archived",
    years: [2024, 2024],
    descKey: "pdesc19",
    roleKey: "roleSolo",
    tech: ["Logisim"],
    stack: ["Digital Logic", "Computer Architecture", "ALU", "Registers", "RAM"],
    repo: "https://github.com/luisgomes2002/Computer-8bit",
  },
  {
    id: "murasaki-prototype",
    platforms: ["web"],
    title: "Murasaki Languages Prototype",
    category: "study",
    status: "archived",
    years: [2023, 2025],
    descKey: "pdesc3",
    roleKey: "roleSolo",
    tech: ["JavaScript", "React", "Node.js", "Express", "MongoDB"],
    stack: ["Styled Components", "Socket.IO", "Passport", "JWT"],
    repo: "https://github.com/luisgomes2002/Murasaki-Languages-Prototype",
  },
  {
    id: "rabbitmq",
    title: "Microservices Email RabbitMQ",
    category: "study",
    status: "study",
    years: [2025, 2025],
    descKey: "pdesc5",
    tech: ["Java", "Spring Boot", "RabbitMQ", "PostgreSQL"],
    stack: ["Microservices", "Flyway", "JPA", "Springdoc OpenAPI"],
    repo: "https://github.com/luisgomes2002/Microsservices-Email-RabbitMQ",
  },
];

export const projects = projectList.map((p) => ({
  ...p,
  slides: slidesFor(p.assets ?? p.id, p.cover),
}));

// Linguagens aparecem primeiro e com mais peso na linha de stack.
const LANGUAGES = ["TypeScript", "JavaScript", "Java", "C++", "C#", "Python"];
export const isLanguage = (name) => LANGUAGES.includes(name);

// Opções do filtro, das mais usadas para as menos usadas: todas as linguagens
// e as demais tecnologias que aparecem em pelo menos dois projetos.
const usage = projects
  .flatMap((p) => p.tech)
  .reduce((acc, n) => ({ ...acc, [n]: (acc[n] ?? 0) + 1 }), {});
const byUsage = (names) =>
  names.sort((a, b) => usage[b] - usage[a] || a.localeCompare(b));
export const techUsage = usage;
export const languageOptions = byUsage(Object.keys(usage).filter(isLanguage));
export const techOptions = byUsage(
  Object.keys(usage).filter((n) => !isLanguage(n) && usage[n] >= 2),
);

export const skillGroups = [
  {
    key: "skBackend",
    items: [
      ["devicon-java-plain", "Java"],
      ["devicon-spring-original", "Spring Boot"],
      ["devicon-nodejs-plain", "Node.js"],
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
    heroPre: "Transformo problemas reais em ",
    heroHl: "software em produção",
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
    desc: "Sou desenvolvedor fullstack com foco em backend. Na ZTHA trabalho com Java e Spring, e no front uso React e TypeScript, da web ao mobile e ao desktop. Fora do trabalho, crio meus próprios produtos, como o Murasaki Languages.",
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
    statusArchived: "Arquivado",
    statusStudy: "Estudo",
    catWork: "Profissional",
    catPersonal: "Pessoal",
    catGroup: "Em grupo",
    catFreelance: "Freelancer",
    catStudy: "Estudo",
    platWeb: "Web",
    platDesktop: "Desktop",
    platMobile: "Mobile",
    platExtension: "Extensão do Chrome",
    platformsLabel: "Plataformas",
    filterPlatform: "Plataforma",
    filterAny: "Todas",
    filterClear: "Limpar",
    filterTech: "Tecnologia",
    filterLanguage: "Linguagem",
    filterCategory: "Tipo",
    noResults: "Nenhum projeto com essa combinação de filtros.",
    titleLostHeaven: "Jogo sem nome",
    titleConfidential: "Projeto confidencial",
    roleLostHeaven: "Projeto individual: primeiro jogo da Lost Heaven, publisher independente que estou criando.",
    roleSolo: "Projeto individual, do planejamento à publicação.",
    roleFreelance: "Freelance individual, do desenvolvimento à entrega.",
    roleMurasaki:
      "Projeto individual: front-end em React, API em Spring Boot, extensão do Chrome, infraestrutura e monitoramento.",
    roleConfidential: "Principal desenvolvedor da API, da aplicação web e do app mobile.",
    roleCaderneta: "Desenvolvi a API em Spring Boot e contribuí com o app mobile.",
    roleAcessos: "Desenvolvi a API e o front-end web.",
    roleAuth: "Desenvolvi o app mobile e contribuí com a API.",
    roleAniboard: "Um dos quatro desenvolvedores do projeto.",
    pdesc1: "Plataforma de aprendizado de idiomas com aulas, cursos, flashcards e leitura com OCR, mais uma extensão do Chrome que registra o tempo de imersão assistindo YouTube.",
    pdesc2: "Site para empresa de energia solar.",
    pdesc3: "Versão inicial da plataforma Murasaki.",
    pdesc5: "Projeto de estudo sobre microsserviços com RabbitMQ.",
    pdesc7:
      "Sistema desktop de gestão hoteleira com módulos de reservas, quartos, hóspedes, relatórios e auditoria.",
    pdesc8:
      "Espaço pessoal com tarefas, hábitos, metas e finanças, com app desktop e mobile sincronizados. Roda agentes de código (Claude Code, Codex) em worktrees isoladas, com acesso aos dados via MCP e memória persistente entre sessões.",
    pdesc9:
      "Projeto sob sigilo. A API usa CQRS com event sourcing: o Postgres guarda os eventos, o Debezium os publica no Kafka e um worker monta as telas de leitura no MongoDB, enquanto um job noturno carrega o ClickHouse para as análises. Web administrativa e app mobile que funciona offline.",
    pdesc10:
      "Fintech de cooperativa de crédito digital com contas, empréstimos, investimentos e cartões, em monólito modular com Clean Architecture.",
    pdesc11:
      "Portal interno para pedir, aprovar e liberar acesso a credenciais e repositórios, com revogação total no desligamento e histórico auditável.",
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
    pdesc19:
      "Computador de 8 bits que montei do zero no Logisim, a partir de portas lógicas: ALU com soma e subtração, registradores, RAM e CPU.",
  },
  en: {
    teamOf: "{n} people",
    catWorkDesc: "Systems I build at ZTHA, where I work.",
    catPersonalDesc: "My own ideas, built end to end.",
    catGroupDesc: "Built as a team with friends.",
    catFreelanceDesc: "Delivered to clients.",
    catStudyDesc: "Built to learn a technology in depth.",
    badge: "Luis Gomes · fullstack developer",
    heroPre: "I turn real problems into ",
    heroHl: "software in production",
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
    desc: "I'm a fullstack developer focused on the backend. At ZTHA I work with Java and Spring, and on the front end I use React and TypeScript across web, mobile and desktop. Outside work I build my own products, like Murasaki Languages.",
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
    statusArchived: "Archived",
    statusStudy: "Study",
    catWork: "Professional",
    catPersonal: "Personal",
    catGroup: "Group",
    catFreelance: "Freelance",
    catStudy: "Study",
    platWeb: "Web",
    platDesktop: "Desktop",
    platMobile: "Mobile",
    platExtension: "Chrome extension",
    platformsLabel: "Platforms",
    filterPlatform: "Platform",
    filterAny: "Any",
    filterClear: "Clear",
    filterTech: "Technology",
    filterLanguage: "Language",
    filterCategory: "Type",
    noResults: "No projects match this combination of filters.",
    titleLostHeaven: "Untitled game",
    titleConfidential: "Confidential project",
    roleLostHeaven: "Solo project: the first game from Lost Heaven, the indie publisher I'm starting.",
    roleSolo: "Solo project, from planning to release.",
    roleFreelance: "Solo freelance work, from development to delivery.",
    roleMurasaki:
      "Solo project: React front end, Spring Boot API, Chrome extension, infrastructure and monitoring.",
    roleConfidential: "Lead developer of the API, the web app and the mobile app.",
    roleCaderneta: "Built the Spring Boot API and contributed to the mobile app.",
    roleAcessos: "Built the API and the web front end.",
    roleAuth: "Built the mobile app and contributed to the API.",
    roleAniboard: "One of the project's four developers.",
    pdesc1: "Language learning platform with lessons, courses, flashcards and OCR-assisted reading, plus a Chrome extension that tracks immersion time while watching YouTube.",
    pdesc2: "Website for a solar energy company.",
    pdesc3: "Initial version of the Murasaki platform.",
    pdesc5: "Study project on microservices with RabbitMQ.",
    pdesc7:
      "Desktop hotel management system with modules for reservations, rooms, guests, reports and audit.",
    pdesc8:
      "Personal workspace for tasks, habits, goals and finances, with synced desktop and mobile apps. Runs coding agents (Claude Code, Codex) in isolated worktrees, with data access via MCP and persistent memory across sessions.",
    pdesc9:
      "Under NDA. The API uses CQRS with event sourcing: Postgres stores the events, Debezium publishes them to Kafka and a worker builds the read views in MongoDB, while a nightly job loads ClickHouse for analytics. Admin web app and an offline-capable mobile app.",
    pdesc10:
      "Digital credit union fintech with accounts, loans, investments and cards, built as a modular monolith with Clean Architecture.",
    pdesc11:
      "Internal portal to request, approve and grant access to credentials and repositories, with full revocation on offboarding and an audit trail.",
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
    pdesc19:
      "An 8-bit computer I built from scratch in Logisim, starting from logic gates: an ALU with add and subtract, registers, RAM and a CPU.",
  },
  jp: {
    teamOf: "{n}人",
    catWorkDesc: "勤務先のZTHAで開発しているシステム。",
    catPersonalDesc: "自分のアイデアを最初から最後まで形にしたもの。",
    catGroupDesc: "友人とチームで開発したもの。",
    catFreelanceDesc: "クライアントに納品したもの。",
    catStudyDesc: "技術を深く学ぶためにつくったもの。",
    badge: "Luis Gomes · フルスタック開発者",
    heroPre: "現実の課題を",
    heroHl: "本番で動くソフトウェア",
    heroPost: "に変えています。",
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
    desc: "バックエンドを得意とするフルスタック開発者です。ZTHAではJavaとSpringで開発し、フロントエンドではReactとTypeScriptでWeb・モバイル・デスクトップアプリをつくっています。仕事以外ではMurasaki Languagesなど自分のプロダクトを開発しています。",
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
    statusArchived: "アーカイブ済み",
    statusStudy: "学習",
    catWork: "業務",
    catPersonal: "個人",
    catGroup: "グループ",
    catFreelance: "フリーランス",
    catStudy: "学習",
    platWeb: "Web",
    platDesktop: "デスクトップ",
    platMobile: "モバイル",
    platExtension: "Chrome拡張機能",
    platformsLabel: "プラットフォーム",
    filterPlatform: "プラットフォーム",
    filterAny: "すべて",
    filterClear: "クリア",
    filterTech: "技術",
    filterLanguage: "言語",
    filterCategory: "種類",
    noResults: "この条件に当てはまるプロジェクトはありません。",
    titleLostHeaven: "タイトル未定のゲーム",
    titleConfidential: "非公開プロジェクト",
    roleLostHeaven: "個人プロジェクト：立ち上げ中のインディーパブリッシャー「Lost Heaven」の第1作。",
    roleSolo: "個人プロジェクト。企画から公開まで担当。",
    roleFreelance: "個人でのフリーランス案件。開発から納品まで担当。",
    roleMurasaki:
      "個人プロジェクト：ReactのフロントエンドとSpring BootのAPI、Chrome拡張機能、インフラ、監視まで担当。",
    roleConfidential: "API、Webアプリ、モバイルアプリの主担当開発者。",
    roleCaderneta: "Spring BootのAPIを開発し、モバイルアプリにも参加。",
    roleAcessos: "APIとWebフロントエンドを開発。",
    roleAuth: "モバイルアプリを開発し、APIにも参加。",
    roleAniboard: "4人の開発メンバーの1人。",
    pdesc1: "レッスン、コース、フラッシュカード、OCRによる読解機能を備えた語学学習プラットフォーム。YouTube視聴中のイマージョン時間を記録するChrome拡張機能も提供。",
    pdesc2: "太陽光発電会社のウェブサイト。",
    pdesc3: "Murasakiプラットフォームの初期バージョン。",
    pdesc5: "RabbitMQを使ったマイクロサービスの学習プロジェクト。",
    pdesc7:
      "予約・客室・宿泊客・レポート・監査モジュールを備えたデスクトップホテル管理システム。",
    pdesc8:
      "タスク・習慣・目標・家計を管理する個人用ワークスペース。デスクトップ版とモバイル版を同期。コーディングエージェント（Claude Code、Codex）を独立したworktreeで実行し、MCP経由のデータアクセスとセッションをまたぐ永続メモリを備える。",
    pdesc9:
      "守秘義務のあるプロジェクト。APIはCQRSとイベントソーシングを採用：イベントをPostgresに保存し、DebeziumでKafkaへ配信、ワーカーがMongoDBに読み取り用ビューを構築。夜間ジョブでClickHouseに分析用データを投入。管理用Webアプリとオフライン対応のモバイルアプリ。",
    pdesc10:
      "口座・ローン・投資・カードを提供するデジタル信用組合向けフィンテック。クリーンアーキテクチャによるモジュラーモノリス。",
    pdesc11:
      "認証情報やリポジトリへのアクセスを申請・承認・付与する社内ポータル。退職時の一括取り消しと監査履歴付き。",
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
    pdesc19:
      "Logisimで論理ゲートからゼロから組み立てた8ビットコンピュータ：加減算ALU、レジスタ、RAM、CPU。",
  },
};
