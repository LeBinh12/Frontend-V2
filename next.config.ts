import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  reactStrictMode: false,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb', // Allow larger image uploads
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      }
    ],
  },
};

export default nextConfig;
