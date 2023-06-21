module.exports = function (api) {
  api.cache(true);
  return {
    extends: "../../babel.config.js",
    presets: ["next/babel"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["."],
          alias: {
            "@nox-technologies/ui": "../../libs/ui/src/index.ts",
          },
        },
      ],
    ],
  };
};
