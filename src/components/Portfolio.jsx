import { useState, useEffect } from "react";
import "./Portfolio.css";

import home from "../assets/murasaki/home.png";
import lesson from "../assets/murasaki/lesson.png";
import anki from "../assets/murasaki/anki.png";
import curso from "../assets/murasaki/curso.png";
import yomi from "../assets/murasaki/yomi.png";

import trifaseImg1 from "../assets/trifase/TrifaseImg1.png";
import trifaseImg2 from "../assets/trifase/TrifaseImg2.png";
import trifaseImg3 from "../assets/trifase/TrifaseImg3.png";
import trifaseImg4 from "../assets/trifase/TrifaseImg4.png";

import MurasakiImg1 from "../assets/murasaki-prototype/MurasakiImg1.png";
import MurasakiImg2 from "../assets/murasaki-prototype/MurasakiImg2.png";
import MurasakiImg3 from "../assets/murasaki-prototype/MurasakiImg3.png";

import resumePt from "../resumes/luis_gustavo_pt_cv.pdf";
import resumeEn from "../resumes/luis_gustavo_en_cv.pdf";
import resumeJp from "../resumes/luis_gustavo_jp_cv.pdf";

import hellos1 from "../assets/hellos/img1.png";
import hellos2 from "../assets/hellos/img2.png";
import hellos3 from "../assets/hellos/img3.png";
import hellos4 from "../assets/hellos/img4.png";

import sagyou1 from "../assets/sagyou/img1.png";
import sagyou2 from "../assets/sagyou/img2.png";
import sagyou3 from "../assets/sagyou/img3.png";
import sagyou4 from "../assets/sagyou/img4.png";
import sagyou5 from "../assets/sagyou/img5.png";

export const i18nJson = {
  pt: {
    tag: "Fullstack Developer",
    desc: "Engenheiro de Software Fullstack focado em Backend e Arquitetura de Software. Entusiasta de System Design, busco aplicar padrões de excelência técnica para garantir escalabilidade, manutenibilidade e eficiência em sistemas de larga escala.",
    resumeLabel: "Currículo",
    projectsLabel: "Projetos",
    stackLabel: "Stack",
    resTitlePt: "Versão em Português",
    resDescPt:
      "Currículo completo com experiências e projetos em português brasileiro.",
    resTitleEn: "Versão em Inglês",
    resDescEn: "Currículo completo com experiências e projetos em inglês.",
    resTitleJp: "Versão em Japonês",
    resDescJp: "Currículo completo com experiências e projetos em japonês.",
    dlPt: "Baixar PDF",
    dlEn: "Baixar PDF",
    dlJp: "Baixar PDF",
    pdesc1: "Plataforma de aprendizado de idiomas",
    pdesc2: "Site para empresa de energia solar",
    pdesc3: "Versão inicial da plataforma Murasaki",
    pdesc4: "Plataforma de gestão para profissionais da saúde",
    pdesc5: "Projeto de estudo sobre microsserviços com RabbitMQ",
    pdesc6: "Projeto de estudo sobre microsserviços com Kafka",
    pdesc7:
      "Sistema desktop de gestão hoteleira com módulos de reservas, quartos, hóspedes, relatórios e auditoria",
    pdesc8:
      "Kanban pessoal offline com hábitos, metas, lista de compras, canvas e importação via IA",
    arch: "Arquivado",
    development: "Desenvolvimento",
    study: "Para Estudo",
    freelance: "Freelancer",
    catPersonal: "Pessoal",
    catFreelance: "Freelancer",
    catStudy: "Estudo",
    navInfo1: "SOBRE MIM",
    navInfo2: "PROJETOS",
    navInfo3: "CONHECIMENTOS",
  },
  en: {
    tag: "Fullstack Developer",
    desc: "Fullstack Software Engineer focused on Backend and Software Architecture. A System Design enthusiast, I strive to apply technical excellence standards to ensure scalability, maintainability, and efficiency in large-scale systems.",
    resumeLabel: "Resume",
    projectsLabel: "Projects",
    stackLabel: "Stack",
    resTitlePt: "Portuguese Version",
    resDescPt: "Full resume with experience and projects in Portuguese.",
    resTitleEn: "English Version",
    resDescEn: "Full resume with experiences and projects in English.",
    resTitleJp: "Japanese Version",
    resDescJp: "Complete resume with experience and projects in Japanese.",
    dlPt: "Download PDF",
    dlEn: "Download PDF",
    dlJp: "Download PDF",
    pdesc1: "Language learning platform",
    pdesc2: "Website for a solar energy company",
    pdesc3: "Initial version of the Murasaki platform",
    pdesc4: "management platform for healthcare professionals.",
    pdesc5: "Study project on microservices with RabbitMQ",
    pdesc6: "Study project on microservices with Kafka",
    pdesc7:
      "Desktop hotel management system with modules for reservations, rooms, guests, reports and audit",
    pdesc8:
      "Offline personal kanban with habits, goals, shopping list, canvas and AI-assisted import",
    arch: "Archived",
    development: "Development",
    study: "For study",
    freelance: "Freelance",
    catPersonal: "Personal",
    catFreelance: "Freelance",
    catStudy: "Study",
    navInfo1: "ABOUT ME",
    navInfo2: "PROJECTS",
    navInfo3: "SKILLS",
  },
  jp: {
    tag: "フルスタック開発者",
    desc: "バックエンドおよびソフトウェアアーキテクチャに重点を置くフルスタックソフトウェアエンジニア。システムデザインを追求し、大規模システムにおける拡張性、保守性、効率性を確保するため、技術的卓越性の標準を適用することに尽力しています。",
    resumeLabel: "履歴書",
    projectsLabel: "プロジェクト",
    stackLabel: "スキル",
    resTitlePt: "ポルトガル語版",
    resDescPt: "ポルトガル語での経歴と実績を含む完全な履歴書です。",
    resTitleEn: "英語版",
    resDescEn: "英語での経歴と実績を含む完全な履歴書です。",
    resTitleJp: "日本語版",
    resDescJp: "日本語での経歴と実績を含む完全な履歴書です。",
    dlPt: "PDFダウンロード",
    dlEn: "PDFダウンロード",
    dlJp: "PDFダウンロード",
    pdesc1: "語学学習プラットフォーム",
    pdesc2: "太陽光発電会社のウェブサイト",
    pdesc3: "Murasakiプラットフォームの初期バージョン",
    pdesc4: "医療専門職向けの管理プラットフォーム",
    pdesc5: "RabbitMQを使ったマイクロサービスの学習プロジェクト",
    pdesc6: "Kafkaを使ったマイクロサービスの学習プロジェクト",
    pdesc7:
      "予約・客室・宿泊客・レポート・監査モジュールを備えたデスクトップホテル管理システム",
    pdesc8:
      "習慣、目標、買い物リスト、キャンバス、AIによるインポート機能を備えたオフライン個人用かんばん",
    arch: "アーカイブ済み",
    development: "発達",
    study: "学習用",
    freelance: "フリーランス",
    catPersonal: "個人",
    catFreelance: "フリーランス",
    catStudy: "学習",
    navInfo1: "私について",
    navInfo2: "プロジェクト",
    navInfo3: "スキル",
  },
};

const Portfolio = () => {
  const [lang, setLang] = useState("pt");
  const [isHovered, setIsHovered] = useState(false);
  const [carousels, setCarousels] = useState({});
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight")
        setLightbox((prev) => ({
          ...prev,
          idx: (prev.idx + 1) % prev.slides.length,
        }));
      if (e.key === "ArrowLeft")
        setLightbox((prev) => ({
          ...prev,
          idx: (prev.idx - 1 + prev.slides.length) % prev.slides.length,
        }));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  const t = i18nJson[lang];

  const projectsData = [
    {
      id: "car1",
      num: "01",
      title: "Murasaki Languages",
      status: "Live",
      isLive: true,
      category: "personal",
      descKey: "pdesc1",
      stack:
        "TypeScript · React · Styled Components · Java · Spring Boot · MongoDB · Clean Architecture · Redis · AI ·  Google Vision · Google Cloud Storage · Strip ·  Docker · NGINX · Prometheus · Grafana",
      slides: [home, lesson, anki, curso, yomi],
      link: "https://murasakilanguages.com/",
    },
    {
      id: "car7",
      num: "02",
      title: "Sagyou",
      status: "Live",
      isLive: true,
      category: "personal",
      descKey: "pdesc8",
      stack:
        "Electron · React · TypeScript · Zustand · dnd kit · Tailwind CSS · Vitest",
      slides: [sagyou1, sagyou2, sagyou3, sagyou4, sagyou5],
      link: "https://github.com/luisgomes2002/Sagyou",
    },
    {
      id: "car2",
      num: "03",
      title: "Hotel Ellus",
      status: "Live",
      isLive: true,
      category: "freelance",
      descKey: "pdesc7",
      stack:
        "Electron · TypeScript · React · SQLite · Radix UI · Zustand · Zod · React Hook Form · TanStack Table · Vite",
      slides: [hellos1, hellos2, hellos3, hellos4],
      link: "",
    },
    {
      id: "car3",
      num: "04",
      title: "Trifase",
      status: "Live",
      isLive: true,
      category: "freelance",
      descKey: "pdesc2",
      stack: "React · CSS",
      slides: [trifaseImg1, trifaseImg2, trifaseImg3, trifaseImg4],
      link: "https://trifaseenergiasolar.com/",
    },
    {
      id: "car4",
      num: "05",
      title: "Murasaki Languages Prototype",
      status: t.arch,
      isLive: false,
      category: "study",
      descKey: "pdesc3",
      stack:
        "JavaScript · React · Styled Components · Node.js · Express · MongoDB",
      slides: [MurasakiImg1, MurasakiImg2, MurasakiImg3],
      link: "https://github.com/luisgomes2002/Murasaki-Languages-Prototype",
    },
    {
      id: "car5",
      num: "06",
      title: "health-manager-backend",
      status: t.development,
      isLive: false,
      category: "study",
      descKey: "pdesc4",
      stack: " Java · Spring Boot · Postgres · Redis · JPA",
      slides: [],
      link: "https://github.com/luisgomes2002/health-manager-backend",
    },
    {
      id: "car6",
      num: "07",
      title: "Microsservices-Email-RabbitMQ",
      status: t.study,
      isLive: false,
      category: "study",
      descKey: "pdesc5",
      stack: " Java · Spring Boot · Postgres · RabbitMQ ",
      slides: [],
      link: "https://github.com/luisgomes2002/Microsservices-Email-RabbitMQ",
    },

    // {
    //   id: "car6",
    //   num: "06",
    //   title: "Kafka",
    //   status: t.study,
    //   isLive: false,
    //   descKey: "pdesc6",
    //   stack: " Java · Spring Boot · Postgres · Kafka ",
    //   slides: [],
    //   link: "",
    // },
  ];

  useEffect(() => {
    if (isHovered) return;
    const autoId = setInterval(() => {
      setCarousels((prev) => {
        const next = { ...prev };
        for (const project of projectsData) {
          if (project.slides.length > 0) {
            next[project.id] = ((prev[project.id] ?? 0) + 1) % project.slides.length;
          }
        }
        return next;
      });
    }, 3000);
    return () => clearInterval(autoId);
  }, [isHovered]);

  const handleCarMove = (id, dir, count) => {
    setCarousels((prev) => ({
      ...prev,
      [id]: ((prev[id] ?? 0) + dir + count) % count,
    }));
  };

  const goTo = (id, idx) => {
    setCarousels((prev) => ({ ...prev, [id]: idx }));
  };

  const renderCarousel = (project) => {
    const currentIdx = carousels[project.id] ?? 0;
    const count = project.slides.length;

    return (
      <div
        className="carousel-wrap"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="carousel-slides"
          style={{ transform: `translateX(-${currentIdx * 100}%)` }}
        >
          {project.slides.map((slide, i) => (
            <div key={i} className="carousel-slide">
              <img
                src={slide}
                alt={`slide-${i}`}
                className="carousel-image"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightbox({ slides: project.slides, idx: i });
                }}
              />
            </div>
          ))}
        </div>

        <button
          className="carousel-btn prev"
          onClick={(e) => {
            e.stopPropagation();
            handleCarMove(project.id, -1, count);
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 6L9 12L15 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button
          className="carousel-btn next"
          onClick={(e) => {
            e.stopPropagation();
            handleCarMove(project.id, 1, count);
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 6L15 12L9 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div className="carousel-nav">
          {project.slides.map((_, i) => (
            <button
              key={i}
              className={`carousel-dot ${i === currentIdx ? "active" : ""}`}
              onClick={(e) => {
                e.stopPropagation();
                goTo(project.id, i);
              }}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="wrap">
      <nav>
        <div className="nav-logo">
          LG<span>.</span>
        </div>

        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-links ${menuOpen ? "mobile-open" : ""}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            {t.navInfo1}
          </a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>
            {t.navInfo2}
          </a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>
            {t.navInfo3}
          </a>

          <div className="lang-sw">
            <button
              className={lang === "pt" ? "active" : ""}
              onClick={() => setLang("pt")}
            >
              PT
            </button>
            <button
              className={lang === "en" ? "active" : ""}
              onClick={() => setLang("en")}
            >
              EN
            </button>
            <button
              className={lang === "jp" ? "active" : ""}
              onClick={() => setLang("jp")}
            >
              JP
            </button>
          </div>
        </div>
      </nav>
      <div className="hero" id="about">
        <div className="hero-tag">{t.tag}</div>
        <h1>
          Luis
          <br />
          <em>Gomes</em>
        </h1>
        <div className="hero-row">
          <p>{t.desc}</p>
          <div className="hero-actions">
            <a
              href="https://github.com/luisgomes2002"
              className="btn-ghost"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/luis-gomes-8462b321a/"
              className="btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2 10L10 2M10 2H4M10 2V8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="divider"></div>

      {/* RESUME */}
      <div className="section">
        <div className="section-label">{t.resumeLabel}</div>
        <div className="resume-grid">
          <div className="resume-card">
            <div className="resume-lang-badge">
              <span className="resume-flag" role="img" aria-label="Brazil">
                🇧🇷
              </span>{" "}
            </div>
            <h3>{t.resTitlePt}</h3>
            <p>{t.resDescPt}</p>
            <a href={resumePt} download className="resume-download">
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                <path
                  d="M7 1v8M4 6l3 3 3-3M2 11h10"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>{t.dlPt}</span>
            </a>
          </div>
          <div className="resume-card">
            <div className="resume-lang-badge">
              <span className="resume-flag" role="img" aria-label="USA">
                🇺🇸
              </span>{" "}
            </div>
            <h3>{t.resTitleEn}</h3>
            <p>{t.resDescEn}</p>
            <a href={resumeEn} download className="resume-download">
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                <path
                  d="M7 1v8M4 6l3 3 3-3M2 11h10"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>{t.dlEn}</span>
            </a>
          </div>
          <div className="resume-card">
            <div className="resume-lang-badge">
              <span className="resume-flag" role="img" aria-label="Japan">
                🇯🇵
              </span>{" "}
            </div>
            <h3>{t.resTitleJp}</h3>
            <p>{t.resDescJp}</p>
            <a href={resumeJp} download className="resume-download">
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                <path
                  d="M7 1v8M4 6l3 3 3-3M2 11h10"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>{t.dlJp}</span>
            </a>
          </div>
        </div>
      </div>

      <div className="divider"></div>

      {/* PROJECTS */}
      <div className="section" id="projects">
        <div className="section-label">{t.projectsLabel}</div>
        {[
          { key: "personal", label: t.catPersonal },
          { key: "freelance", label: t.catFreelance },
          { key: "study", label: t.catStudy },
        ].map(({ key, label }) => {
          const group = projectsData.filter((p) => p.category === key);
          if (group.length === 0) return null;
          return (
            <div key={key} className="projects-group">
              <div className="projects-group-label">{label}</div>
              <div className="projects-list">
                {group.map((project) => (
                  <div
                    className={`project-row ${project.link ? "clickable" : ""}`}
                    key={project.id}
                    onClick={() => {
                      if (project.link) {
                        window.open(project.link, "_blank");
                      }
                    }}
                  >
                    <div className="project-num-col">{project.num}</div>
                    <div className="project-main">
                      <div className="project-header">
                        <h3>{project.title}</h3>
                        <span
                          className={`project-badge ${
                            project.isLive
                              ? "badge-live"
                              : project.status === t.development
                                ? "badge-development"
                                : project.status === t.study
                                  ? "badge-study"
                                  : "badge-archived"
                          }`}
                        >
                          {project.status}
                        </span>
                        <svg
                          className="project-link-icon"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M14 5H19V10M19 5L10 14"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M19 14V19H5V5H10"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <p className="project-desc">{t[project.descKey]}</p>
                      <div className="project-stack">{project.stack}</div>
                    </div>
                    <div className="carousel-col">
                      {renderCarousel(project)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="divider"></div>

      {/* TECH */}
      <div className="section" id="skills">
        <div className="section-label">{t.stackLabel}</div>
        <div className="tech-grid">
          <div className="tech-item">
            <i className="devicon-java-plain-wordmark"></i>
            <span>Java</span>
          </div>
          <div className="tech-item">
            <i className="devicon-spring-original"></i>
            <span>Spring</span>
          </div>
          <div className="tech-item">
            <i className="devicon-postgresql-plain"></i>
            <span>Postgres</span>
          </div>
          <div className="tech-item">
            <i className="devicon-javascript-plain"></i>
            <span>JavaScript</span>
          </div>
          <div className="tech-item">
            <i className="devicon-typescript-plain"></i>
            <span>TypeScript</span>
          </div>
          <div className="tech-item">
            <i className="devicon-react-original"></i>
            <span>React / React Native</span>
          </div>

          <div className="tech-item">
            <i className="devicon-git-plain"></i>
            <span>Git</span>
          </div>

          <div className="tech-item">
            <i className="devicon-mysql-original"></i>
            <span>MySQL</span>
          </div>

          <div className="tech-item">
            <i className="devicon-mongodb-plain"></i>
            <span>Mongo</span>
          </div>

          <div className="tech-item">
            <i class="devicon-redis-plain"></i>
            <span>Redis</span>
          </div>
          {/* <div className="tech-item">
            <i class="devicon-nestjs-original"></i>
            <span>NestJS</span>
          </div> */}
          <div className="tech-item">
            <i class="devicon-docker-plain"></i>
            <span>Docker</span>
          </div>
          <div className="tech-item">
            <i class="devicon-nginx-original"></i>
            <span>NGINX</span>
          </div>
          <div className="tech-item">
            <i className="devicon-nodejs-plain-wordmark"></i>
            <span>Node</span>
          </div>
          <div className="tech-item">
            <i class="devicon-express-original"></i>
            <span>Express</span>
          </div>
          <div className="tech-item">
            <i class="devicon-prisma-original"></i>
            <span>Prisma</span>
          </div>
          {/* <div className="tech-item">
            <i class="devicon-postman-plain"></i>
            <span>Postman</span>
          </div> */}
          {/* <div className="tech-item">
            <i class="devicon-styledcomponents-plain"></i>
            <span>Styled Components</span>
          </div> */}
          {/* <div className="tech-item">
            <i class="devicon-fastify-plain-wordmark"></i>
            <span>Fastify</span>
          </div> */}
        </div>
      </div>

      <footer>
        <p>
          <span className="footer-dot"></span>Luis Gomes · Fullstack Developer
        </p>
      </footer>

      {lightbox && (
        <div className="lightbox-overlay" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {lightbox.slides.length > 1 && (
            <button
              className="lightbox-nav prev"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox((prev) => ({
                  ...prev,
                  idx: (prev.idx - 1 + prev.slides.length) % prev.slides.length,
                }));
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 6L9 12L15 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}

          <img
            src={lightbox.slides[lightbox.idx]}
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />

          {lightbox.slides.length > 1 && (
            <button
              className="lightbox-nav next"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox((prev) => ({
                  ...prev,
                  idx: (prev.idx + 1) % prev.slides.length,
                }));
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 6L15 12L9 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}

          <div className="lightbox-dots">
            {lightbox.slides.map((_, i) => (
              <button
                key={i}
                className={`lightbox-dot ${i === lightbox.idx ? "active" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setLightbox((prev) => ({ ...prev, idx: i }));
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
