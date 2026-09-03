import { ContactForm } from "@/components/ContactForm";
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
            Let’s work together
          </span>
        </h2>
        <p className="mt-8 max-w-md text-xl leading-8 text-muted">
          A role, a research idea, or a hello — I’ll read it.
        </p>
      </Reveal>
      <Reveal delay={80} className="pt-10">
        <ContactForm />
      </Reveal>
      <div className="mt-16 flex flex-col gap-6 border-t border-line pt-10">
        <SocialLinks />
        <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-3 text-sm text-muted">
          <p> © {profile.name}</p>
          <p className="tracking-[0.18em] text-accent uppercase">
            {profile.location}
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
