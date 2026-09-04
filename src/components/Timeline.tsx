"use client";

import { SaturnMark } from "@/components/CelestialMarks";
import { Reveal } from "@/components/Reveal";
import type { ExperienceItem } from "@/content/experience";

type TimelineProps = {
  items: ExperienceItem[];
};

export function Timeline({ items }: TimelineProps) {
  return (
    <ol className="relative space-y-20">
      {items.map((item, index) => (
        <li key={`${item.company}-${item.start}`} className="relative">
          <article className="grid gap-8 md:grid-cols-[minmax(15rem,20rem)_1fr] md:gap-12 lg:grid-cols-[22rem_1fr]">
            <header className="self-start md:sticky md:top-28">
              <p className="font-mono text-sm tracking-wide text-warm">
                {item.start} — {item.end}
              </p>
              <h3 className="mt-2 font-serif text-3xl tracking-tight break-words">
                {item.title}
              </h3>
              <p className="mt-2 text-base text-accent">
                {item.company}
                <br />
                {item.location}
              </p>
            </header>
            <Reveal delay={index * 70}>
              <ul className="space-y-5 text-base leading-8 text-muted">
                {item.bullets.map((bullet) => (
                  <li
                    key={bullet.slice(0, 48)}
                    className="grid grid-cols-[auto_1fr] gap-x-3"
                  >
                    <SaturnMark className="resume-planet resume-planet-b mt-[0.7em]" />
                    <span className="min-w-0 break-words">{bullet}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm tracking-wide text-muted">
                {item.tags.join(" · ")}
              </p>
            </Reveal>
          </article>
        </li>
      ))}
    </ol>
  );
}
