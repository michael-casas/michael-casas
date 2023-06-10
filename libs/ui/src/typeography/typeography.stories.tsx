import type { Meta } from "@storybook/react";
import { TypographyStory } from "./story";

// TODO: Design The Colors Component Demo here...
const meta: Meta<typeof TypographyStory> = {
  component: TypographyStory,
  title: "Design Tokens/Tier 1: Definitions",
  parameters: {
    controls: {
      disabled: true,
    },
  },
};
export default meta;

export const Typography = {
  args: {},
};
