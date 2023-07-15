import { ComponentProps, forwardRef } from "react";
import { Linking, Text as NativeText, Platform } from "react-native";
import { StyledProps, styled } from "nativewind";
import { Text } from "../../../../lib/components";

export const H1 = styled(NativeText, "font-primary text-5xl");
export const H2 = styled(NativeText, "font-primary text-4xl");
export const H3 = styled(NativeText, "font-primary text-3xl");
export const H4 = styled(NativeText, "font-primary text-2xl");
export const H5 = styled(NativeText, "font-primary text-xl");
export const H6 = styled(NativeText, "font-primary text-lg");
export const P = styled(NativeText, "font-primary text-base");

export interface AnchorProps extends ComponentProps<typeof Text> {
  href?: string;
  target?: "_blank";
}

export const A = forwardRef<NativeText, StyledProps<AnchorProps>>(function A(
  { className = "", href, target, ...props },
  ref
) {
  const nativeAnchorProps = Platform.select<Partial<AnchorProps>>({
    web: {
      href,
      target,
      hrefAttrs: {
        rel: "noreferrer",
        target,
      },
    },
    default: {
      onPress: (event) => {
        props.onPress && props.onPress(event);
        if (Platform.OS !== "web" && href !== undefined) {
          Linking.openURL(href);
        }
      },
    },
  });

  return (
    <Text
      accessibilityRole="link"
      className={`${className}`}
      {...props}
      {...nativeAnchorProps}
      ref={ref}
    />
  );
});
