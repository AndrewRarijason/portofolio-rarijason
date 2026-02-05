import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // ← CRITIQUE pour hébergement partagé
  images: {
    unoptimized: true, // ← Images non optimisées par Next.js
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;

export default nextConfig;