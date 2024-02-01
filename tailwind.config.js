import {nextui} from '@nextui-org/theme'
import { withUt } from "uploadthing/tw";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    './node_modules/react-tailwindcss-datepicker/dist/index.esm.js',

  ],
  theme: {
    extend: {
      backgroundImage: {
        'emailBackground': "url('/bg/emailBg.jpg')",
        'about-background': "url('/bg/about/1.png')",
        'about-background2': "url('/bg/about/2.png')",
        'about-background3': "url('/bg/about/3.png')",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
