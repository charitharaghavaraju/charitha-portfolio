import { profile } from "@/content/profile";

export function SocialLinks() {
  const links = [
    { href: `mailto:${profile.email}`, label: "Email" },
    { href: profile.github, label: "GitHub", external: true },
    { href: profile.linkedin, label: "LinkedIn", external: true },
    {
      href: profile.resume,
      label: "Resume",
      download: profile.resumeFileName,
    },
  ];

  return (
    <ul className="flex flex-wrap gap-x-5 gap-y-2 text-base text-muted">
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            {...(link.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            {...("download" in link && link.download
              ? { download: link.download }
              : {})}
            className="text-accent underline-offset-4 hover:underline"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
