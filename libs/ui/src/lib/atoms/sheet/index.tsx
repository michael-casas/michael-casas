import { styled } from "nativewind";
import RNActionSheet from "react-native-actions-sheet";

const ActionSheet = styled(RNActionSheet, {
  props: {
    containerStyle: true,
  },
});

export * from "./example";
export default ActionSheet;
