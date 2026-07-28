"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { PROJECTS } from "@/lib/projects";
import Reveal from "./Reveal";

/**
 * Posições de campo de voleibol.
 * Fila da frente (junto à rede): 4 · 3 · 2
 * Fila de trás:                  5 · 6 · 1
 */
const COORD: Record<number, [number, number]> = {
  4: [0, 0],
  3: [1, 0],
  2: [2, 0],
  1: [2, 1],
  6: [1, 1],
  5: [0, 1],
};

/** Sentido real da rotação: 4 → 3 → 2 → 1 → 6 → 5 → 4 */
const CYCLE = [4, 3, 2, 1, 6, 5];
const START = [4, 3, 2, 1, 6, 5];
const GAP = 14;

function columnsFor(width: number) {
  if (width < 640) return 1;
  if (width < 980) return 2;
  return 3;
}

export default function Work() {
  const stageRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const closeRef = useRef<HTMLButtonElement>(null);

  const [positions, setPositions] = useState<number[]>(START);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [stageWidth, setStageWidth] = useState(0);
  const [cols, setCols] = useState(3);
  const [animate, setAnimate] = useState(false);

  /* ---------- medir o palco ---------- */
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;

    const measure = () => {
      setAnimate(false);
      setStageWidth(el.clientWidth);
      setCols(columnsFor(window.innerWidth));
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    window.addEventListener("resize", measure);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  /* ---------- rotação ---------- */
  const rotate = useCallback(() => {
    setAnimate(true);
    setPositions((prev) =>
      prev.map((p) => CYCLE[(CYCLE.indexOf(p) + 1) % CYCLE.length])
    );
  }, []);

  /* ---------- detalhe ---------- */
  const open = useCallback((index: number) => setOpenIndex(index), []);

  const close = useCallback(() => {
    setOpenIndex((prev) => {
      if (prev !== null) cardRefs.current[prev]?.focus();
      return null;
    });
  }, []);

  /** Cada salto entre projetos roda o campo — a transição é a rotação. */
  const step = useCallback(
    (direction: number) => {
      rotate();
      setOpenIndex((prev) =>
        prev === null
          ? prev
          : (prev + direction + PROJECTS.length) % PROJECTS.length
      );
    },
    [rotate]
  );

  useEffect(() => {
    if (openIndex === null) {
      document.body.classList.remove("is-locked");
      return;
    }

    document.body.classList.add("is-locked");
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex, close, step]);

  useEffect(() => {
    return () => document.body.classList.remove("is-locked");
  }, []);

  /* ---------- geometria ---------- */
  const cardW = stageWidth > 0 ? (stageWidth - GAP * (cols - 1)) / cols : 0;
  const cardH =
    cols === 3 ? Math.max(190, Math.min(250, stageWidth * 0.17)) : 170;
  const rows = Math.ceil(PROJECTS.length / cols);
  const stageH = rows * cardH + (rows - 1) * GAP;

  const slotFor = (position: number): [number, number] => {
    if (cols === 3) return COORD[position];
    const order = CYCLE.indexOf(position);
    return [order % cols, Math.floor(order / cols)];
  };

  const active = openIndex === null ? null : PROJECTS[openIndex];

  return (
    <section className="section wrap" id="trabalhos">
      <Reveal>
        <div className="section-head">
          <span className="mono">02</span>
          <h2>Trabalhos</h2>
          <div className="court-tools">
            <button className="tool" type="button" onClick={rotate}>
              Rodar →
            </button>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="court">
          <div className="net" />
          <div
            className="stage"
            ref={stageRef}
            style={{ height: stageWidth > 0 ? `${stageH}px` : "480px" }}
          >
            {PROJECTS.map((project, i) => {
              const [col, row] = slotFor(positions[i]);
              return (
                <button
                  key={project.slug}
                  type="button"
                  ref={(el) => {
                    cardRefs.current[i] = el;
                  }}
                  className={`card ${animate ? "" : "no-anim"}`.trim()}
                  onClick={() => open(i)}
                  style={{
                    width: `${cardW}px`,
                    height: `${cardH}px`,
                    transform: `translate(${col * (cardW + GAP)}px, ${
                      row * (cardH + GAP)
                    }px)`,
                    opacity: stageWidth > 0 ? 1 : 0,
                  }}
                  aria-label={`${project.title} — posição ${positions[i]}`}
                >
                  <span className="card-pos">{positions[i]}</span>
                  <span className="card-bottom">
                    <span className="card-title">{project.title}</span>
                    <span className="card-kind">{project.kind}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </Reveal>

      <p className="hint mono">Seis projetos, seis posições. Clica para entrar.</p>

      {/* ---------- Detalhe ---------- */}
      <div
        className={`detail ${active ? "open" : ""}`.trim()}
        role="dialog"
        aria-modal="true"
        aria-hidden={!active}
        aria-label={active ? active.title : "Detalhe do projeto"}
      >
        {active && openIndex !== null && (
          <div className="detail-inner">
            <div className="stagger" key={active.slug}>
              <div>
                <div className="detail-num">{positions[openIndex]}</div>
                <h2 className="detail-title">{active.title}</h2>
              </div>

              <div className="detail-body">
                <div>
                  {active.text.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>

                <div className="meta">
                  <div className="meta-row">
                    <span className="mono">Papel</span>
                    <div>{active.role}</div>
                  </div>
                  <div className="meta-row">
                    <span className="mono">Estado</span>
                    <div>{active.state}</div>
                  </div>
                  <div className="meta-row">
                    <span className="mono">Construído com</span>
                    <div className="chips">
                      {active.stack.map((item) => (
                        <span className="chip" key={item}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="detail-nav">
              <button className="tool" type="button" onClick={() => step(-1)}>
                ← Anterior
              </button>
              <button className="tool" type="button" onClick={() => step(1)}>
                Seguinte →
              </button>
              <span className="spacer" />
              <button
                className="tool"
                type="button"
                ref={closeRef}
                onClick={close}
              >
                Fechar ×
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
