import { NativeBaseProvider, NativeBaseProviderProps } from "native-base";
import { StoryFn } from "@storybook/react";

export const StorybookProvder = (
  Story: StoryFn,
  args: unknown,
  props: NativeBaseProviderProps
) => {
  return (
    <NativeBaseProvider>
      <Story />
    </NativeBaseProvider>
  );
};
