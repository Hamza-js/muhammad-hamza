import "./globals.css";
import type { Metadata } from "next";
// Removed next/font/google to avoid network stalls; using CSS stack instead
import { Header } from "@/components/header";
import { GradientBackground } from "@/components/gradient-bg";
import { BgGrid } from "@/components/bg-grid";

// Use global CSS font-sans (system stack or locally provided)

export const metadata: Metadata = {
  title: {
    default: "Muhammad Hamza - Full-Stack Developer",
    template: "%s | Muhammad Hamza",
  },
  description:
    "Full-stack developer building high-performance apps with React, Next.js, Node.js, and Supabase.",
  metadataBase: new URL("https://your-domain.com"),
  openGraph: {
    title: "Muhammad Hamza - Full-Stack Developer",
    description:
      "Portfolio showcasing projects, skills, and services across React, Next.js, Node.js, Supabase and more.",
    type: "website",
    url: "https://your-domain.com",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth dark">
      <body className="font-sans">
        <div className="site-bg relative min-h-dvh text-foreground">
          <GradientBackground />
          <BgGrid />
          <Header />
          <main className="mx-auto max-w-7xl px-4 md:px-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
