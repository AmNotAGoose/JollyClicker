import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: `/christmas-clicker-game`,
  assetPrefix: `/christmas-clicker-game/`,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
