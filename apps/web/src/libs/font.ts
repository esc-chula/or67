import {
  IBM_Plex_Sans_Thai as IBMPlexSansThai,
  Manrope,
} from "next/font/google";

export const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const ibmPlexSansThai = IBMPlexSansThai({
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans-thai",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "swap",
});
