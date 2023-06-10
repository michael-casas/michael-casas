import type { Meta, StoryObj } from "@storybook/react";
import { View, Text } from "../lib/components";

// TODO: Design The Colors Component Demo here...
const meta: Meta<typeof View> = {
  component: View,
  title: "Design Tokens/Tier 1: Definitions",
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Typography: Story = ({ ...args }) => (
  <View tw="text-center bg-slate-400">
    <Text tw="text-4xl">H1</Text>
  </View>
);
