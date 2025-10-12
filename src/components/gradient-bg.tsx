"use client";

import { M } from "@/components/motion";

export function GradientBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,hsl(var(--primary)/0.10)_0%,transparent_60%)]" />
      <M.div
        className="absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl"
        style={{ background: "linear-gradient(135deg, #2563eb 0%, #06b6d4 70%)" }}
        initial={{ opacity: 0.18, scale: 0.9, x: -24, y: -12 }}
        animate={{ opacity: 0.3, scale: 1, x: 0, y: 0 }}
        transition={{ duration: 4, ease: "easeOut" }}
      />
      <M.div
        className="absolute bottom-[-6rem] right-[-6rem] h-96 w-96 rounded-full blur-3xl"
        style={{ background: "linear-gradient(135deg, #0ea5e9 0%, #7c3aed 60%)" }}
        initial={{ opacity: 0.12, scale: 0.92, x: 22, y: 12 }}
        animate={{ opacity: 0.22, scale: 1, x: 0, y: 0 }}
        transition={{ duration: 4.5, ease: "easeOut" }}
      />
    </div>
  );
}
