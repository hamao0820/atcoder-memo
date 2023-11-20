const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  latex: true,
});

module.exports = withNextra({
  webpack: (config) => {
    config.module.rules?.push({
      test: /tags\//,
      loader: "ignore-loader",
    });
  },
});
