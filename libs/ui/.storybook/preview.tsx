import { StorybookProvder } from "../src/lib";
import { StoryFn } from "@storybook/react";
import Font, { useFonts } from "expo-font";
import "../src/lib/index.css";
import { useCallback, useEffect } from "react";
import { View } from "react-native";
// import WorkSans from "../assets/fonts/WorkSans.ttf";
import { addDecorator } from "@storybook/react-native";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [StorybookProvder];
