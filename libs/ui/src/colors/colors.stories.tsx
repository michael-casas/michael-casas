import type { Meta } from "@storybook/react";
// import { Text as NativeText } from "react-native";
import { ColorStory } from "./story";

// TODO: Design The Colors Component Demo here...
const meta: Meta<typeof ColorStory> = {
  component: ColorStory,
  title: "Design Tokens/Tier 1: Definitions",
  parameters: {
    controls: {
      disabled: true,
    },
  },
};
export default meta;

export const Colors = {
  args: {},
};
