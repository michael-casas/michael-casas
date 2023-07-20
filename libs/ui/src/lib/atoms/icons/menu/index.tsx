import { Svg } from "react-native-svg";
import { Rect, Touchable } from "../../../components";
import React from "react";
import {
  useSharedValue,
  withTiming,
  useDerivedValue,
  interpolate,
  useAnimatedProps,
  useAnimatedStyle,
  withSequence,
  Extrapolate,
} from "react-native-reanimated";
import { Platform } from "react-native";

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
  // TODO begin animation sequence for animated Hamburger
  const DURATION = 750;
  const toggled = useSharedValue(false);
  const progress = useDerivedValue(() => {
    return toggled.value
      ? withTiming(1, { duration: DURATION })
      : withTiming(0, { duration: DURATION });
  }, [toggled]);

  const topTranslation = useAnimatedProps(() => {
    return {
      transform: [
        {
          translateY: interpolate(progress.value, [0, 1], [0, 20]),
        },
      ],
    };
  }, [progress]);
  const botTranslation = useAnimatedProps(() => {
    return {
      transform: [
        {
          translateY: interpolate(progress.value, [0, 1], [0, -20]),
        },
      ],
    };
  }, [progress]);

  return (
    <Touchable
      onPress={() => {
        if (onPress) onPress();
        toggled.value = !toggled.value;
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
          fill={fill}
          stroke={stroke}
          width={80}
          height={10}
          rx={5}
          x={10}
          y={25}
          animatedProps={topTranslation}
          // style={[topStyle]}
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
          fill={fill}
          stroke={stroke}
          width={80}
          height={10}
          rx={5}
          x={10}
          y={65}
          animatedProps={botTranslation}
          // style={[botStyle]}
        />
      </Svg>
    </Touchable>
  );
}
