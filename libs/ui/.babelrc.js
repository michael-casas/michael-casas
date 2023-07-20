module.exports = function (api) {
  const isWeb = api.caller(
    (caller) =>
      caller &&
      (caller.name === "babel-loader" ||
        caller.name === "next-babel-turbo-loader")
  );

  return {
    presets: [isWeb && require("next/babel"), "babel-preset-expo"].filter(
      Boolean
    ),
    plugins: [
      "nativewind/babel",
      "@babel/plugin-proposal-export-namespace-from",
      "react-native-reanimated/plugin",
    ],
  };
};
