import type { Metadata } from "next";
import { HashRedirect } from "@/components/HashRedirect";

export const metadata: Metadata = { title: "Skills" };

export default function SkillsPage() {
  return <HashRedirect id="skills" />;
}
