import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/portfolio2.0",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
