import type { AnimalId } from "@/lib/projects";

/**
 * Silhuetas de safari, estilizadas e consistentes.
 * Construídas com formas cheias (elipses, retângulos, paths preenchidos), como
 * o elefante — lê melhor do que traços soltos. Herdam a cor via currentColor,
 * por isso nunca trazem hex; os pormenores escuros usam var(--night).
 * Todas assentam numa linha de chão a ~y=92, viewBox 0 0 110 100.
 */
const SHAPES: Record<AnimalId, React.ReactNode> = {
  elefante: (
    <g>
      <ellipse cx="66" cy="48" rx="36" ry="27" />
      <circle cx="34" cy="44" r="21" />
      <ellipse cx="40" cy="36" rx="15" ry="17" />
      <path d="M18 48 q-9 8 -6 26 q1 7 8 7 q6 0 5 -8 q-2 -13 7 -19 z" />
      <rect x="34" y="62" width="10" height="30" rx="4" />
      <rect x="52" y="66" width="10" height="26" rx="4" />
      <rect x="72" y="66" width="10" height="26" rx="4" />
      <rect x="90" y="62" width="10" height="30" rx="4" />
      <path d="M100 46 q9 1 8 12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </g>
  ),
  girafa: (
    <g>
      <rect x="40" y="52" width="6" height="40" rx="3" />
      <rect x="50" y="54" width="6" height="38" rx="3" />
      <rect x="64" y="52" width="6" height="40" rx="3" />
      <rect x="74" y="54" width="6" height="38" rx="3" />
      <ellipse cx="58" cy="52" rx="26" ry="11" />
      <path d="M66 52 L74 50 L88 8 L79 7 Z" />
      <ellipse cx="84" cy="7" rx="8" ry="5" transform="rotate(-28 84 7)" />
      <path d="M80 3 v-5 M86 4 v-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M32 50 q-9 5 -7 16" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </g>
  ),
  suricata: (
    <g>
      <path d="M50 92 q-15 0 -15 -21 q0 -33 15 -51 q15 18 15 51 q0 21 -15 21 z" />
      <ellipse cx="50" cy="19" rx="11" ry="13" />
      <circle cx="41" cy="11" r="4.5" />
      <circle cx="59" cy="11" r="4.5" />
      <circle cx="50" cy="24" r="2.6" fill="var(--night)" />
      <ellipse cx="44" cy="42" rx="4" ry="10" />
      <ellipse cx="56" cy="42" rx="4" ry="10" />
      <path d="M63 48 q22 3 23 44" fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
    </g>
  ),
  zebra: (
    <g>
      <ellipse cx="48" cy="54" rx="30" ry="15" />
      <path d="M70 52 L80 46 L83 32 L73 33 Z" />
      <ellipse cx="88" cy="30" rx="11" ry="6.5" transform="rotate(-32 88 30)" />
      <path d="M82 22 l-2 -9 M88 22 l3 -9" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <rect x="30" y="60" width="6" height="32" rx="3" />
      <rect x="42" y="62" width="6" height="30" rx="3" />
      <rect x="58" y="60" width="6" height="32" rx="3" />
      <rect x="68" y="62" width="6" height="30" rx="3" />
      <path d="M19 50 q-9 5 -6 15" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <g stroke="var(--night)" strokeWidth="3" strokeLinecap="round" opacity="0.5">
        <path d="M40 42 l-3 22" />
        <path d="M50 41 l-3 24" />
        <path d="M60 42 l-3 22" />
      </g>
    </g>
  ),
  rinoceronte: (
    <g>
      <ellipse cx="64" cy="56" rx="38" ry="22" />
      <ellipse cx="26" cy="60" rx="18" ry="15" />
      <path d="M12 60 q-7 -18 2 -30 q7 12 7 25 z" />
      <path d="M26 42 q-1 -11 6 -14 q2 8 1 14 z" />
      <path d="M40 40 q2 -10 9 -10 q0 8 -3 12 z" />
      <rect x="38" y="72" width="11" height="22" rx="4" />
      <rect x="56" y="74" width="11" height="20" rx="4" />
      <rect x="74" y="74" width="11" height="20" rx="4" />
      <rect x="90" y="72" width="11" height="22" rx="4" />
      <path d="M101 52 q7 0 7 11" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </g>
  ),
  guepardo: (
    <g>
      <ellipse cx="48" cy="57" rx="35" ry="12" />
      <path d="M72 60 L82 54 L95 46 L92 57 L80 64 Z" />
      <circle cx="97" cy="43" r="8.5" />
      <path d="M92 36 l-2 -6 M103 36 l2 -6" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <rect x="24" y="63" width="5" height="29" rx="2.5" />
      <rect x="36" y="65" width="5" height="27" rx="2.5" />
      <rect x="58" y="63" width="5" height="29" rx="2.5" />
      <rect x="70" y="65" width="5" height="27" rx="2.5" />
      <path d="M14 59 q-13 1 -11 -9" fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
      <g fill="var(--night)" opacity="0.45">
        <circle cx="38" cy="55" r="2.2" />
        <circle cx="50" cy="53" r="2.2" />
        <circle cx="62" cy="55" r="2.2" />
        <circle cx="44" cy="61" r="2.2" />
        <circle cx="56" cy="60" r="2.2" />
      </g>
      <circle cx="94" cy="41" r="1.6" fill="var(--night)" />
    </g>
  ),
};

type Props = {
  animal: AnimalId;
  className?: string;
};

export default function Animal({ animal, className }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 110 100"
      fill="currentColor"
      aria-hidden="true"
      role="presentation"
    >
      {SHAPES[animal]}
    </svg>
  );
}
