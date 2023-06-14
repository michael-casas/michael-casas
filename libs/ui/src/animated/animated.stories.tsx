import type { Meta } from "@storybook/react";
import { AnimatedStory } from "./story";

// TODO: Design The Colors Component Demo here...
const meta: Meta<typeof AnimatedStory> = {
  component: AnimatedStory,
  title: "Animated",
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
