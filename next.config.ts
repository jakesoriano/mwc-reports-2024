import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true, // for generating index.html per page, needed for production
  images: {
    unoptimized: true,
  },
  basePath: '/2024',
};

export default nextConfig;
