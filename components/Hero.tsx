import type { CSSProperties } from "react";

const NAME = ["D", "i", "o", "g", "o"];

/** Comprimento aproximado do traço, para a animação de desenho. */
const len = (value: number) => ({ "--len": String(value) }) as CSSProperties;

export default function Hero() {
  return (
    <header className="hero">
      <svg
        className="hero-court"
        viewBox="0 0 1000 620"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <path className="draw" style={len(2400)} d="M120 90 H880 V530 H120 Z" />
        <line className="draw" style={len(800)} x1="120" y1="310" x2="880" y2="310" />
        <line className="draw" style={len(800)} x1="120" y1="200" x2="880" y2="200" />
        <line className="draw" style={len(800)} x1="120" y1="420" x2="880" y2="420" />
        <path
          className="draw arc"
          style={len(1200)}
          d="M180 500 C 380 120, 620 120, 830 470"
        />
        <circle className="draw" style={len(40)} cx="830" cy="470" r="6" />
      </svg>

      <div className="hero-inner wrap">
        <p className="eyebrow mono">Programador · Treinador de voleibol</p>

        <h1 className="name">
          {NAME.map((letter, i) => (
            <span className="name-mask" key={i}>
              <span style={{ animationDelay: `${0.15 + i * 0.07}s` }}>{letter}</span>
            </span>
          ))}
        </h1>

        <p className="thesis">
          Há 12 anos que construo software.{" "}
          <strong>
            Os projetos de que mais me orgulho nasceram de problemas que vivo todas
            as semanas
          </strong>{" "}
          — dentro de um pavilhão, não num briefing.
        </p>
      </div>

      <div className="scroll-cue mono">Rodar</div>
    </header>
  );
}
