import type { Metadata } from "next";
import { HashRedirect } from "@/components/HashRedirect";

export const metadata: Metadata = { title: "Experience" };

export default function ExperiencePage() {
  return <HashRedirect id="experience" />;
}
