"use client";

import { useEffect } from "react";

export function HashRedirect({ id }: { id: string }) {
  useEffect(() => {
    window.location.replace(`/#${id}`);
  }, [id]);

  return <p className="text-sm text-muted">Opening {id}…</p>;
}
