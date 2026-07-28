import Reveal from "./Reveal";

export default function Contact() {
  return (
    <>
      <section className="section wrap contact station" id="contacto">
        <Reveal>
          <div className="section-head">
            <span className="mono">Fim da linha</span>
            <h2>Contacto</h2>
          </div>
        </Reveal>

        <Reveal>
          <h2 className="contact-call">
            Tens um problema
            <br />
            que vale a pena
            <br />
            resolver bem?
            <br />
            <a className="big" href="mailto:ola@exemplo.pt">
              Escreve-me →
            </a>
          </h2>
        </Reveal>
      </section>

      <footer className="site-footer wrap">
        <span className="mono">Senhora da Hora, Portugal</span>
        <span className="spacer" />
        <span className="mono">© {new Date().getFullYear()}</span>
      </footer>
    </>
  );
}
