module.exports = {
  plugins: [
    [
      "module-resolver",
      {
        root: "./",
        alias: {
          "@pages": "./src/pages",
          "@components": "./src/components",
          "@styles": "./src/styles",
          "@utils": "./src/utils",
          "@images": "./src/assets/images",
          "@fonts": "./src/assets/fonts",
        },
      },
    ],
  ],
};
