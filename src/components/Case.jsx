import { catKey, platformKey, projectTitle, statusKey, techKind, yearsLabel } from "../content";
import {
  ArrowUpRight, Book, Briefcase, FileCheck, Globe, Monitor, Puzzle, Smartphone, User, Users,
} from "./Icons";

const TYPE_ICONS = {
  work: Briefcase,
  personal: User,
  group: Users,
  freelance: FileCheck,
  study: Book,
};

export const TypeIcon = ({ category, size }) => {
  const Icon = TYPE_ICONS[category];
  return <Icon size={size} />;
};

// Tipo do projeto bem à vista: ícone + categoria + empresa ou tamanho da equipe.
export const TypeTag = ({ project, t, compact = false }) => {
  const extra = project.org ?? (project.team && t.teamOf.replace("{n}", project.team));
  return (
    <span className={`type-tag type-${project.category} ${compact ? "is-compact" : ""}`}>
      <TypeIcon category={project.category} size={compact ? 14 : 16} />
      <strong>{t[catKey(project.category)]}</strong>
      {extra && <span className="type-extra">{extra}</span>}
    </span>
  );
};

const PLATFORM_ICONS = {
  web: Globe,
  desktop: Monitor,
  mobile: Smartphone,
  extension: Puzzle,
};

export const PlatformTags = ({ project, t }) => {
  if (!project.platforms?.length) return null;
  return (
    <ul className="case-platforms" aria-label={t.platformsLabel}>
      {project.platforms.map((p) => {
        const Icon = PLATFORM_ICONS[p];
        return (
          <li key={p} className="platform-tag">
            <Icon size={13} />
            {t[platformKey(p)]}
          </li>
        );
      })}
    </ul>
  );
};

export const CaseLinks = ({ project, t }) => (
  <p className="case-links">
    {project.site && (
      <a href={project.site} target="_blank" rel="noreferrer">
        {t.visitSite}
        <ArrowUpRight size={14} />
      </a>
    )}
    {project.repo && (
      <a href={project.repo} target="_blank" rel="noreferrer">
        {t.viewCode}
        <ArrowUpRight size={14} />
      </a>
    )}
    {project.private && !project.site && <span>{t.privateRepo}</span>}
  </p>
);

// Linguagens e tecnologias principais em tags coloridas por tipo; o restante
// da stack vem logo abaixo, em texto.
export const TechTags = ({ project, t }) => (
  <ul className="case-tech" aria-label={t.techLabel}>
    {project.tech.map((name) => (
      <li key={name} className={`tech-tag kind-${techKind(name)}`}>
        {name}
      </li>
    ))}
  </ul>
);

export const CaseDetails = ({ project, t }) => (
  <>
    <p className="case-desc">{t[project.descKey]}</p>
    {project.roleKey && <p className="case-role">{t[project.roleKey]}</p>}
    <TechTags project={project} t={t} />
    {project.stack.length > 0 && <p className="case-stack">{project.stack.join(", ")}</p>}
    <CaseLinks project={project} t={t} />
  </>
);

export const CaseHeading = ({ project, num, t, as: Tag = "h3", id }) => (
  <div className="case-heading">
    <div className="case-top">
      <span className="case-num">{num}</span>
      <TypeTag project={project} t={t} />
    </div>
    <Tag className="case-title" id={id}>
      {projectTitle(project, t)}
    </Tag>
    <p className="case-meta">
      {yearsLabel(project.years, t)} ·{" "}
      <span className={`case-status status-${project.status}`}>
        {t[statusKey(project.status)]}
      </span>
    </p>
    <PlatformTags project={project} t={t} />
  </div>
);

// Moldura de janela em volta da print; sem print, mostra o aviso.
const Frame = ({ project, t, onOpen }) => {
  const src = project.slides[0];
  return (
    <div className="frame">
      <div className="frame-bar" aria-hidden>
        <span className="frame-dots" aria-hidden>
          <span />
          <span />
          <span />
        </span>
        <TypeTag project={project} t={t} compact />
      </div>
      {src ? (
        <button
          type="button"
          className="frame-shot"
          onClick={() => onOpen(0)}
          aria-label={`${t.openGallery} ${projectTitle(project, t)}`}
        >
          <img src={src} alt="" loading="lazy" />
        </button>
      ) : (
        <div className="frame-shot frame-empty">{t.imagesSoon}</div>
      )}
    </div>
  );
};

const Thumbs = ({ project, t, onOpen }) => {
  const rest = project.slides.slice(1, 5);
  if (rest.length === 0) return null;
  return (
    <div className="case-thumbs">
      {rest.map((src, i) => (
        <button
          key={src}
          type="button"
          className="case-thumb"
          onClick={() => onOpen(i + 1)}
          aria-label={`${t.openGallery} ${projectTitle(project, t)} (${i + 2}/${project.slides.length})`}
        >
          <img src={src} alt="" loading="lazy" />
        </button>
      ))}
    </div>
  );
};

const Case = ({ project, num, t, onOpen, wide = false, flip = false }) => (
  <article className={`case ${wide ? "case-wide" : ""} ${flip ? "is-flipped" : ""}`}>
    <div className="case-visual">
      <Frame project={project} t={t} onOpen={onOpen} />
      {wide && <Thumbs project={project} t={t} onOpen={onOpen} />}
    </div>
    <div className="case-text">
      <CaseHeading project={project} num={num} t={t} />
      <CaseDetails project={project} t={t} />
    </div>
  </article>
);

export default Case;
