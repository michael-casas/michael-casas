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
  variable: "--font-work-sans",
});
