import { StoryFn } from "@storybook/react";

export const StorybookProvder = (Story: StoryFn, args: unknown) => {
  return (
    <>
      <Story />
    </>
  );
};
