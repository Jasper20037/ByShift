import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export', // Verplicht voor GitHub Pages: dwingt een statische HTML-export af
  images: {
    unoptimized: true, // Verplicht: GitHub Pages heeft geen server-side image optimization
  },
};

export default nextConfig;