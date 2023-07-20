import { useCallback, useMemo, useRef, useState } from "react";
import {
  Animated,
  GestureResponderEvent,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from "react-native";
import {
  Svg,
  Path as NativePath,
  Circle,
  Rect as NativeRect,
} from "react-native-svg";
// import { Path, Rect, Touchable } from "../../../components";
import React from "react";
import { useAnimationState } from "moti";
import {
  MotiPressable,
  useMotiPressable,
  useMotiPressableTransition,
} from "moti/interactions";
import { motifySvg } from "moti/svg";
import { styled } from "nativewind";
import { useSharedValue } from "react-native-reanimated";

const Rect = motifySvg(NativeRect)();
// const Touchable = styled(MotiPressable);

type MenuProps = {
  fill?: string;
  stroke?: string;
  size: number;
  onPress?: () => void;
} & React.ComponentProps<typeof Svg>;

export default function Menu({
  fill,
  stroke,
  size,
  onPress,
  ...props
}: MenuProps) {
  const topTransition = useMotiPressableTransition(({ pressed }) => {
    "worklet";
    return {
      type: "timing",
      duration: 500,
    };
  });
  const topState = useMotiPressable(({ pressed }) => {
    "worklet";

    return {
      translateY: pressed ? 0 : 20,
    };
  });
  const bottomTransition = useMotiPressableTransition("menu", ({ pressed }) => {
    "worklet";
    return {
      type: "timing",
      duration: 500,
    };
  });
  const bottomState = useMotiPressable("menu", ({ pressed }) => {
    "worklet";

    return {
      translateY: pressed ? 0 : -20,
    };
  });

  return (
    <MotiPressable
      id="menu"
      onPress={() => {
        // TODO Touchable Not Interpolating on web, issue with reanimated on web?
        if (onPress) onPress();
        console.log("Pressed! \n");
      }}
    >
      <Svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        {...props}
      >
        <Rect
          transition={topTransition}
          fill={fill}
          stroke={stroke}
          width={80}
          height={10}
          rx={5}
          x={10}
          y={25}
        />
        <Rect
          fill={fill}
          stroke={stroke}
          width={80}
          height={10}
          rx={5}
          x={10}
          y={45}
        />
        <Rect
          state={bottomState}
          transition={bottomTransition}
          fill={fill}
          stroke={stroke}
          width={80}
          height={10}
          rx={5}
          x={10}
          y={65}
        />
      </Svg>
    </MotiPressable>
  );
}
