"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { navItems, profile } from "@/content/profile";
import { cn } from "@/lib/cn";

export function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState<(typeof navItems)[number]["id"] | "">("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const node = headerRef.current;
    if (!node) {
      return;
    }

    const setHeight = () => {
      document.documentElement.style.setProperty(
        "--header-height",
        `${node.getBoundingClientRect().height}px`,
      );
    };

    setHeight();
    const observer = new ResizeObserver(setHeight);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

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
      ref={headerRef}
      className={cn(
        "sticky top-0 z-40 border-b transition-colors",
        scrolled
          ? "border-line bg-background/70 backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="page-column flex items-center justify-between gap-3 py-4 md:gap-6">
        <Link
          href="/#top"
          className="min-w-0 shrink font-serif text-xl tracking-tight text-foreground md:text-2xl"
        >
          {profile.name.split(" ")[0]}
          <span className="text-accent">.</span>
        </Link>
        <div className="flex shrink-0 items-center gap-3 md:gap-5">
          <nav className="hidden md:block" aria-label="Primary">
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
          <a
            href={`mailto:${profile.email}`}
            className="talk-button talk-button-sm whitespace-nowrap"
          >
            Let's Talk
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
