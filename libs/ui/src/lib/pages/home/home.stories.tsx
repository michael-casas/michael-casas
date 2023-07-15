import type { Meta } from "@storybook/react";
import { Home as HomePage } from ".";

const meta: Meta<typeof HomePage> = {
  component: HomePage,
  title: "Pages/Home",
  parameters: {
    controls: {
      disabled: true,
    },
    parameters: {},
  },
};
export default meta;

export const Default = {
  args: {},
};
