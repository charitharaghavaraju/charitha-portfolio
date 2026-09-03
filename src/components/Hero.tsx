import { PlanetMarks } from "@/components/CelestialMarks";
import { ScrollCue } from "@/components/ScrollCue";
import { StarMark } from "@/components/StarMark";
import { profile } from "@/content/profile";

export function Hero() {
  const [firstName, ...lastNames] = profile.name.split(" ");

  return (
    <section id="top" className="hero">
      <h1 className="max-w-full break-words font-serif text-[clamp(2.15rem,10vw,6.75rem)] leading-[0.92] tracking-tight">
        {firstName}
        <br />
        <span className="text-accent">{lastNames.join(" ")}</span>
      </h1>
      <p className="mt-6 font-mono text-sm tracking-wide text-accent">
        {profile.role}
      </p>
      <p className="mt-3 max-w-lg text-lg leading-7 text-muted sm:text-xl sm:leading-8">
        {profile.tagline}
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-5">
        <a
          href="/#experience"
          className="text-base text-muted transition-colors hover:text-accent"
        >
          View work
        </a>
        <a href="/#connect" className="talk-button">
          <StarMark className="h-3.5 w-3.5" />
          Let's Talk
        </a>
      </div>
      <a
        href={profile.resume}
        download={profile.resumeFileName}
        className="mt-6 inline-flex w-fit items-center gap-3 text-base text-muted transition-colors hover:text-accent"
      >
        <PlanetMarks className="resume-planets" />
        Download Resume
      </a>
      <ScrollCue />
    </section>
  );
}
