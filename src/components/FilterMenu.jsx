import { useEffect, useId, useRef, useState } from "react";
import { Check, ChevronDown } from "./Icons";

// Menu de múltipla escolha no estilo do botão secundário. `groups` é uma lista
// de { label?, options: [{ value, label, count }] }.
const FilterMenu = ({ label, groups, selected, onChange, t }) => {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return undefined;
    const onPointer = (e) => {
      if (!rootRef.current?.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        rootRef.current?.querySelector("button")?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const toggle = (value) =>
    onChange(selected.includes(value) ? selected.filter((v) => v !== value) : [...selected, value]);

  const labelOf = (value) =>
    groups.flatMap((g) => g.options).find((o) => o.value === value)?.label ?? value;
  const summary =
    selected.length === 0
      ? t.filterAny
      : selected.length === 1
        ? labelOf(selected[0])
        : `${labelOf(selected[0])} +${selected.length - 1}`;

  return (
    <div className="filter-menu" ref={rootRef}>
      <button
        type="button"
        className={`filter-trigger ${selected.length ? "is-active" : ""}`}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="filter-trigger-label">{label}</span>
        <span className="filter-trigger-value">{summary}</span>
        <ChevronDown size={16} />
      </button>

      {open && (
        <div className="filter-panel" id={panelId} role="group" aria-label={label}>
          <div className="filter-panel-list">
            {groups.map((g) => (
              <div key={g.label ?? "all"} className="filter-panel-group">
                {g.label && <p className="filter-panel-heading">{g.label}</p>}
                {g.options.map((o) => {
                  const checked = selected.includes(o.value);
                  return (
                    <label key={o.value} className={`filter-option ${checked ? "is-checked" : ""}`}>
                      <input type="checkbox" checked={checked} onChange={() => toggle(o.value)} />
                      <span className="filter-check" aria-hidden>
                        {checked && <Check size={12} />}
                      </span>
                      <span className="filter-option-label">{o.label}</span>
                      <span className="filter-count">{o.count}</span>
                    </label>
                  );
                })}
              </div>
            ))}
          </div>
          <div className="filter-panel-foot">
            <button
              type="button"
              className="filter-clear"
              disabled={selected.length === 0}
              onClick={() => onChange([])}
            >
              {t.filterClear}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterMenu;
