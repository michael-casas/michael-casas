import { configure, getStorybookUI } from "@storybook/react-native";
import { loadStories } from "./story-loader";

configure(() => loadStories(), module);

const StorybookUIRoot = getStorybookUI({
  port: 4400,
  onDeviceUI: true,
});

export default StorybookUIRoot;
