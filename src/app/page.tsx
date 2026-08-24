import type { Metadata } from "next";
import { AboutSection } from "@/components/AboutSection";
import { ContactForm } from "@/components/ContactForm";
import { EducationList } from "@/components/EducationList";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { PublicationItem } from "@/components/PublicationItem";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { SkillsSection } from "@/components/SkillsSection";
import { Timeline } from "@/components/Timeline";
import { experience } from "@/content/experience";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { publications } from "@/content/publications";

export const metadata: Metadata = {
  title: { absolute: `${profile.name} · ${profile.role}` },
  description: profile.tagline,
};

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section id="about" index="01" title="About">
        <AboutSection />
      </Section>

      <Section id="experience" index="02" title="Experience">
        <Timeline items={experience} />
      </Section>

      <Section id="education" index="03" title="Education">
        <EducationList />
      </Section>

      <Section id="publications" index="04" title="Publications">
        <div className="divide-y divide-line">
          {publications.map((publication, index) => (
            <PublicationItem
              key={publication.doi}
              publication={publication}
              index={index}
            />
          ))}
        </div>
      </Section>

      <Section id="projects" index="05" title="Projects">
        <div className="divide-y divide-line">
          {projects.map((project, index) => (
            <ProjectCard key={project.repo} project={project} index={index} />
          ))}
        </div>
      </Section>

      <Section id="skills" index="06" title="Skills">
        <SkillsSection />
      </Section>

      <Section id="connect" index="07" title="Connect">
        <Reveal>
          <p className="mb-10 max-w-md text-xl leading-8 text-muted">
            Keep in touch. A role, a research idea, or a hello — I’ll read it.
          </p>
        </Reveal>
        <Reveal delay={80}>
          <ContactForm />
        </Reveal>
      </Section>

      <Footer />
    </>
  );
}
