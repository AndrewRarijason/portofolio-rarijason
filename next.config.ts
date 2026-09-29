import type { NextConfig } from "next";

// Hébergé sur Vercel : pas d'export statique, ce qui active l'optimisation
// d'images de Next (AVIF/WebP à la bonne taille) et la redirection de langue (proxy.ts).
const nextConfig: NextConfig = {
  // Images lues par les routes opengraph-image
  outputFileTracingIncludes: {
    "/[lang]/opengraph-image": ["./assets/og/**"],
    "/[lang]/projects/[slug]/opengraph-image": ["./assets/og/**"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
    // 90 réservé à la photo de profil (visage : la compression se voit vite)
    qualities: [75, 90],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
