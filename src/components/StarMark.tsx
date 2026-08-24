const STAR_PATH =
  "M12 2.1 14.7 8.4 21.6 9.2 16.4 13.8 17.9 20.6 12 17.3 6.1 20.6 7.6 13.8 2.4 9.2 9.3 8.4 12 2.1Z";

export function StarMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="currentColor" d={STAR_PATH} />
    </svg>
  );
}
