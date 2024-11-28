import { StoryFn } from "@storybook/react";
import { UIProvider } from "../../provider";

export const StorybookProvder = (Story: StoryFn, args: unknown) => {
  return (
    <UIProvider>
      <Story />
    </UIProvider>
  );
};
