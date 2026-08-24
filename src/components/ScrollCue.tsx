"use client";

import { useEffect, useState } from "react";
import { MoonMark, SunMark } from "@/components/CelestialMarks";
import { cn } from "@/lib/cn";

export function ScrollCue() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 56);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#about"
      className={cn("scroll-fly", scrolled && "is-scrolled")}
      aria-label="Scroll down"
    >
      <SunMark className="scroll-fly-body scroll-fly-sun" />
      <MoonMark className="scroll-fly-body scroll-fly-moon" />
      <span className="scroll-fly-label">Scroll</span>
    </a>
  );
}
