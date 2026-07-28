import Reveal from "./Reveal";

const FACTS = [
  { value: "12", label: "Anos a programar" },
  { value: "6", label: "Projetos próprios" },
  { value: "2", label: "Produtos em uso real" },
];

export default function About() {
  return (
    <section className="section wrap" id="sobre">
      <Reveal>
        <div className="section-head">
          <span className="mono">01</span>
          <h2>Sobre</h2>
        </div>
      </Reveal>

      <div className="about-grid">
        <Reveal>
          <p>
            Passo os dias a desenhar sistemas: bases de dados que aguentam anos
            de histórico, processos que correm sozinhos, interfaces que não
            obrigam ninguém a ler um manual.
          </p>
          <p>
            Ao fim da tarde troco o teclado pelo pavilhão. Treino voleibol e
            coordeno formação de jovens — e foi daí que veio a maior parte do
            que construí por conta própria. Quando uma coisa me irrita o
            suficiente durante uma época inteira, acabo por a resolver em
            código.
          </p>
          <p>
            É esse o método: perceber o problema por dentro antes de escrever a
            primeira linha.
          </p>
        </Reveal>

        <Reveal className="facts">
          {FACTS.map((fact) => (
            <div className="fact" key={fact.label}>
              <b>{fact.value}</b>
              <span className="mono">{fact.label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
