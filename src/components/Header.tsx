"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { navItems, profile } from "@/content/profile";
import { cn } from "@/lib/cn";

export function Header() {
  const [active, setActive] = useState<(typeof navItems)[number]["id"] | "">("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          setActive(visible.target.id as (typeof navItems)[number]["id"]);
        }
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.25, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-colors",
        scrolled
          ? "border-line bg-background/70 backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="flex w-full items-center justify-between gap-4 py-4 pr-8 sm:gap-6 sm:pr-12">
        <Link
          href="/#top"
          className="font-serif text-xl tracking-tight text-foreground sm:text-2xl"
          style={{ marginLeft: "calc(var(--page-inset) + var(--content-pad))" }}
        >
          {profile.name.split(" ")[0]}
          <span className="text-accent">.</span>
        </Link>
        <div className="flex items-center gap-3 sm:gap-5">
          <nav aria-label="Primary">
            <ul className="flex flex-wrap justify-end gap-x-4 gap-y-1 sm:gap-x-5">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`/#${item.id}`}
                    onClick={() => setActive(item.id)}
                    className={cn(
                      "text-sm tracking-wide transition-colors sm:text-base",
                      active === item.id
                        ? "text-accent"
                        : "text-muted hover:text-foreground",
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a href="/#connect" className="talk-button talk-button-sm whitespace-nowrap">
            Let's Talk
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
