import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'media', // Enable dark mode based on system preference
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: {
          DEFAULT: "#E37BB7",
          hover: "#E079B5",
          dark: "#C85A9A", // Darker variant for better contrast on light backgrounds
        },
      },
    },
  },
  plugins: [],
};
export default config;
