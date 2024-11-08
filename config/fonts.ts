import { Fira_Code as FontMono, Inter as FontSans } from "next/font/google"
import  localFont from "next/font/local"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const fontPlayfairDisplay = localFont({
  src: "../font/PlayfairDisplay.woff2",
  variable: "--font-playfair-display",
  display: "swap",
})