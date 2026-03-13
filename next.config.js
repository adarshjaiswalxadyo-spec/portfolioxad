/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  trailingSlash: false,
  assetPrefix: '',
  env: {
    CUSTOM_KEY: 'my-value',
  },
}

module.exports = nextConfig
