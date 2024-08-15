import { Epilogue } from "next/font/google";
import localFont from "next/font/local";

export const epilogue = Epilogue({
  subsets: ["latin"],
  variable: "--font-epilogue",
  display: "swap",
});

export const clash = localFont({
  src: [
    {
      path: "./ClashDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./ClashDisplay-Medium.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "./ClashDisplay-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./ClashDisplay-Bold.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-clash",
});
