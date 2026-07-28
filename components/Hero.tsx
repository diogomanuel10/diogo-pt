"use client";

const NAME = ["D", "i", "o", "g", "o"];

export default function Hero() {
  const start = () => {
    const el = document.getElementById("sobre");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="hero" id="inicio">
      <div className="hero-inner wrap">
        <p className="eyebrow mono">Programador · Treinador · Aventureiro</p>

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
            Os projetos de que mais me orgulho nasceram de problemas que vivi
            de verdade
          </strong>{" "}
          — não de um briefing. Entra, que a viagem passa por todos.
        </p>

        <button className="start" type="button" onClick={start}>
          Começar o passeio
          <span className="start-arrow" aria-hidden="true">
            ↓
          </span>
        </button>
      </div>

      <div className="scroll-cue mono" aria-hidden="true">
        A viagem
      </div>
    </header>
  );
}
