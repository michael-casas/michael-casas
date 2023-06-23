import { StatusBar, useColorScheme, useWindowDimensions } from "react-native";
import { Feather } from "@expo/vector-icons";
import { styled } from "nativewind";
import { View } from "../../lib";
import { H3, H5 } from "../../typeography/components";

interface HomeProps {
  theme: "light" | "dark";
}

// const Menu = styled(Feather);

// TODO: Building a Base storybook
export const Home = (props: HomeProps) => {
  const theme = useColorScheme();

  return (
    <View className="flex-row justify-between p-5 drop-shadow-sm bg-slate-100">
      <H3 className="bg-orange-300 text-center md:text-4xl font-primary font-bold">
        Bro what is Happening?
      </H3>
      {/* <Menu className="md:hidden" size={32} name="menu" color={"black"} /> */}
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
