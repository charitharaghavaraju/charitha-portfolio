import type { Metadata } from "next";
import { HashRedirect } from "@/components/HashRedirect";

export const metadata: Metadata = { title: "Education" };

export default function EducationPage() {
  return <HashRedirect id="education" />;
}
