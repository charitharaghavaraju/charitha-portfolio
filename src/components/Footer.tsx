import { SocialLinks } from "@/components/SocialLinks";
import { profile } from "@/content/profile";

export function Footer() {
  return (
    <footer className="mt-auto flex flex-col gap-6 border-t border-line py-12 pb-24">
      <p className="text-sm tracking-[0.22em] text-accent uppercase">
        {profile.location} · {profile.relocation}
      </p>
      <SocialLinks />
      <p className="text-sm text-muted">
        © {new Date().getFullYear()} {profile.name}
      </p>
    </footer>
  );
}
