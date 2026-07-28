import { PROJECTS } from "@/lib/projects";
import Animal from "./Animal";
import Reveal from "./Reveal";

/**
 * Trabalhos — seis avistamentos ao longo do carril.
 * Cada projeto é um painel que se atravessa ao rolar. Sem modal e sem
 * captura de teclado, para não brigar com os atalhos (← → entre estações).
 */
export default function Work() {
  return (
    <section className="section wrap station" id="trabalhos">
      <Reveal>
        <div className="section-head">
          <span className="mono">Paragem 2</span>
          <h2>Trabalhos</h2>
          <p className="section-note mono">
            Seis avistamentos · seis animais
          </p>
        </div>
      </Reveal>

      <div className="sightings">
        {PROJECTS.map((project, i) => (
          <Reveal key={project.slug}>
            <article className="sighting" aria-labelledby={`s-${project.slug}`}>
              <div className="sighting-animal">
                <Animal animal={project.animal} className="animal" />
                <span className="sighting-index mono">
                  {String(i + 1).padStart(2, "0")} / 06
                </span>
              </div>

              <div className="sighting-body">
                <span className="sighting-kind mono">{project.kind}</span>
                <h3 className="sighting-title" id={`s-${project.slug}`}>
                  {project.title}
                </h3>
                <p className="sighting-line">{project.sighting}</p>

                <figure className="sighting-shot">
                  {project.shot ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={project.shot} alt={`Captura de ${project.title}`} />
                  ) : (
                    <span className="sighting-shot-empty mono">Captura em breve</span>
                  )}
                </figure>

                {project.text.map((paragraph, p) => (
                  <p className="sighting-text" key={p}>
                    {paragraph}
                  </p>
                ))}

                <div className="meta">
                  <div className="meta-row">
                    <span className="mono">Papel</span>
                    <div>{project.role}</div>
                  </div>
                  <div className="meta-row">
                    <span className="mono">Estado</span>
                    <div>{project.state}</div>
                  </div>
                  <div className="meta-row">
                    <span className="mono">Construído com</span>
                    <div className="chips">
                      {project.stack.map((item) => (
                        <span className="chip" key={item}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
