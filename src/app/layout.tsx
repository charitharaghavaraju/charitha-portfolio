import type { Metadata } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import { SiteShell } from "../components/SiteShell";
import { profile } from "@/content/profile";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: profile.name,
    template: `%s · ${profile.name}`,
  },
  description: `${profile.role} in ${profile.location}. ${profile.tagline}`,
  openGraph: {
    title: profile.name,
    description: `${profile.role} in ${profile.location}. ${profile.tagline}`,
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background font-sans text-foreground">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
