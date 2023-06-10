import type { Meta } from '@storybook/react';
import { View, Text } from "react-native";
import { styled } from "nativewind";
import { Ui } from './ui';

const H1 = styled(Text, "")

const Story: Meta<typeof Ui> = {
  component: Ui,
  title: 'Ui',
};
export default Story;

export const Primary = {
  args: {},
};
