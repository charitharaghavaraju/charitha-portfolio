"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/Reveal";
import type { ExperienceItem } from "@/content/experience";
import { cn } from "@/lib/cn";

type TimelineProps = {
  items: ExperienceItem[];
};

export function Timeline({ items }: TimelineProps) {
  const [openKey, setOpenKey] = useState<string | null>(
    items[0] ? `${items[0].company}-${items[0].start}` : null,
  );

  return (
    <ol className="relative border-l border-line">
      {items.map((item, index) => {
        const key = `${item.company}-${item.start}`;
        const open = openKey === key;
        return (
          <li key={key} className="relative pl-8">
            <span className="absolute top-2 -left-px h-2 w-2 -translate-x-1/2 rounded-full bg-accent" />
            <Reveal delay={index * 70}>
              <TimelineItem
                item={item}
                open={open}
                onToggle={() => setOpenKey(open ? null : key)}
              />
            </Reveal>
          </li>
        );
      })}
    </ol>
  );
}

function TimelineItem({
  item,
  open,
  onToggle,
}: {
  item: ExperienceItem;
  open: boolean;
  onToggle: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (panelRef.current) {
      setHeight(panelRef.current.scrollHeight);
    }
  }, [open, item.bullets]);

  return (
    <article className="pb-12">
      <button
        type="button"
        className="w-full text-left"
        aria-expanded={open}
        onClick={onToggle}
      >
        <p className="font-mono text-sm tracking-wide text-accent">
          {item.start} — {item.end}
        </p>
        <h3 className="mt-2 font-serif text-3xl tracking-tight">
          {item.title}
        </h3>
        <p className="mt-1 text-base text-muted">
          {item.company} · {item.location}
        </p>
      </button>
      <div
        className="overflow-hidden transition-[max-height,opacity] duration-500 ease-out"
        style={{ maxHeight: open ? height : 0, opacity: open ? 1 : 0 }}
      >
        <div ref={panelRef} className="pt-4">
          <ul className="space-y-3 text-base leading-8 text-muted">
            {item.bullets.map((bullet) => (
              <li key={bullet.slice(0, 48)}>{bullet}</li>
            ))}
          </ul>
          <p className="mt-4 text-sm tracking-wide text-muted">
            {item.tags.join(" · ")}
          </p>
        </div>
      </div>
      <p className={cn("mt-3 text-sm text-muted", open && "opacity-70")}>
        {open ? "Close" : "Read"}
      </p>
    </article>
  );
}
