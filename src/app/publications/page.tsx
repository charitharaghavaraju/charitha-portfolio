import type { Metadata } from "next";
import { HashRedirect } from "@/components/HashRedirect";

export const metadata: Metadata = { title: "Publications" };

export default function PublicationsPage() {
  return <HashRedirect id="publications" />;
}
