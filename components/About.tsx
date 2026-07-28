import Reveal from "./Reveal";

const FACTS = [
  { value: "12", label: "Anos a programar" },
  { value: "6", label: "Projetos próprios" },
  { value: "2", label: "Produtos em uso real" },
];

export default function About() {
  return (
    <section className="section wrap station" id="sobre">
      <Reveal>
        <div className="section-head">
          <span className="mono">Paragem 1</span>
          <h2>Sobre</h2>
        </div>
      </Reveal>

      <div className="about-grid">
        <Reveal>
          <p>
            Construo software que dura: bases de dados que aguentam anos de
            histórico, processos que correm sozinhos, interfaces que ninguém
            precisa de manual para usar.
          </p>
          <p>
            Fora do ecrã, treino voleibol e coordeno formação de jovens — e, ao
            fim de semana, ponho-me a caminho: aventura, estrada, sítios onde há
            animais. Quase tudo o que construí por conta própria nasceu daí, de
            um problema que me chateou o suficiente na vida real para eu o
            resolver em código.
          </p>
          <p>
            É sempre a mesma receita: viver o problema por dentro antes de
            escrever a primeira linha.
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
