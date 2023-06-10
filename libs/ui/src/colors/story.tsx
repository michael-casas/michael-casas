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
          <Text className="m-5 text-4xl bg-slate-500 text-black">Color</Text>
          <Text className="m-5 text-4xl bg-purple-600 text-white">Color</Text>
          <Text className="m-5 text-4xl bg-purple-600 text-white">Color</Text>
        </View>
      </View>
    </View>
  );
};
