import "../atoms/sheet/sheets";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeArea } from "./safe-area";
import { SheetProvider } from "react-native-actions-sheet";

interface UIProviderProps {
  children: React.ReactNode;
}
export const UIProvider = ({ children }: UIProviderProps) => {
  return (
    <SafeArea>
      <GestureHandlerRootView>
        <SheetProvider context="global">{children}</SheetProvider>
      </GestureHandlerRootView>
    </SafeArea>
  );
};
