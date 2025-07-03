import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/sh-himanshu.github.io',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
