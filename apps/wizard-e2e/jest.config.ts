/* eslint-disable */
export default {
  displayName: "wizard-e2e",
  preset: "../../jest.preset.js",
  transform: {
    "^.+\\.[tj]s$": ["ts-jest", { tsconfig: "<rootDir>/tsconfig.spec.json" }],
  },
  moduleFileExtensions: ["ts", "js", "html"],
  coverageDirectory: "../../coverage/apps/wizard-e2e",
};
