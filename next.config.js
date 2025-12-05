/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },

  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],

    // ⚡ Empêche Next de transpiler en ES5 → supprime le "Ancien JS"
    forceSwcTransforms: true,

    // ❌ PPR désactivé → casse le LCP sur projets avec Hero image
    ppr: false,
  },

  // ⚡ Bundle plus léger, meilleur LCP
  swcMinify: true,

  // ⚡ Génère WebP + AVIF pour toutes les images → baisse de 30 à 70% de taille
  images: {
    formats: ["image/avif", "image/webp"],
  },

  // ⚡ Indique à Next d’utiliser ES2020 → plus moderne, plus performant
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

module.exports = nextConfig;
