import { SaturnMark } from "@/components/CelestialMarks";
import { Reveal } from "@/components/Reveal";
import { SocialLinks } from "@/components/SocialLinks";
import { StarMark } from "@/components/StarMark";
import { profile } from "@/content/profile";

export function Footer() {
  return (
    <footer id="connect" className="scroll-mt-28 mt-auto pb-24">
      <Reveal>
        <h2 className="font-serif text-3xl font-bold tracking-tight text-accent sm:text-4xl">
          <span className="inline-flex items-center gap-3">
            <StarMark className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
            Get in Touch
          </span>
        </h2>
        <p className="mt-8 max-w-md text-xl leading-8 text-muted">
          A role, a research idea, or a hello — I’ll read it.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-flex max-w-full items-center break-all rounded-2xl border border-warm/40 px-5 py-4 font-mono text-sm tracking-wide text-accent transition-colors hover:border-warm hover:bg-warm/10 sm:px-6 sm:text-base"
        >
          {profile.email}
        </a>
      </Reveal>
      <div className="mt-16 flex flex-col gap-6 border-t border-line pt-10">
        <SocialLinks />
        <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-3 text-sm text-muted">
          <p> © {profile.name}</p>
          <p className="inline-flex items-center gap-2 tracking-[0.18em] text-warm uppercase">
            <SaturnMark className="resume-planet resume-planet-b" />
            {profile.location}
            <SaturnMark className="resume-planet resume-planet-b" />
          </p>
          <a
            href="/#top"
            className="text-accent underline-offset-4 hover:underline"
          >
            Top
          </a>
        </div>
      </div>
    </footer>
  );
}
