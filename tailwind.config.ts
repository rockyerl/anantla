import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#009951",
          neutral: "#1a1818",
          ".gradient-primary": {
            background:
              "linear-gradient(114.52deg, rgba(0, 0, 0, 1) 30%, rgba(17, 139, 98, 1) 90%)",
          },
          ".gradient-primary-reverse": {
            background:
              "linear-gradient(114.52deg, rgba(17, 139, 98, 1) 30%, rgba(0, 0, 0, 1) 90%)",
          },
          ".gradient-secondary": {
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.19) 0%, rgba(4, 22, 13, 0.19) 55.16%)",
          },
          ".gradient-secondary-reverse": {
            background:
              "linear-gradient(118.4deg, #04160D -17.39%, rgba(44, 209, 131, 0.54) 89.9%)",
          },
          ".btn-gradient-primary": {
            background:
              "linear-gradient(90deg, #084826 0%, #14AE5C 100%)",
          },
        },
      },
    ],
  },
};
export default config;
