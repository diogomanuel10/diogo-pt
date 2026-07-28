/**
 * O cenário do safari: fixo, atrás de tudo, imóvel de propósito.
 * O céu é um gradiente nos tokens (ver .scene em globals.css); aqui ficam o
 * sol, as colinas em camadas e as acácias. Sem parallax — o movimento é só
 * do carro.
 */
export default function Scene() {
  return (
    <div className="scene" aria-hidden="true">
      <div className="sun" />
      <svg
        className="scene-art"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMax slice"
      >
        {/* colina distante */}
        <path className="hill hill-far" d="M0 640 Q 360 560 760 620 T 1440 600 V900 H0 Z" />
        {/* colina média */}
        <path className="hill hill-mid" d="M0 720 Q 420 660 900 710 T 1440 700 V900 H0 Z" />
        {/* colina próxima */}
        <path className="hill hill-near" d="M0 800 Q 500 760 1000 800 T 1440 790 V900 H0 Z" />

        {/* acácia à esquerda */}
        <g className="acacia" transform="translate(210 640)">
          <path className="trunk" d="M-4 0 V-70 M-4 -40 l-22 -14 M-4 -48 l24 -16" />
          <path className="canopy" d="M-96 -74 q96 -52 200 0 q-100 22 -200 0 z" />
        </g>
        {/* acácia à direita, mais pequena */}
        <g className="acacia" transform="translate(1170 700) scale(0.72)">
          <path className="trunk" d="M-4 0 V-70 M-4 -40 l-22 -14 M-4 -48 l24 -16" />
          <path className="canopy" d="M-96 -74 q96 -52 200 0 q-100 22 -200 0 z" />
        </g>

        {/* bando de aves ao longe */}
        <g className="birds">
          <path d="M980 250 q10 -8 20 0 q10 -8 20 0" />
          <path d="M1040 230 q8 -6 16 0 q8 -6 16 0" />
          <path d="M1015 285 q7 -6 14 0 q7 -6 14 0" />
        </g>
      </svg>
    </div>
  );
}
