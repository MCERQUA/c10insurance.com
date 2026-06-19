import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["*.jam-bot.com"],
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
