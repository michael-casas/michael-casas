/** @type {import('tailwindcss').Config['theme']} */
const theme = {
  fontFamily: {
    primary: ["WorkSans"],
    secondary: ["Palanquin"],
    paragraph: ["HindSiliguri"],
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
};

module.exports = {
  theme,
};
