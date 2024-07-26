/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    URL_BE: "http://localhost:3008"
  },
}


module.exports = nextConfig

// URL_BE: "https://coffeeshop-api.vercel.app"

// URL_BE: "https://urchin-app-dga4h.ondigitalocean.app"
