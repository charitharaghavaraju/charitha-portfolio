export function SunMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <circle cx="16" cy="16" r="6.2" fill="currentColor" />
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      >
        <path d="M16 3.2v3.2M16 25.6v3.2M3.2 16h3.2M25.6 16h3.2" />
        <path d="M7 7l2.3 2.3M22.7 22.7 25 25M7 25l2.3-2.3M22.7 9.3 25 7" />
      </g>
    </svg>
  );
}

export function MoonMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M20.4 5.2a11 11 0 1 0 6.4 17.2 9.2 9.2 0 0 1-6.4-17.2Z"
      />
    </svg>
  );
}

export function PlanetMarks({ className }: { className?: string }) {
  return (
    <span className={className} aria-hidden="true">
      <svg viewBox="0 0 18 18" className="resume-planet resume-planet-a">
        <circle cx="9" cy="9" r="6.5" fill="currentColor" />
        <ellipse
          cx="9"
          cy="9"
          rx="6.5"
          ry="2.4"
          fill="none"
          stroke="var(--background)"
          strokeWidth="1.2"
          opacity="0.55"
        />
      </svg>
      <svg viewBox="0 0 22 16" className="resume-planet resume-planet-b">
        <ellipse
          cx="11"
          cy="8"
          rx="8"
          ry="2.1"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <circle cx="11" cy="8" r="4.4" fill="currentColor" />
      </svg>
      <svg viewBox="0 0 14 14" className="resume-planet resume-planet-c">
        <circle cx="7" cy="7" r="5.4" fill="currentColor" />
        <circle cx="5.2" cy="6" r="1.2" fill="var(--background)" opacity="0.45" />
        <circle cx="8.6" cy="8.4" r="0.8" fill="var(--background)" opacity="0.35" />
      </svg>
    </span>
  );
}
