import { styled } from "nativewind";
import Animated from "react-native-reanimated";
import { Rect as NativeRect } from "react-native-svg";

const NativewindRect = styled(NativeRect, { classProps: ["fill", "stroke"] });
export const Rect = Animated.createAnimatedComponent(NativeRect);
