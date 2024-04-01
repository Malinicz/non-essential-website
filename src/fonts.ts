import localFont from "next/font/local";
import { Anton } from "next/font/google";

export const mainFont = localFont({
  src: "../public/KumbhSans.ttf",
  display: "swap",
  variable: "--font-main",
});

export const headerFont = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-header",
});
