/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  output: "export",
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://dusaan00.github.io/pletivo"
      : "",
  images: {
    unoptimized: true,
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
