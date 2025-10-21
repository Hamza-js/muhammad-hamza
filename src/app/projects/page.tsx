"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import data from "@/data/projects.json";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Github, Link as LinkIcon } from "lucide-react";

type Project = {
  id: string;
  title: string;
  description: string;
  demoUrl: string;
  githubUrl: string;
  skills: string[];
  thumbnail: string;
};

const allProjects: Project[] = data as Project[];

export default function ProjectsPage() {
  const [active, setActive] = useState<string>("All");

  const skills = useMemo(() => {
    const set = new Set<string>();
    allProjects.forEach((p) => p.skills.forEach((s) => set.add(s)));
    return ["All", ...Array.from(set).sort((a, b) => a.localeCompare(b))];
  }, []);

  const projects = useMemo(() => {
    return active === "All"
      ? allProjects
      : allProjects.filter((p) => p.skills.includes(active));
  }, [active]);

  return (
    <div className="mx-auto max-w-6xl py-10 px-4 md:px-6">
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
        Projects
      </h1>
      <p className="mt-2 text-sm text-slate-400">
        Select a filter below to view projects by specific skills.
      </p>

      {/* Filter pills */}
      <div className="mt-6">
        <div className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <button
              key={s}
              onClick={() => setActive(s)}
              className={`whitespace-nowrap rounded-full border px-3 py-1 text-sm ${
                active === s
                  ? "bg-amber-400 text-slate-900 border-amber-400"
                  : "bg-white/5 text-slate-200 border-white/10 hover:bg-white/10"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="group rounded-xl border border-white/10 bg-white/5 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none">
          <div className="relative aspect-video w-full overflow-hidden rounded-t-xl">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-contain bg-black/20"
            />
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-slate-100 line-clamp-1">
              {project.title}
            </h3>
            <div className="mt-2 flex flex-wrap gap-1">
              {project.skills.slice(0, 5).map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-slate-300"
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-2">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 text-sm"
              >
                <LinkIcon className="h-4 w-4" /> Demo
              </a>
              <span className="text-slate-500">•</span>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1 text-slate-200 hover:text-white text-sm"
              >
                <Github className="h-4 w-4" /> Code
              </a>
            </div>
          </div>
        </button>
      </DialogTrigger>

      <DialogContent className="bg-white/5 border-white/10">
        <DialogHeader>
          <DialogTitle className="text-slate-100">{project.title}</DialogTitle>
          <DialogDescription className="text-slate-300">
            {project.description}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-3">
          <div className="relative aspect-video w-full overflow-hidden rounded-lg">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-contain bg-black/20"
            />
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.skills.map((s) => (
              <span
                key={s}
                className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-200"
              >
                {s}
              </span>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button
              asChild
              className="bg-amber-400 text-slate-900 hover:bg-amber-400/90 bg-none"
            >
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <LinkIcon className="h-4 w-4" /> Visit Demo
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Github className="h-4 w-4" /> View Code
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
