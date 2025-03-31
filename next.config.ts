import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  env: {
    NEXT_PUBLIC_DEMO_APP_URL: process.env.NEXT_PUBLIC_DEMO_APP_URL,
  },
};

export default nextConfig;
