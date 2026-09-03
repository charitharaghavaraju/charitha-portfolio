import { Reveal } from "@/components/Reveal";
import type { ProjectItem } from "@/content/projects";

type ProjectCardProps = {
  project: ProjectItem;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Reveal delay={index * 80} className="py-8 first:pt-0 last:pb-0">
      <article className="group">
        <p className="font-mono text-sm text-accent">
          {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="mt-2 font-serif text-3xl tracking-tight break-words">
          {project.repo ? (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-4 transition-colors group-hover:text-accent group-hover:underline"
            >
              {project.title}
            </a>
          ) : (
            project.title
          )}
        </h3>
        <p className="mt-3 text-base leading-8 text-muted">{project.summary}</p>
        <p className="mt-4 text-sm tracking-wide text-muted">
          {project.tags.join(" · ")}
          {project.repo ? null : " · Private repository"}
        </p>
      </article>
    </Reveal>
  );
}
