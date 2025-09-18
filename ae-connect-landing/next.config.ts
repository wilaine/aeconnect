import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export
  output: "export",
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Enable trailing slash to avoid 404 on GitHub Pages
  trailingSlash: true,
  
  // Configure base path and asset prefix if not username.github.io
  // Uncomment and modify these lines based on your repository name:
  basePath: '/aeconnect',
  assetPrefix: '/aeconnect/',
  
  // Ensure compatibility with static export
  distDir: 'out',
  
  // Disable ESLint during builds (optional, for faster builds)
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
