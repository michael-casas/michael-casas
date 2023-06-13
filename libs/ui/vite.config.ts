/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsConfigPaths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";
import commonJs from "@rollup/plugin-commonjs";
import { joinPathFragments } from "@nx/devkit";

export default defineConfig({
  cacheDir: "../../node_modules/.vite/ui",
  resolve: {
    alias: {
      "react-native$": "react-native-web",
      "@expo/vector-icons": "react-native-vector-icons",
    },
  },
  plugins: [
    dts({
      entryRoot: "src",
      tsConfigFilePath: joinPathFragments(__dirname, "tsconfig.lib.json"),
      skipDiagnostics: true,
    }),
    react({
      babel: {
        babelrc: true,
      },
    }),
    commonJs({
      transformMixedEsModules: true,
    }),
    viteTsConfigPaths({
      root: "../../",
    }),
  ],
  optimizeDeps: {
    include: ["nativewind"],
    needsInterop: ["react-native", "react-native-vector-icons"],
  },

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [
  //    viteTsConfigPaths({
  //      root: '../../',
  //    }),
  //  ],
  // },

  // Configuration for building your library.
  // See: https://vitejs.dev/guide/build.html#library-mode
  build: {
    // commonjsOptions: {
    //   include: [/react-native/, /react-native-vector-icons/, /node_modules/],
    // },
    lib: {
      // Could also be a dictionary or array of multiple entry points.
      entry: "src/index.ts",
      name: "ui",
      fileName: "index",
      // Change this to the formats you want to support.
      // Don't forgot to update your package.json as well.
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      // External packages that should not be bundled into your library.
      external: ["react", "react-dom", "react/jsx-runtime"],
    },
  },
});
