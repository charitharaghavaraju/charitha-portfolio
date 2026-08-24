import type { Metadata } from "next";
import { HashRedirect } from "@/components/HashRedirect";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return <HashRedirect id="about" />;
}
