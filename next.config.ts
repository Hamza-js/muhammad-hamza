import type { NextConfig } from "next";

// On Vercel, the build output must be in `.next`.
// Keep custom `distDir` only for local/dev environments (e.g., Windows).
const isVercel = !!process.env.VERCEL;

const nextConfig: NextConfig = {
  ...(isVercel ? {} : { distDir: "build" }),
};

export default nextConfig;
