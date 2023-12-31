module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["next/babel"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["."],
          alias: {
            "@michael-casas/ui": "../../libs/ui/src/index.ts",
          },
        },
      ],
      "nativewind/babel",
      "react-native-reanimated/plugin",
      "@babel/plugin-proposal-export-namespace-from",
    ],
  };
};
