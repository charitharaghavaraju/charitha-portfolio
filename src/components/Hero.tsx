import { profile } from "@/content/profile";

export function Hero() {
  const [firstName, ...lastNames] = profile.name.split(" ");

  return (
    <section
      id="top"
      className="flex min-h-[calc(100svh-3.5rem)] flex-col justify-end pb-16"
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
        href="#about"
        className="mt-16 inline-flex w-fit items-center gap-3 text-base text-muted transition-colors hover:text-accent"
      >
        <span className="block h-8 w-px bg-accent" />
        Scroll
      </a>
    </section>
  );
}
