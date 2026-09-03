import { Reveal } from "@/components/Reveal";
import { education } from "@/content/education";

export function EducationList() {
  return (
    <ol className="divide-y divide-line">
      {education.map((item, index) => (
        <li key={item.degree} className="py-8 first:pt-0 last:pb-0">
          <Reveal delay={index * 80}>
            <article>
              <p className="font-mono text-sm text-accent">
                {item.start} — {item.end}
              </p>
              <h3 className="mt-2 font-serif text-3xl tracking-tight">
                {item.degree}
              </h3>
              <p className="mt-2 text-base text-muted">
                {item.field}
                <br />
                {item.school}, {item.location}
              </p>
              <p className="mt-3 text-base text-muted">GPA: {item.gpa}</p>
              <p className="mt-4 text-base leading-8 text-muted">
                <span className="text-foreground">Thesis: </span>
                {item.thesis}
              </p>
            </article>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
