"use client";

import { useEffect, useMemo, useRef, useState } from "react";

/**
 * O carril e o carro — a assinatura do site.
 *
 * O carril é uma linha em SVG dimensionada 1:1 aos pixéis da viewport (sem
 * escala de viewBox) para que as coordenadas do desenho e as do `offset-path`
 * do carro coincidam ao pixel. O carro percorre o carril com CSS motion path;
 * a distância percorrida liga-se ao progresso do scroll — rolar (ou carregar
 * num atalho, que rola a página) faz o carro andar. Movimento concentrado:
 * a ousadia está aqui, o resto revela-se simples.
 */

/** Gera o traçado de montanha-russa em função da viewport. */
function trackPath(w: number, h: number): string {
  if (!w || !h) return "";
  const m = 48;
  const midY = h * 0.52;
  const amp = Math.min(h * 0.22, 150);
  return [
    `M ${-m} ${midY + amp * 0.2}`,
    `C ${w * 0.1} ${midY + amp * 0.35}, ${w * 0.14} ${midY - amp}, ${w * 0.26} ${midY - amp}`,
    `C ${w * 0.36} ${midY - amp}, ${w * 0.36} ${midY + amp * 0.55}, ${w * 0.47} ${midY + amp * 0.55}`,
    `C ${w * 0.58} ${midY + amp * 0.55}, ${w * 0.59} ${midY - amp * 0.92}, ${w * 0.71} ${midY - amp * 0.92}`,
    `C ${w * 0.83} ${midY - amp * 0.92}, ${w * 0.85} ${midY + amp * 0.12}, ${w + m} ${midY + amp * 0.35}`,
  ].join(" ");
}

export default function Ride() {
  const carRef = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState({ w: 0, h: 0 });

  const d = useMemo(() => trackPath(dims.w, dims.h), [dims]);

  /* ---------- medir a viewport ---------- */
  useEffect(() => {
    const measure = () =>
      setDims({ w: window.innerWidth, h: window.innerHeight });
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  /* ---------- ligar o carro ao scroll ---------- */
  useEffect(() => {
    const car = carRef.current;
    if (!car || !d) return;

    car.style.setProperty("--path", `path("${d}")`);

    let frame = 0;
    const update = () => {
      frame = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      car.style.setProperty("--d", `${(progress * 100).toFixed(2)}%`);
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [d]);

  return (
    <div className="ride" aria-hidden="true">
      {d && (
        <svg
          className="ride-track"
          width={dims.w}
          height={dims.h}
          viewBox={`0 0 ${dims.w} ${dims.h}`}
          preserveAspectRatio="none"
        >
          <path className="rail-bed" d={d} />
          <path className="rail" d={d} />
        </svg>
      )}

      <div className="car" ref={carRef}>
        <svg viewBox="0 0 60 44" aria-hidden="true">
          {/* Carrinho visto de lado, nariz para a direita. */}
          <path
            className="car-body"
            d="M4 14 h40 q8 0 10 8 l2 8 q1 4 -3 4 H5 q-4 0 -4 -5 V18 q0 -4 3 -4 z"
          />
          <circle className="car-wheel" cx="16" cy="38" r="6" />
          <circle className="car-wheel" cx="44" cy="38" r="6" />
          <path className="car-flag" d="M10 14 V2 h14 l-4 4 l4 4 H12" />
        </svg>
      </div>
    </div>
  );
}
