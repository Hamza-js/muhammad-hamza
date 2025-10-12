import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Use an alternate dist directory to avoid locked `.next` on Windows
  distDir: "build",
};

export default nextConfig;
