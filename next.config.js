/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '',
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://comforthealthgroup.org' : '',
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.NODE_ENV === 'production' ? 'https://comforthealthgroup.org' : 'http://localhost:3000',
  }
}

module.exports = nextConfig 