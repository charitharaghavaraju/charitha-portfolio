import { Reveal } from "@/components/Reveal";
import { skills } from "@/content/skills";

export function SkillsSection() {
  return (
    <div className="space-y-10">
      {skills.map((group, index) => (
        <Reveal key={group.name} delay={index * 60}>
          <div>
            <h3 className="font-mono text-sm tracking-wide text-accent">
              {group.name}
            </h3>
            <p className="mt-3 text-lg leading-8">{group.items.join("  ·  ")}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
