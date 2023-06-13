import { Text, View } from "../lib";

interface ColorStoryProps {
  theme: "light" | "dark";
}

export const ColorStory = (props: ColorStoryProps) => {
  return (
    <View className="flex-col">
      <Text className="p-5 m-5 text-6xl">Colors</Text>
      <View className="flex-row">
        <View className="flex-col">
          <Text className="m-5 h-20 w-20 bg-slate-500"></Text>
          <Text className="m-5 h-20 w-20 bg-slate-500"></Text>
          <Text className="m-5 h-20 w-20 bg-slate-500"></Text>
        </View>
      </View>
    </View>
  );
};
