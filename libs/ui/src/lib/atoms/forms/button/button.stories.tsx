import type { Meta } from "@storybook/react";
import { Button } from "./index";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Atoms/Forms/Button",
  args: {
    title: "Button",
  },
  parameters: {
    layout: "centered",
  },
};
export default meta;

export const Default = {};
