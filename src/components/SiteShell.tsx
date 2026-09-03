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
        className="relative z-10 max-w-[70rem] min-w-0"
        style={{
          marginLeft: "var(--page-inset)",
          marginRight: "var(--page-inset)",
          paddingLeft: "var(--content-pad)",
          paddingRight: "var(--content-pad)",
        }}
      >
        {children}
      </main>
    </>
  );
}
