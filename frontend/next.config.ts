import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    WS_URL: "http://localhost:8000",
  },
};

export default nextConfig;
