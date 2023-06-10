import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
  staticDirs: ["../public"],
  core: {
    builder: "@storybook/builder-vite",
  },
  framework: {
    name: "@storybook/react-vite",
    options: {
      builder: {
        viteConfigPath: "libs/ui/vite.config.ts",
      },
    },
  },
  addons: [
    "@nx/react/plugins/storybook",
    "@storybook/addon-essentials",
    {
      name: "@storybook/addon-react-native-web",
      options: {
        babelPlugins: ["nativewind/babel"],
        modulesToTranspile: [],
        modulesToAlias: [],
      },
    },
  ],
  async viteFinal(config) {
    return mergeConfig(config, {
      optimizeDeps: {
        include: ["nativewind"],
      },
    });
  },
};

export default config;

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/packages/storybook/documents/custom-builder-configs
