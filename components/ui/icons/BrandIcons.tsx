import type { ReactNode } from "react";

export interface BrandIconProps {
  size?: number;
  className?: string;
}

/**
 * Zestaw ikon marki 360 Connect.
 *
 * Spójny język wizualny: outline w `currentColor` + jeden sygnałowy
 * akcent (kropka w kolorze --signal) jako podpis marki — nawiązanie do
 * sygnalnej kropki z logo. Kropka ma klasę `brand-dot`, dzięki czemu
 * delikatnie „pulsuje" po najechaniu na element nadrzędny (patrz globals.css).
 */
function Svg({ size = 20, className, children }: BrandIconProps & { children: ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

const signalDot = (cx: number, cy: number, r = 2) => (
  <circle cx={cx} cy={cy} r={r} fill="var(--signal)" stroke="none" className="brand-dot" />
);

/** Wzrost / mierzalne efekty. */
export function IconResults(props: BrandIconProps) {
  return (
    <Svg {...props}>
      <polyline points="3 16.5 9 10.5 13 14.5 19.5 7.5" />
      {signalDot(19.5, 7.5, 2.1)}
    </Svg>
  );
}

/** Szybki raport / dokument. */
export function IconReport(props: BrandIconProps) {
  return (
    <Svg {...props}>
      <path d="M13 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9z" />
      <polyline points="13 3 13 9 19 9" />
      <line x1="8.5" y1="13" x2="13.5" y2="13" />
      <line x1="8.5" y1="16.5" x2="12" y2="16.5" />
      {signalDot(16.4, 16.6, 1.9)}
    </Svg>
  );
}

/** Brak zobowiązań / elastyczność (otwarta kłódka). */
export function IconNoLockIn(props: BrandIconProps) {
  return (
    <Svg {...props}>
      <rect x="4.5" y="10.5" width="15" height="10.5" rx="2.2" />
      <path d="M8 10.5V7a4 4 0 0 1 7.7-1.4" />
      {signalDot(12, 15.7, 1.7)}
    </Svg>
  );
}

/** Bezpieczeństwo danych / RODO (tarcza). */
export function IconGdpr(props: BrandIconProps) {
  return (
    <Svg {...props}>
      <path d="M12 3l7 2.6v5.4c0 4.4-3 7.4-7 8.8-4-1.4-7-4.4-7-8.8V5.6z" />
      <polyline points="9 12 11 14 15.2 9.6" stroke="var(--signal)" className="brand-dot" />
    </Svg>
  );
}

/** Certyfikacja / kompetencje (medal). */
export function IconCertified(props: BrandIconProps) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="9" r="6" />
      <path d="M8.6 14.2 7 21l5-2.8L17 21l-1.6-6.8" />
      {signalDot(12, 9, 2)}
    </Svg>
  );
}

/** Audyt / analiza (lupa). */
export function IconAudit(props: BrandIconProps) {
  return (
    <Svg {...props}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <line x1="20" y1="20" x2="15.6" y2="15.6" />
      {signalDot(10.5, 10.5, 2)}
    </Svg>
  );
}
