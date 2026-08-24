import type { Metadata } from "next";
import { HashRedirect } from "@/components/HashRedirect";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return <HashRedirect id="projects" />;
}
