import { Text, View } from "../lib";
import { H1, H2, H3, H4, H5, H6 } from "./components";

export const TypographyStory = () => (
  <View className="h-screen">
    <Text className="text-6xl pt-5 pb-5">Typography</Text>
    <View className="bg-slate-200 h-1 mb-5" />
    <View className="p-5">
      <H1>H1</H1>
      <H2>H2</H2>
      <H3>H3</H3>
      <H4>H4</H4>
      <H5>H5</H5>
      <H6>H6</H6>
    </View>
  </View>
);
