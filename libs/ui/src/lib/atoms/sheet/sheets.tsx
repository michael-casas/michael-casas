import { registerSheet, SheetDefinition } from "react-native-actions-sheet";
import { ExampleSheet } from "./example";

registerSheet("example-sheet", ExampleSheet);

declare module "react-native-actions-sheet" {
  interface Sheets {
    "example-sheet": SheetDefinition;
  }
}

export {};
