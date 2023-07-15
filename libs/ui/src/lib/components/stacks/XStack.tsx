import { View } from "..";

type XStackProps = {} & React.ComponentProps<typeof View>;

export default function XStack({ children }: XStackProps) {
  return <View className="flex-col">{children}</View>;
}
