"use client";

import { useEffect, useState } from "react";
import { applyTheme, readTheme, type Theme } from "@/lib/theme";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    setTheme(readTheme());
  }, []);

  const nextTheme: Theme = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      aria-label={theme ? `Switch to ${nextTheme} mode` : "Toggle color mode"}
      title={theme ? `Switch to ${nextTheme} mode` : "Toggle color mode"}
      onClick={() => {
        const current = theme ?? readTheme();
        const next: Theme = current === "dark" ? "light" : "dark";
        applyTheme(next);
        setTheme(next);
      }}
      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-foreground transition-colors hover:border-accent hover:text-accent"
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 5.2a.9.9 0 0 1 .9-.9h.1a.9.9 0 0 1 0 1.8h-.1A.9.9 0 0 1 12 5.2Zm0 12.6a.9.9 0 0 1 .9.9v.1a.9.9 0 0 1-1.8 0v-.1a.9.9 0 0 1 .9-.9ZM5.2 12a.9.9 0 0 1-.9.9h-.1a.9.9 0 1 1 0-1.8h.1A.9.9 0 0 1 5.2 12Zm14.6 0a.9.9 0 0 1 .9-.9h.1a.9.9 0 0 1 0 1.8h-.1a.9.9 0 0 1-.9-.9ZM7.4 7.4a.9.9 0 0 1-1.27 0l-.08-.08a.9.9 0 0 1 1.27-1.27l.08.08A.9.9 0 0 1 7.4 7.4Zm10.47 10.47a.9.9 0 0 1-1.27 0l-.08-.08a.9.9 0 1 1 1.27-1.27l.08.08a.9.9 0 0 1 0 1.27ZM7.4 16.6a.9.9 0 0 1 0 1.27l-.08.08A.9.9 0 0 1 6.05 16.68l.08-.08A.9.9 0 0 1 7.4 16.6Zm10.47-10.47a.9.9 0 0 1 0 1.27l-.08.08a.9.9 0 1 1-1.27-1.27l.08-.08a.9.9 0 0 1 1.27 0ZM12 8.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2Z"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        fill="currentColor"
        d="M14.6 4.2a.8.8 0 0 1 .86 1.16 7.2 7.2 0 1 0 3.18 3.18.8.8 0 0 1 1.16.86A8.8 8.8 0 1 1 14.6 4.2Z"
      />
    </svg>
  );
}
