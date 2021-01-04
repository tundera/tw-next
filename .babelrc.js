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
          types: "./src/types",
        },
      },
    ],
    "@emotion/babel-plugin",
    "babel-plugin-macros",
  ],
};
