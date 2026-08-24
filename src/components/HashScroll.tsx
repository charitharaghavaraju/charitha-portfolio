"use client";

import { useEffect } from "react";

export function HashScroll() {
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) {
      return;
    }
    const frame = requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  return null;
}
