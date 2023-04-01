/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  images: {
    // Set images.unoptimized to true
    unoptimized: true,
  },
};

module.exports = nextConfig;
