import { useFonts } from "expo-font";
import { configure, getStorybookUI } from "@storybook/react-native";
import { loadStories } from "./story-loader";
import { useCallback } from "react";

configure(() => loadStories(), module);

const StorybookUIRoot = getStorybookUI({
  port: 4400,
  onDeviceUI: true,
});

const App = () => {
  const [fontsLoaded] = useFonts({
    WorkSans: require("../assets/fonts/WorkSans-Medium.ttf"),
    "WorkSans-Bold": require("../assets/fonts/WorkSans-Bold.ttf"),
    "WorkSans-ExtraBold": require("../assets/fonts/WorkSans-ExtraBold.ttf"),
  });

  if (!fontsLoaded) return null;
  return <StorybookUIRoot />;
};

export default App;
