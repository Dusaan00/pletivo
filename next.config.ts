const nextConfig = {
  basePath: "",
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  turbopack: {
    root: __dirname,
  },
};

module.exports = nextConfig;
