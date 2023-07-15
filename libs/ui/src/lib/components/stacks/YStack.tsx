import { View } from "..";

type YStackProps = {} & React.ComponentProps<typeof View>;

export default function YStack({ children }: YStackProps) {
  return <View className="flex-col">{children}</View>;
}
