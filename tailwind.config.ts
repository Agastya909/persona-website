import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      lora: ["Lora", "Sans-serif"],
      playFair: ["Playfair Display", "Sans-serif"],
      poppins: ["Poppins", "Sans-serif"],
    },
    screens: {
      pc: "640px",
      tablet: "480px",
      mobile: "320px",
      zero: "0px",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        nav_bg: "var(--nav-background)",
        nav_item_active: "#5dfdcb",
      },
      keyframes: {
        changeNameColor: {
          "0%": { color: "#fff" },
          "25%": { color: "#47a8bd" },
          "50%": { color: "#ffad69" },
          "75%": { color: "#ee4266" },
          "100%": { color: "#5dfdcb" },
        },
      },
      animation: {
        changeNameColor: "changeNameColor 10s infinite alternate",
      },
    },
  },
  plugins: [],
};
export default config;
