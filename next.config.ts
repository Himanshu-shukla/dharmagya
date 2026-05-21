import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  images: {
    unoptimized: isDev,
  },
  experimental: {
    serverComponentsHmrCache: false,
    turbopackFileSystemCacheForDev: false,
    turbopackMemoryLimit: 1024 * 1024 * 1024,
  },
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
