import { useCallback, useEffect } from "react";
import {
  StoryFn,
  addDecorator,
  configure,
  getStorybookUI,
} from "@storybook/react-native";
import { loadStories } from "./story-loader";
import * as SplashScreen from "expo-splash-screen";
import Font, { useFonts } from "expo-font";
import { View } from "react-native";
// const Font = require("expo-font");

// import "./requires";

SplashScreen.preventAutoHideAsync();

//@ts-expect-error
addDecorator((Story: StoryFn): StoryFn | null => {
  const [loaded] = useFonts({
    WorkSans: require("../assets/fonts/WorkSans.ttf"),
    WorkSans_bold: require("../assets/fonts/WorkSans_bold.ttf"),
    WorkSans_italic: require("../assets/fonts/WorkSans_italic.ttf"),
    WorkSans_bold_italic: require("../assets/fonts/WorkSans_bold_italic.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (loaded) {
      await SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  //@ts-expect-error
  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <Story />
    </View>
  );
});

configure(() => loadStories(), module);
const StorybookUIRoot = getStorybookUI({
  port: 4400,
  onDeviceUI: true,
});

// const App = () => {
//   const [done, setDone] = useState(false);
//   const [loaded] = useFonts({
//     WorkSans: require("../assets/fonts/WorkSans.ttf"),
//     WorkSans_bold: require("../assets/fonts/WorkSans_bold.ttf"),
//     WorkSans_italic: require("../assets/fonts/WorkSans_italic.ttf"),
//     WorkSans_bold_italic: require("../assets/fonts/WorkSans_bold_italic.ttf"),
//   });

//   const onLayoutRoot = useCallback(async () => {
//     if (loaded) {
//       await SplashScreen.hideAsync();
//       setDone(true);
//     }
//   }, [loaded]);

//   // useEffect(() => {
//   //   console.log("I am checking for font's loaded");

//   //   if (isLoaded("WorkSans")) {
//   //     console.log("hiding");

//   //   }
//   // }, [loaded]);

//   if (!loaded) return null;
//   return (
//     <View style={{ flex: 1 }} onLayout={onLayoutRoot}>
//       <Text style={{ fontFamily: "WorkSans" }}> THING </Text>
//       {/* <StorybookUIRoot /> */}
//     </View>
//   );
//   // return <StorybookUIRoot />;
// };

export default StorybookUIRoot;
