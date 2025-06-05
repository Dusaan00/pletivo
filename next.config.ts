/**
 * @type {import('next').NextConfig}
 */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProd ? "/pletivo" : "", // Ensure routing uses /pletivo
  assetPrefix: isProd ? "/pletivo/" : "", // Relative path for assets
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
  headers: () => [
    {
      source: "/_next/static/media/:path*",
      headers: [
        {
          key: "Access-Control-Allow-Origin",
          value: "*",
        },
      ],
    },
  ],
};

module.exports = nextConfig;
