import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#08111f",
        panel: "#101b2f",
        accent: "#8b5cf6",
        sky: "#22d3ee",
        success: "#34d399",
        warn: "#fbbf24",
        danger: "#f87171"
      },
      boxShadow: {
        soft: "0 18px 40px rgba(15, 23, 42, 0.35)"
      }
    }
  },
  plugins: []
};

export default config;
