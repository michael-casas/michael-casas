import type { StorybookConfig } from "@storybook/nextjs";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
  staticDirs: ["../assets", "../public"],
  framework: {
    name: "@storybook/nextjs",
    options: {
      nextConfigPath: "libs/ui/next.config.js",
    },
  },
  addons: [
    "@nx/react/plugins/storybook",
    "@storybook/addon-essentials",
    {
      name: "@storybook/addon-react-native-web",
      options: {
        babelPlugins: ["nativewind/babel"],
        modulesToTranspile: ["react-native, react-native-vector-icons"],
        modulesToAlias: [],
      },
    },
  ],
  // async viteFinal(config) {
  //   return mergeConfig(config, {
  //     optimizeDeps: {
  //       include: ["nativewind", "react-native", "react-native-vector-icons"],
  //     },
  //     build: {
  //       commonjsOptions: {
  //         include: [
  //           /react-native/,
  //           /react-native-vector-icons/,
  //           /node_modules/,
  //         ],
  //       },
  //     },
  //   });
  // },
};

export default config;

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/packages/storybook/documents/custom-builder-configs
