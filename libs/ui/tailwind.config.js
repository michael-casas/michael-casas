const { createGlobPatternsForDependencies } = require("@nx/react/tailwind");
const { join } = require("node:path");
const { theme } = require("../../tailwind.theme");

const extra = {
  plugins: [require("nativewind/tailwind/css")],
  important: "html",
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      "{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}"
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    fontFamily: {
      primary: ["WorkSans"],
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
};
