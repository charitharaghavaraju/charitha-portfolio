import type { ReactNode } from "react";
import { HashScroll } from "@/components/HashScroll";
import { Header } from "@/components/Header";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SpaceBackground } from "@/components/SpaceBackground";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <SpaceBackground />
      <ScrollProgress />
      <HashScroll />
      <Header />
      <main className="page-column relative z-10">
        {children}
      </main>
    </>
  );
}
