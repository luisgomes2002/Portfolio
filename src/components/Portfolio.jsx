import { useEffect, useState } from "react";
import "./Portfolio.css";

import {
  catKey,
  categories,
  i18nJson,
  languageOptions,
  links,
  platformKey,
  platforms,
  projects,
  resumes,
  skillGroups,
  techKind,
  techOptions,
} from "../content";
import Case, { PlatformIcon, TypeIcon } from "./Case";
import ProjectModal from "./ProjectModal";
import { ArrowDown, ArrowUpRight, GitHub } from "./Icons";

const LANGS = ["pt", "en", "jp"];
const HTML_LANG = { pt: "pt-BR", en: "en", jp: "ja" };

const readLang = () => {
  try {
    const saved = localStorage.getItem("lang");
    return LANGS.includes(saved) ? saved : "pt";
  } catch {
    return "pt";
  }
};

// Número fixo por projeto, na ordem de `projects`.
const numbered = projects.map((p, i) => ({ ...p, num: String(i + 1).padStart(2, "0") }));
const filterOptions = categories.filter((c) => projects.some((p) => p.category === c));
const usesTech = (name) => (p) => !name || p.tech.includes(name);
const runsOn = (platform) => (p) => !platform || p.platforms?.includes(platform);
const platformOptions = platforms.filter((pl) => projects.some(runsOn(pl)));

// Título com uma palavra em vermelhão.
const Marked = ({ pre, hl, post }) => (
  <>
    {pre}
    <em className="mark">{hl}</em>
    {post}
  </>
);

// Seta desenhada à mão para as notas manuscritas.
const NoteArrow = ({ className }) => (
  <svg className={className} width="56" height="40" viewBox="0 0 56 40" fill="none" aria-hidden>
    <path
      d="M52 6C40 4 22 8 12 24M12 24L10 12M12 24L23 21"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Portfolio = () => {
  const [lang, setLang] = useState(readLang);
  const [filter, setFilter] = useState("all");
  const [techFilter, setTechFilter] = useState(null);
  const [platformFilter, setPlatformFilter] = useState(null);
  const [opened, setOpened] = useState(null);

  const t = i18nJson[lang];

  useEffect(() => {
    document.documentElement.lang = HTML_LANG[lang];
    try {
      localStorage.setItem("lang", lang);
    } catch {
      // sem storage: o idioma volta ao padrão na próxima visita
    }
  }, [lang]);

  // Em "Todos": destaques largos no topo e, abaixo, todos os projetos agrupados
  // por tipo (os destaques se repetem no grupo). Com filtro: só o grupo escolhido.
  // O filtro de tecnologia se combina com o de tipo.
  const visible = numbered.filter(usesTech(techFilter)).filter(runsOn(platformFilter));
  const countOf = (c) =>
    c === "all" ? visible.length : visible.filter((p) => p.category === c).length;
  const wide = filter === "all" ? visible.filter((p) => p.featured) : [];
  const groups = (filter === "all" ? filterOptions : [filter])
    .map((c) => ({
      category: c,
      items: visible.filter((p) => p.category === c),
    }))
    .filter((g) => g.items.length > 0);

  const open = (project) => (idx) => setOpened({ id: project.id, idx });
  const openedProject = opened && numbered.find((p) => p.id === opened.id);

  return (
    <div className="page">
      <header className="nav-wrap">
        <div className="nav">
          <a href="#top" className="nav-name">
            Luis Gomes
          </a>
          <nav className="nav-links">
            <a href="#projects">{t.navProjects}</a>
            <a href="#stack">{t.navStack}</a>
            <div className="lang-switch" role="group" aria-label="Idioma / Language">
              {LANGS.map((l) => (
                <button
                  key={l}
                  type="button"
                  className={lang === l ? "is-active" : ""}
                  aria-pressed={lang === l}
                  onClick={() => setLang(l)}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container">
            <p className="hero-badge">
              <span className="hanko" aria-hidden>
                作
              </span>
              {t.badge}
            </p>
            <h1 className="hero-title">
              <Marked pre={t.heroPre} hl={t.heroHl} post={t.heroPost} />
            </h1>
            <p className="hero-lead">{t.desc}</p>

            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                {t.ctaProjects}
                <ArrowDown />
              </a>
              <a href={links.github} target="_blank" rel="noreferrer" className="btn btn-secondary">
                <GitHub />
                GitHub
              </a>
              <p className="note hero-note">
                <NoteArrow className="note-arrow" />
                {t.noteHero.replace("{n}", projects.length)}
              </p>
            </div>

            <p className="hero-links">
              <a href={links.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
                <ArrowUpRight size={14} />
              </a>
              <span className="hero-resume">
                {t.resume}:
                {resumes.map((r) => (
                  <a key={r.code} href={r.file} download>
                    {r.code}
                  </a>
                ))}
              </span>
            </p>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <div className="section-head">
              <h2 className="section-title">
                <Marked pre={t.projectsPre} hl={t.projectsHl} post={t.projectsPost} />
              </h2>
              <div className="filter-rows">
                <div className="filters" role="group" aria-label={t.filterCategory}>
                  {["all", ...filterOptions].map((c) => (
                    <button
                      key={c}
                      type="button"
                      className={filter === c ? "is-active" : ""}
                      aria-pressed={filter === c}
                      onClick={() => setFilter(c)}
                    >
                      {c !== "all" && <TypeIcon category={c} size={15} />}
                      {c === "all" ? t.filterAll : t[catKey(c)]}
                      <span className="filter-count">{countOf(c)}</span>
                    </button>
                  ))}
                </div>
                <div className="filters filters-tech" role="group" aria-label={t.filterPlatform}>
                  <span className="filters-label">{t.filterPlatform}</span>
                  {platformOptions.map((pl) => (
                    <button
                      key={pl}
                      type="button"
                      className={`plat-${pl} ${platformFilter === pl ? "is-active" : ""}`}
                      aria-pressed={platformFilter === pl}
                      onClick={() => setPlatformFilter((cur) => (cur === pl ? null : pl))}
                    >
                      <PlatformIcon platform={pl} size={15} />
                      {t[platformKey(pl)]}
                      <span className="filter-count">{numbered.filter(runsOn(pl)).length}</span>
                    </button>
                  ))}
                </div>
                {[
                  [t.filterLanguage, languageOptions],
                  [t.filterTech, techOptions],
                ].map(([label, options]) => (
                  <div key={label} className="filters filters-tech" role="group" aria-label={label}>
                    <span className="filters-label">{label}</span>
                    {options.map((name) => (
                      <button
                        key={name}
                        type="button"
                        className={`kind-${techKind(name)} ${techFilter === name ? "is-active" : ""}`}
                        aria-pressed={techFilter === name}
                        onClick={() => setTechFilter((cur) => (cur === name ? null : name))}
                      >
                        <span className="kind-dot" aria-hidden />
                        {name}
                        <span className="filter-count">{numbered.filter(usesTech(name)).length}</span>
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {wide.length === 0 && groups.length === 0 && (
              <p className="no-results">{t.noResults}</p>
            )}

            {wide.map((p, i) => (
              <Case
                key={p.id}
                project={p}
                num={p.num}
                t={t}
                onOpen={open(p)}
                wide
                flip={i % 2 === 1}
              />
            ))}

            {groups.map((g) => (
              <section key={g.category} className="type-group" aria-labelledby={`group-${g.category}`}>
                <header className="type-group-head">
                  <span className="type-group-icon" aria-hidden>
                    <TypeIcon category={g.category} size={22} />
                  </span>
                  <div>
                    <h3 id={`group-${g.category}`} className="type-group-title">
                      {t[catKey(g.category)]}
                      <span className="type-group-count">{countOf(g.category)}</span>
                    </h3>
                    <p className="type-group-desc">{t[`${catKey(g.category)}Desc`]}</p>
                  </div>
                </header>
                <div className="case-grid">
                  {g.items.map((p) => (
                    <Case key={p.id} project={p} num={p.num} t={t} onOpen={open(p)} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>

        <section id="stack" className="band-wrap">
          <div className="band">
            <h2 className="section-title">
              <Marked pre={t.stackPre} hl={t.stackHl} post={t.stackPost} />
            </h2>
            <div className="skills">
              {skillGroups.map((g) => (
                <div key={g.key} className="skill-group">
                  <h3>{t[g.key]}</h3>
                  <ul>
                    {g.items.map(([icon, name]) => (
                      <li key={name}>
                        <i className={icon} aria-hidden />
                        {name}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact container">
          <h2 className="contact-title">{t.contactTitle}</h2>
          <div className="hero-actions">
            <a href={links.linkedin} target="_blank" rel="noreferrer" className="btn btn-primary">
              LinkedIn
              <ArrowUpRight />
            </a>
            <p className="note contact-note">
              <NoteArrow className="note-arrow" />
              {t.noteContact}
            </p>
          </div>
        </section>
      </main>

      <footer className="footer container">
        <span>Luis Gomes, {new Date().getFullYear()}</span>
        <span className="footer-links">
          <a href={links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </span>
      </footer>

      {openedProject && (
        <ProjectModal
          key={openedProject.id}
          project={openedProject}
          num={openedProject.num}
          startIdx={opened.idx}
          t={t}
          onClose={() => setOpened(null)}
        />
      )}
    </div>
  );
};

export default Portfolio;
