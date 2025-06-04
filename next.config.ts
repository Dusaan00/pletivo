/**
 * @type {import('next').NextConfig}
 */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  basePath: isProd ? "/pletivo" : "",
  assetPrefix: isProd ? "/pletivo/" : "",
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
