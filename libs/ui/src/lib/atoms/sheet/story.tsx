import {
  Button as RNButton,
  SafeAreaView as RNSafeAreaView,
  TouchableOpacity as RNTouchableOpacity,
} from "react-native";
import { useColorScheme, styled } from "nativewind";
import { SheetManager } from "react-native-actions-sheet";
import { H1, H3, H5, P } from "../../tokens";
import { ExampleSheet } from "./example";

interface SheetStoryProps {
  theme: "light" | "dark";
}

const SafeAreaView = styled(RNSafeAreaView);
const Button = styled(RNButton);
const TouchableOpacity = styled(RNTouchableOpacity);

export const SheetStory = (props: SheetStoryProps) => {
  // const { width } = useWindowDimensions();

  const theme = useColorScheme();

  return (
    <SafeAreaView className="">
      <H1> Click to see the Example Sheet</H1>
      <Button
        title="Show Sheet"
        className="border-r-2"
        onPress={() => {
          SheetManager.show("example-sheet");
        }}
      />
      <ExampleSheet />
    </SafeAreaView>
  );
};
