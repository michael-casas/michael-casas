import { useState } from "react";
import { TouchableHighlight, TouchableWithoutFeedback } from "react-native";
import { Svg, Path as NativePath, Circle } from "react-native-svg";
import { Path, Rect, Touchable } from "../../../components";
import React from "react";
import {
  runOnJS,
  runOnUI,
  useAnimatedStyle,
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
  const [toggled, setToggled] = useState(false);
  const topStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: toggled
            ? withTiming(20, {
                duration: 750,
              })
            : withTiming(0, {
                duration: 750,
              }),
        },
      ],
    };
  });
  const bottomStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: toggled
            ? withTiming(-20, {
                duration: 750,
              })
            : withTiming(0, {
                duration: 750,
              }),
        },
      ],
    };
  });

  return (
    <Touchable
      onPress={() => {
        if (onPress) onPress();
        setToggled(!toggled);
        console.log("Menu pressed! \nState: ", toggled);
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
