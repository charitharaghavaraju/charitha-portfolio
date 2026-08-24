import { PlanetMarks } from "@/components/CelestialMarks";
import { ScrollCue } from "@/components/ScrollCue";
import { profile } from "@/content/profile";

export function Hero() {
  const [firstName, ...lastNames] = profile.name.split(" ");

  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100svh-3.5rem)] flex-col justify-end pb-28"
    >
      <h1 className="font-serif text-[clamp(3.75rem,15vw,9.5rem)] leading-[0.86] tracking-tight">
        {firstName}
        <br />
        <span className="text-accent">{lastNames.join(" ")}</span>
      </h1>
      <p className="mt-8 max-w-lg text-xl leading-8 text-muted">
        {profile.role}
      </p>
      <a
        href={profile.resume}
        download={profile.resumeFileName}
        className="mt-16 inline-flex w-fit items-center gap-3 text-base text-muted transition-colors hover:text-accent"
      >
        <PlanetMarks className="resume-planets" />
        Download Resume
      </a>
      <ScrollCue />
    </section>
  );
}
