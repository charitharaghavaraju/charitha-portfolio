import type { ReactNode } from "react";

const STAR_PATH =
  "M12 2.1 14.7 8.4 21.6 9.2 16.4 13.8 17.9 20.6 12 17.3 6.1 20.6 7.6 13.8 2.4 9.2 9.3 8.4 12 2.1Z";

export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="font-serif text-3xl font-bold tracking-tight text-accent sm:text-4xl">
        <span className="inline-flex items-center gap-3">
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 shrink-0 sm:h-5 sm:w-5"
            aria-hidden="true"
          >
            <path fill="currentColor" d={STAR_PATH} />
          </svg>
          {title}
        </span>
      </h2>
      <div className="pt-8 pb-28">{children}</div>
    </section>
  );
}
