type P = { size?: number };

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const Check = ({ size = 18 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="10" fill="currentColor" />
    <path d="M7.5 12.5l3 3 6-6.5" {...stroke} stroke="var(--on-accent)" />
  </svg>
);

export const Dpad = ({ size = 22 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="3.5" />
  </svg>
);

export const Trackpad = ({ size = 22 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
    <rect x="3" y="4" width="18" height="16" rx="3" />
    <circle cx="12" cy="12" r="2.5" />
  </svg>
);

export const Keyboard = ({ size = 22 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
    <rect x="2.5" y="6" width="19" height="12" rx="2.5" />
    <path d="M6.5 10h1M10.5 10h1M14.5 10h1M8 14h8" />
  </svg>
);

export const Chevron = ({ size = 14 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
    <path d="M9 6l6 6-6 6" />
  </svg>
);

export const Plus = ({ size = 18 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);
