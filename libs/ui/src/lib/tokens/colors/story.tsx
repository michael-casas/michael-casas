import { H1, Text, View } from "../..";

interface ColorStoryProps {
  theme: "light" | "dark";
}

export const ColorStory = (props: ColorStoryProps) => {
  return (
    <View className="flex-col">
      <H1 className="p-5">Colors</H1>
      <View className="flex-row">
        <View className="flex-col">
          <Text className="m-5 h-20 w-20 bg-purple-500"></Text>
          <Text className="m-5 h-20 w-20 bg-slate-500"></Text>
          <Text className="m-5 h-20 w-20 bg-slate-500"></Text>
        </View>
      </View>
    </View>
  );
};
