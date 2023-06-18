const { createGlobPatternsForDependencies } = require("@nx/react/tailwind");
const { join } = require("node:path");
const { theme } = require("@nox-technologies/ui/lib/tailwindcss/theme");

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
    ...theme,
  },
  plugins: [require("nativewind/tailwind/css")],
  important: "html",
};
