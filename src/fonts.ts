import localFont from "next/font/local";
import { Anton } from "next/font/google";

export const futuraFont = localFont({
  src: "../public/futura.ttf",
  display: "swap",
  variable: "--font-futura",
});

export const antonFont = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-anton",
});
