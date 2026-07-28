import type { AnimalId } from "@/lib/projects";

/**
 * Silhuetas de safari, estilizadas e consistentes.
 * Uma forma, um traço que identifica o animal. Herdam a cor via currentColor,
 * por isso nunca trazem hex — a cor vem de quem as usa (tokens no :root).
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
      <path d="M40 92 V40 q0 -12 12 -16 l6 -2" fill="none" stroke="currentColor" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" />
      <ellipse cx="66" cy="20" rx="13" ry="9" transform="rotate(-24 66 20)" />
      <path d="M60 14 v-9 M74 10 v-9" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M30 90 V56 M50 90 V60" fill="none" stroke="currentColor" strokeWidth="9" strokeLinecap="round" />
    </g>
  ),
  suricata: (
    <g>
      <path d="M50 90 q-14 0 -14 -22 q0 -30 14 -46 q14 16 14 46 q0 22 -14 22 z" />
      <ellipse cx="50" cy="20" rx="11" ry="13" />
      <circle cx="42" cy="14" r="4" />
      <circle cx="58" cy="14" r="4" />
      <path d="M64 40 q22 6 26 40" fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
    </g>
  ),
  zebra: (
    <g>
      <path d="M22 90 V60 q0 -22 24 -24 l30 -2 q16 0 20 14 l6 20" fill="none" stroke="currentColor" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M90 44 q10 -4 12 -18" fill="none" stroke="currentColor" strokeWidth="9" strokeLinecap="round" />
      <path d="M22 90 V70 M42 90 V70 M76 90 V70 M96 90 V72" fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
      <path d="M40 44 l-4 14 M54 42 l-4 15 M68 44 l-4 14" fill="none" stroke="var(--night)" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
    </g>
  ),
  rinoceronte: (
    <g>
      <ellipse cx="60" cy="52" rx="40" ry="26" />
      <path d="M20 52 q-16 -2 -18 -14 q10 2 14 -6 q6 8 8 8" />
      <path d="M6 34 q-4 -12 6 -18 q2 8 6 10 z" />
      <path d="M12 26 q-2 -8 5 -12 q1 6 4 8 z" />
      <ellipse cx="36" cy="34" rx="6" ry="8" />
      <rect x="34" y="70" width="11" height="24" rx="4" />
      <rect x="52" y="72" width="11" height="22" rx="4" />
      <rect x="72" y="72" width="11" height="22" rx="4" />
      <rect x="88" y="70" width="11" height="24" rx="4" />
    </g>
  ),
  guepardo: (
    <g>
      <path d="M14 66 q0 -14 18 -16 l40 -3 q18 -1 22 10" fill="none" stroke="currentColor" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
      <ellipse cx="96" cy="52" rx="12" ry="9" />
      <path d="M94 46 v-6 M102 46 v-6" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M20 64 V88 M40 66 V88 M70 66 V88 M86 64 V86" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
      <path d="M14 64 q-12 6 -12 -6" fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
      <g fill="var(--night)" opacity="0.45">
        <circle cx="40" cy="58" r="2.4" />
        <circle cx="54" cy="55" r="2.4" />
        <circle cx="68" cy="57" r="2.4" />
        <circle cx="60" cy="64" r="2.4" />
        <circle cx="46" cy="66" r="2.4" />
      </g>
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
