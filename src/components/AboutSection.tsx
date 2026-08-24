import { Reveal } from "@/components/Reveal";
import { profile } from "@/content/profile";

export function AboutSection() {
  return (
    <div className="space-y-6">
      {profile.about.map((paragraph, index) => (
        <Reveal key={paragraph.slice(0, 32)} delay={index * 80}>
          <p className="text-xl leading-8 text-muted">{paragraph}</p>
        </Reveal>
      ))}
      <Reveal delay={160}>
        <dl className="grid gap-8 pt-6 sm:grid-cols-2">
          <div>
            <dt className="font-mono text-sm tracking-wide text-accent">
              Contact
            </dt>
            <dd className="mt-3 space-y-1 text-base">
              <p>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-accent underline-offset-4 hover:underline"
                >
                  {profile.email}
                </a>
              </p>
            </dd>
          </div>
          <div>
            <dt className="font-mono text-sm tracking-wide text-accent">
              Languages
            </dt>
            <dd className="mt-3 space-y-1 text-base text-muted">
              {profile.languages.map((language) => (
                <p key={language.name} className="flex justify-between gap-4">
                  <span className="text-foreground">{language.name}</span>
                  <span>{language.level}</span>
                </p>
              ))}
            </dd>
          </div>
        </dl>
      </Reveal>
    </div>
  );
}
