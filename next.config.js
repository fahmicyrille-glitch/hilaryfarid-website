/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
    forceSwcTransforms: true, // 🔥 Force Next à NE PAS inclure les polyfills ES5
  },
  swcMinify: true,             // 🔥 Minification moderne
};

module.exports = nextConfig;
