module.exports = {
  reactStrictMode: true,
  future: {
    webpack5: true,
  },
  experimental: {
    reactMode: "concurrent",
  },
  target: "experimental-serverless-trace",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
  },
  images: {
    domains: ["cdn.sanity.io", "files.stripe.com"],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = { fs: false, module: false };
    }

    return config;
  },
};
