import { Reveal } from "@/components/Reveal";
import type { PublicationItem as Publication } from "@/content/publications";

type PublicationItemProps = {
  publication: Publication;
  index: number;
};

export function PublicationItem({ publication, index }: PublicationItemProps) {
  return (
    <Reveal delay={index * 80} className="py-8 first:pt-0 last:pb-0">
      <article>
        <p className="font-mono text-sm text-accent">{publication.year}</p>
        <h3 className="mt-2 font-serif text-2xl leading-snug tracking-tight">
          {publication.title}
        </h3>
        <p className="mt-3 text-base leading-8 text-muted">
          {publication.authors}
        </p>
        <p className="mt-1 text-base text-muted">{publication.venue}</p>
        <div className="mt-4 flex gap-4 text-sm tracking-wide">
          <a
            href={publication.doi}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline-offset-4 hover:underline"
          >
            DOI
          </a>
          {publication.pdf ? (
            <a
              href={publication.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline-offset-4 hover:underline"
            >
              PDF
            </a>
          ) : null}
        </div>
      </article>
    </Reveal>
  );
}
