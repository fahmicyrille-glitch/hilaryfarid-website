/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    ppr: true, // 🚀 Partial Prerendering
    optimizePackageImports: ["framer-motion"], // ⚡ Optimisation sûre
  },

  swcMinify: true, // 🔥 Minification moderne
};

module.exports = nextConfig;
