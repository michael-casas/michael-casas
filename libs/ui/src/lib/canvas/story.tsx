import { StatusBar, useColorScheme, useWindowDimensions } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { NativeWindStyleSheet, styled } from "nativewind";
import { View as RNView } from "react-native";
import { Text, View } from "..";
import { H3, H5 } from "../tokens";

interface CanvasStoryProps {
  theme: "light" | "dark";
}

const Menu = styled(Feather);

export const CanvasStory = (props: CanvasStoryProps) => {
  // const { width } = useWindowDimensions();
  const theme = useColorScheme();

  return (
    <View className="flex-row justify-between p-5 drop-shadow-sm bg-slate-100">
      <H3 className="bg-orange-300 text-center md:text-4xl">NOX</H3>
      <Menu className="md:hidden" size={32} name="menu" color={"black"} />
      <View className="hidden flex-row md:flex">
        <H5 className="p-5 hover:text-purple-400 hover:cursor-pointer">
          About
        </H5>
        <H5 className="p-5 hover:text-purple-400 hover:cursor-pointer">
          Products
        </H5>
        <H5 className="p-5 hover:text-purple-400 hover:cursor-pointer">
          Pricing
        </H5>
        <H5 className="p-5 hover:text-purple-400 hover:cursor-pointer">
          Login
        </H5>
      </View>
    </View>
  );
};
