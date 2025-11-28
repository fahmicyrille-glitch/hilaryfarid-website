/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    forceSwcTransforms: true, // 🔥 Force Next à NE PAS inclure les polyfills ES5
  },
  swcMinify: true,             // 🔥 Minification moderne
};

module.exports = nextConfig;
