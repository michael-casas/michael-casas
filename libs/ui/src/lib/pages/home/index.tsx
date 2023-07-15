import {
  StatusBar,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  useColorScheme,
  useWindowDimensions,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import { styled } from "nativewind";
import { View } from "../../components";
import { H3, P } from "../../tokens";
import Menu from "../../tokens/icons/menu";

interface HomeProps {
  theme: "light" | "dark";
}

const Touchable = styled(TouchableHighlight);

// TODO: Build out atomics and first Lead Magnet
export const Home = (props: HomeProps) => {
  const theme = useColorScheme();

  return (
    <View className="flex-row justify-between p-5 drop-shadow-sm bg-slate-100">
      <H3 className="text-center md:text-4xl font-primary font-bold">NOX</H3>
      <Menu className="md:hidden" size={32} fill="#000" stroke="#000" />
      <View className="hidden flex-row md:flex">
        <P className="px-5 font-primary hover:text-purple-400 hover:cursor-pointer">
          About
        </P>
        <P className="px-5 hover:text-purple-400 hover:cursor-pointer">
          Products
        </P>
        <P className="px-5 hover:text-purple-400 hover:cursor-pointer">
          Pricing
        </P>
        <P className="px-5 hover:text-purple-400 hover:cursor-pointer">Login</P>
      </View>
    </View>
  );
};
