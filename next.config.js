/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
    forceSwcTransforms: true,
    ppr: true, // 🚀 Active le Partial Prerendering
  },
  swcMinify: true,
  images: {
    formats: ["image/avif", "image/webp"], // ajoute AVIF
  },
};

module.exports = nextConfig;
