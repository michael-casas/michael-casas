import { useCallback, useRef, useState } from "react";
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
import { Path, Rect, Touchable } from "../../../components";
import React from "react";
import {
  interpolate,
  runOnUI,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

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
  const toggled = useSharedValue(false);
  const progress = useDerivedValue(() => {
    return toggled.value
      ? withTiming(1, { duration: 500 })
      : withTiming(0, { duration: 500 });
  }, [toggled]);
  const topStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(progress.value, [0, 1], [0, 20]),
        },
      ],
    };
  }, [toggled]);
  const bottomStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(progress.value, [0, 1], [0, -20]),
        },
      ],
    };
  }, [toggled]);

  return (
    <Touchable
      onPress={(e: GestureResponderEvent) => {
        // TODO Touchable Not Interpolating on web, issue with reanimated on web?
        if (onPress) onPress();
        toggled.value = !toggled.value;
        console.log("Menu pressed! \nState: ", toggled.value);
        console.log("\nEvent: ", e);
      }}
      className="rounded-md hover:bg-slate-100"
    >
      <Svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        {...props}
      >
        <Rect
          style={[topStyle]}
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
          style={[bottomStyle]}
          fill={fill}
          stroke={stroke}
          width={80}
          height={10}
          rx={5}
          x={10}
          y={65}
        />
      </Svg>
    </Touchable>
  );
}
