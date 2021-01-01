module.exports = {
  presets: [
    [
      "next/babel",
      {
        "preset-react": {
          runtime: "automatic",
          importSource: "@emotion/react",
        },
      },
    ],
  ],
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
    "@emotion/babel-plugin",
    "babel-plugin-macros",
  ],
};
