//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require("@nx/next");
const { withExpo } = require("@expo/next-adapter");
const path = require("node:path");

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  reactStrictMode: false,
  transpilePackages: [
    "@michael-casas/ui",
    "@shopify/react-native-skia",
    "expo",
    "nativewind",
    "solito",
    "react-native",
    "react-native-reanimated",
    "react-native-svg",
    "react-native-vector-icons",
    "react-native-gesture-handler",
  ],
  experimental: {
    forceSwcTransforms: true,
  },
  webpack: (config, {}) => {
    config.module.rules.push({
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      type: "asset/resource",
      use: [
        {
          loader: "url-loader",
          options: {
            name: "[name].[ext]",
          },
        },
      ],
      include: path.resolve(__dirname, "../node_modules/"),
    });
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "react-native$": "react-native-web",
      "@expo/vector-icons": "react-native-vector-icons",
    };
    config.resolve.extensions = [
      ".web.js",
      ".web.ts",
      ".web.tsx",
      ...config.resolve.extensions,
    ];
    return config;
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
  withExpo,
];

module.exports = composePlugins(...plugins)(nextConfig);
