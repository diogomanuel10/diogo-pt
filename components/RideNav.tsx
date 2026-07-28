"use client";

import { useCallback, useEffect, useState } from "react";

/** As estações do passeio, pela ordem do carril. */
const STATIONS = [
  { id: "inicio", label: "Início" },
  { id: "sobre", label: "Sobre" },
  { id: "trabalhos", label: "Trabalhos" },
  { id: "contacto", label: "Contacto" },
] as const;

export default function RideNav() {
  const [active, setActive] = useState<string>("inicio");

  /* ---------- estação ativa ---------- */
  useEffect(() => {
    const sections = STATIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => el !== null
    );
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const goTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  /* ---------- teclado: ← → entre estações, Esc para o topo ---------- */
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target && /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName)) return;

      if (event.key === "Escape") {
        goTo("inicio");
        return;
      }
      if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;

      event.preventDefault();
      const index = STATIONS.findIndex((s) => s.id === active);
      const step = event.key === "ArrowRight" ? 1 : -1;
      const next = STATIONS[index + step];
      if (next) goTo(next.id);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, goTo]);

  return (
    <header className="ridenav">
      <a
        className="ridenav-brand"
        href="#inicio"
        onClick={(e) => {
          e.preventDefault();
          goTo("inicio");
        }}
      >
        Diogo
      </a>

      <nav className="ridenav-links" aria-label="Estações">
        {STATIONS.map((station) => (
          <a
            key={station.id}
            href={`#${station.id}`}
            className={`ridenav-link ${active === station.id ? "is-active" : ""}`.trim()}
            aria-current={active === station.id ? "true" : undefined}
            onClick={(e) => {
              e.preventDefault();
              goTo(station.id);
            }}
          >
            {station.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
