import { View, Text } from "react-native";
import { styled } from "nativewind";

const DarkCircle = styled(View, "rounded bg-purple-600");
const P = styled(Text, "text-base");
const H1 = styled(Text, "text-xl");

interface UiProps {}

export function Ui(props: UiProps): JSX.Element {
  return (
    <View>
      <View className="bg-purple-600 text-teal-100">Bloopy Bluppy</View>
      <H1 tw="bg-blue-400">Thingy</H1>
      <P tw="bg-red-200">Thingy</P>
      <DarkCircle>Buddy</DarkCircle>
    </View>
  );
}

export default Ui;
