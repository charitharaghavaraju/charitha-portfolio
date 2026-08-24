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
      <main
        className="relative z-10 w-full max-w-4xl pr-8 sm:pr-12"
        style={{
          marginLeft: "var(--page-inset)",
          paddingLeft: "var(--content-pad)",
        }}
      >
        {children}
      </main>
    </>
  );
}
