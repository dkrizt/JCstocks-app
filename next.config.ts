import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.dummyjson.com'],
  },
  typescript: {
    ignoreBuildErrors: true, // Ignore TypeScript errors during the build
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint errors during the build
  },
  /* config options here */
};

export default nextConfig;
