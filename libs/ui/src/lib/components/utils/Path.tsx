import { styled, NativeWindStyleSheet } from "nativewind";
import Animated from "react-native-reanimated";
import { Path as NativePath } from "react-native-svg";

const NativewindPath = styled(NativePath, { classProps: ["fill", "stroke"] });
export const Path = Animated.createAnimatedComponent(NativePath);
