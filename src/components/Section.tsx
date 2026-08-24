import type { ReactNode } from "react";
import { StarMark } from "@/components/StarMark";

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
          <StarMark className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
          {title}
        </span>
      </h2>
      <div className="pt-8 pb-28">{children}</div>
    </section>
  );
}
