import { styled, NativeWindStyleSheet } from "nativewind";
import Animated from "react-native-reanimated";
import { Pressable } from "react-native";

const AnimatedTouchable = Animated.createAnimatedComponent(Pressable);
export const Touchable = styled(AnimatedTouchable);
