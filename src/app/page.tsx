"use client";

import { Section } from "@/components/section";
import { M, Reveal, staggerContainer } from "@/components/motion";
import { Github, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="pb-24">
      <Section id="home" className="pt-24 md:pt-28">
        <M.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-3xl"
        >
          <Reveal>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
              Hey, I&apos;m <span className="text-amber-400">Muhammad Hamza</span>!
            </h1>
          </Reveal>

          <div className="mt-6 space-y-3 text-slate-300 text-lg">
            <Reveal as={M.p}>
              A freelance full-stack engineer based in Pakistan.
            </Reveal>
            <Reveal as={M.p}>
              I specialize in developing full-stack web applications using the
              <span className="text-amber-400"> React (next.js) </span>
              ecosystem.
            </Reveal>
          </div>

          <div className="mt-6">
            <svg
              width="140"
              height="16"
              viewBox="0 0 140 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 8c6 0 6-6 12-6s6 6 12 6 6-6 12-6 6 6 12 6 6-6 12-6 6 6 12 6 6-6 12-6 6 6 12 6 6-6 12-6 6 6 12 6"
                stroke="#F59E0B"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="mt-10">
            <h3 className="text-base font-semibold text-slate-200">
              Find me on
            </h3>
            <ul className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3 text-slate-300">
              <li className="inline-flex items-center gap-2">
                <Github className="h-4 w-4 rounded text-black bg-gray-100 p-[2px]" />
                <a
                  href="https://github.com/Hamza-js"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-100"
                >
                  GitHub
                </a>
              </li>

              <li className="inline-flex items-center gap-2">
                <span className="inline-block h-4 w-4 rounded bg-green-500 hover:bg-green-300" />
                <a
                  href="https://www.upwork.com/freelancers/~01f7d5acf0e947da6a?viewMode=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:text-green-300"
                >
                  Upwork
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-10">
            <h3 className="text-base font-semibold text-slate-200">Contact</h3>
            <p className="mt-2 text-slate-300">
              You can reach me anytime at
              <a
                href="mailto:hello@example.com"
                className="ml-1 underline decoration-amber-400/60 underline-offset-4 hover:text-amber-300"
              >
                hamza23.js@gmail.com
              </a>
            </p>
          </div>

          <Button
            variant="ghost"
            className="mt-6 rounded-full bg-amber-400 text-slate-900 px-5 py-2 text-base md:px-6 md:py-2.5 font-bold shadow-lg hover:bg-amber-400/90 animate-pulse"
          >
            <Link href="/projects" className="inline-flex items-center gap-2">
              See My Work
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </M.div>
      </Section>

      <footer className="mt-16 border-t border-white/10 py-6 text-slate-400">
        <div className="flex items-center gap-6"></div>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 md:px-6 text-xs md:text-sm">
          <span>
            <span>&copy; 2025</span> Built by Muhammad Hamza
          </span>
        </div>
      </footer>
    </div>
  );
}
