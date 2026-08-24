import type { Metadata } from "next";
import { HashRedirect } from "@/components/HashRedirect";

export const metadata: Metadata = { title: "Connect" };

export default function ConnectPage() {
  return <HashRedirect id="connect" />;
}
