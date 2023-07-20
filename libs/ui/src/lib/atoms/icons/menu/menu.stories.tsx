import type { Meta } from "@storybook/react";
// import { Text as NativeText } from "react-native";
import Menu from "./index";

// TODO: Design The Colors Component Demo here...
const meta: Meta<typeof Menu> = {
  component: Menu,
  title: "Atoms/Icons/MotiMenu",
  args: {
    fill: "#000",
    stroke: "#000",
    size: 64,
  },
  parameters: {
    layout: "centered",
    controls: {
      disabled: true,
    },
  },
};
export default meta;

export const Default = {
  args: {},
};

export const OnOpen = {
  args: {},
};

export const Open = {
  args: {},
};
