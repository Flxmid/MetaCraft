/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  basePath: isProd ? '/metacraft' : '',       // vervang 'metacraft' door je repo-naam als nodig
  assetPrefix: isProd ? '/metacraft/' : '',  // hetzelfde hier
};

module.exports = nextConfig;