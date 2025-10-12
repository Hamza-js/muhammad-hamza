"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const nav = [
  { label: "See My Work", href: "/projects", local: false },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-transparent border-0 shadow-none">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        {/* Logo / Name */}
        <Link
          href="/"
          className="group select-none"
          aria-label="Muhammad Hamza - Home"
        >
          <div className="inline-flex items-center gap-2 text-white">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.6)]" />
            <span className="text-xl md:text-2xl font-extrabold tracking-tight">Hamza</span>
          </div>
          <div className="mt-1 h-0.5 w-10 rounded bg-amber-400/90 transition-all duration-300 group-hover:w-14" />
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-3 md:flex">
          {nav.map((item) => {
            const isProjects = item.href === "/projects";
            // Hide "See My Work" when already on /projects
            if (pathname === "/projects" && isProjects) {
              return null;
            }

            return (
              <Button
                key={item.label}
                asChild
                variant="ghost"
                className={
                  isProjects
                    ? "rounded-full bg-amber-400 text-slate-900 px-5 py-2 text-base md:px-6 md:py-2.5 font-bold shadow-lg hover:bg-amber-400/90 animate-pulse"
                    : "text-sm font-semibold text-slate-100 hover:text-amber-400 transition-colors"
                }
              >
                {item.local ? (
                  <a href={item.href} className="inline-flex items-center gap-2">
                    {item.label}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : (
                  <Link href={item.href} className="inline-flex items-center gap-2">
                    {item.label}
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                )}
              </Button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
