import type { NextConfig } from 'next';

const nextConfig: NextConfig = process.env.SITES_BUILD !== 'true'
  ? { output: 'export', assetPrefix: '/Concrete', trailingSlash: true, images: { unoptimized: true } }
  : {};

export default nextConfig;
