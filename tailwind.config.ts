import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "right-layout-primary": "#F7F8FA",
        sky: "#C3EBFA",
        skylight: "#EDF9FD",
        purple: "#CFCEFF",
        purplelight: "#F1F0FF",
        yellow: "#FAE27C",
        yellolight: "#FEFCE8",
      },
    },
  },
  plugins: [],
};
export default config;
