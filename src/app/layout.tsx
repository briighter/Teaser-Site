import type { Metadata } from "next";
import { Barlow_Condensed, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const display = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-display",
});

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Teaser — Fitness Curriculum Platform",
  description:
    "Build workouts, schedule classes, and manage your studio curriculum. The professional command center for fitness instructors.",
  openGraph: {
    title: "Teaser — Fitness Curriculum Platform",
    description: "Build. Schedule. Teach.",
    url: "https://teaser.studio",
    siteName: "Teaser",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Teaser — Fitness Curriculum Platform",
    description: "Build. Schedule. Teach.",
  },
  icons: {
    icon: "/favicon.svg",
  },
  metadataBase: new URL("https://teaser.studio"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} font-[family-name:var(--font-body)] antialiased`}
      >
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
