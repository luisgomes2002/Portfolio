import { useEffect, useRef, useState } from "react";
import { CaseDetails, CaseHeading } from "./Case";
import { ChevronLeft, ChevronRight, Close } from "./Icons";

const ProjectModal = ({ project, num, startIdx = 0, t, onClose }) => {
  const [idx, setIdx] = useState(startIdx);
  const closeRef = useRef(null);
  const count = project.slides.length;

  const move = (dir) => setIdx((i) => (i + dir + count) % count);

  // Mantém o handler de teclado atual sem reabrir o efeito a cada render.
  const keyHandler = useRef(null);
  keyHandler.current = (e) => {
    if (e.key === "Escape") onClose();
    if (count > 1 && e.key === "ArrowRight") move(1);
    if (count > 1 && e.key === "ArrowLeft") move(-1);
  };

  useEffect(() => {
    const previous = document.activeElement;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";

    const onKey = (e) => keyHandler.current(e);
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      previous?.focus?.();
    };
  }, []);

  return (
    <div className="modal-scrim" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-bar">
          {count > 1 && (
            <span className="modal-count">
              {idx + 1} / {count}
            </span>
          )}
          <button
            ref={closeRef}
            type="button"
            className="text-btn"
            onClick={onClose}
          >
            {t.close}
            <Close size={16} />
          </button>
        </div>

        <div className="modal-stage">
          <img src={project.slides[idx]} alt={`${project.title} — ${idx + 1}/${count}`} />
          {count > 1 && (
            <>
              <button
                type="button"
                className="icon-btn stage-nav prev"
                onClick={() => move(-1)}
                aria-label={t.prevImage}
              >
                <ChevronLeft />
              </button>
              <button
                type="button"
                className="icon-btn stage-nav next"
                onClick={() => move(1)}
                aria-label={t.nextImage}
              >
                <ChevronRight />
              </button>
            </>
          )}
        </div>

        {count > 1 && (
          <div className="modal-thumbs">
            {project.slides.map((src, i) => (
              <button
                key={src}
                type="button"
                className={`thumb ${i === idx ? "is-active" : ""}`}
                onClick={() => setIdx(i)}
                aria-label={`${i + 1} / ${count}`}
                aria-current={i === idx}
              >
                <img src={src} alt="" />
              </button>
            ))}
          </div>
        )}

        <div className="modal-info">
          <CaseHeading project={project} num={num} t={t} as="h2" id="modal-title" />
          <div className="case-body">
            <CaseDetails project={project} t={t} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
