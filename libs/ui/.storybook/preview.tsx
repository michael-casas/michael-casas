import "../src/lib/index.css";
import React, { useEffect } from "react";
import { LoadSkiaWeb } from "@shopify/react-native-skia/lib/module/web";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
// export const decorators = [
//   async (Story) => {
//     await LoadSkiaWeb();
//     return <Story />;
//   },
// ];
