/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://pletivogrygov.cz", // ✅ your real domain
  generateRobotsTxt: true, // ✅ also generates robots.txt
  outDir: "./public", // Output the sitemap in the public folder
  exclude: ["/PanelyZinkove"],
  transform: async (config, path) => {
    if (path === "/PanelyZinkove") {
      return null;
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};
