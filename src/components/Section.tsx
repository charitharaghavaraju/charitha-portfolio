import type { ReactNode } from "react";

export function Section({
  id,
  index,
  title,
  children,
}: {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-line">
      <header className="sticky top-16 z-20 flex items-baseline justify-between bg-background/70 py-4 backdrop-blur-md">
        <h2 className="font-serif text-4xl tracking-tight sm:text-5xl">{title}</h2>
        <span className="font-mono text-sm text-accent">{index}</span>
      </header>
      <div className="pt-6 pb-28">{children}</div>
    </section>
  );
}
