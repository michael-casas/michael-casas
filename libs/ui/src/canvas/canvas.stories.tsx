import type { Meta } from "@storybook/react";
// import { Text as NativeText } from "react-native";
import { CanvasStory } from "./story";

// TODO: Design The Colors Component Demo here...
const meta: Meta<typeof CanvasStory> = {
  component: CanvasStory,
  title: "Canvas",
  parameters: {
    controls: {
      disabled: true,
    },
    parameters: {},
  },
};
export default meta;

export const Freehand = {
  args: {},
};
