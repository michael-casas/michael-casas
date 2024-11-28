import type { Meta } from "@storybook/react";
import { SheetStory } from "./story";
import { ExampleSheet } from "./example";

// TODO: Design The Colors Component Demo here...
const meta: Meta<typeof SheetStory> = {
  component: SheetStory,
  title: "Atoms/Sheets/Example",
  parameters: {
    controls: {
      disabled: true,
    },
    parameters: {},
  },
};
export default meta;

export const Shown = {
  args: {},
};
