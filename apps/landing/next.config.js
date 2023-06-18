//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require("@nx/next");
const { withExpo } = require("@expo/next-adapter");

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
  experimental: {
    forceSwcTransforms: true,
  },
  transpilePackages: [
    "@expo/vector-icons",
    "@nox-technologies/ui",
    "@shopify/react-native-skia",
    "expo",
    "nativewind",
    "solito",
    "react-native",
    "react-native-web",
    "react-native-reanimated",
    "react-native-gesture-handler",
  ],
  webpack: (config, {}) => {
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next",
          name: "static/fonts/[name].[hash].[ext]",
        },
      },
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
