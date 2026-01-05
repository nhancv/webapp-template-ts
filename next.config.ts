import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export', // Configured for static export (frontend only to be deployed to a static site hoster like S3), no API routes or backend services are used. Check /out dir
};

export default nextConfig;
