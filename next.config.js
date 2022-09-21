/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    URL_BE: "https://urchin-app-dga4h.ondigitalocean.app"
  },
}

module.exports = nextConfig
