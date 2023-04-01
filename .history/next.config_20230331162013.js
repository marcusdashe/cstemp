/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  output: {
    library: "cstemp",
    libraryTarget: "umd",
    umdNamedDefine: true,
    globalObject: `(typeof self !== 'undefined' ? self : this)`,
    output: "standalone",
  },
  images: {
    // Set images.unoptimized to true
    unoptimized: true,
  },
};

module.exports = nextConfig;
