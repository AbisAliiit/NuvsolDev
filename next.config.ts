import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Enable static export for Azure Static Web Apps
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
  },
  trailingSlash: true, // Optional: adds trailing slashes to URLs for better Azure compatibility
};

export default nextConfig;

