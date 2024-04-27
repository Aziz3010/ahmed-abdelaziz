import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,ts,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,ts,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,ts,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,ts,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
