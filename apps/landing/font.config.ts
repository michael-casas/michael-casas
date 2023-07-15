import localFont from "next/font/local";

export const workSans = localFont({
  src: [
    {
      path: "./public/fonts/WorkSans.ttf",
      weight: "400",
    },
    {
      path: "./public/fonts/WorkSans_italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./public/fonts/WorkSans_bold.ttf",
      weight: "700",
    },
    {
      path: "./public/fonts/WorkSans_bold_italic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-primary",
});

const fonts = `
@font-face {
    font-family: 'WorkSans';
    src: url('/fonts/WorkSans.ttf') format('truetype'),
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}
`;

export default fonts;
