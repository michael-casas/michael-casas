import { ActionSheetRef, SheetManager } from "react-native-actions-sheet";
import { H1, H3 } from "../..";
import ActionSheet from "./";
import { Button as RNButton } from "react-native";
import { styled } from "nativewind";
import { useEffect, useRef } from "react";

const Button = styled(RNButton);

// TODO: write story and check storybook
export const ExampleSheet = () => {
  const ref = useRef<ActionSheetRef>(null);

  // useEffect(() => {
  //   ref?.current?.show();
  // }, []);

  return (
    <ActionSheet closeOnTouchBackdrop id="example-sheet" ref={ref}>
      <H3>Hello from Example Sheet!</H3>
      <Button
        title="Close me!"
        className="border-r-2"
        onPress={() => {
          SheetManager.hide("example-sheet");
        }}
      />
    </ActionSheet>
  );
};
