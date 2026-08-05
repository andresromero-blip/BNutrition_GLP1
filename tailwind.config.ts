import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bn: {
          bg: "#e8efe2",
          olive: "#58664e",
          "olive-light": "#5f7450",
          "olive-dark": "#2f4f1e",
          fibraBg: "#eef3e7",
          fibraBorder: "#d6e1c8",
          proteinaBg: "#f3ffe7",
          proteinaBorder: "#d6e1c8",
          "cta-green": "#5a7d3a",
          blue: "#0d47a1",
          "blue-border": "#082b73",
        },
      },
      fontFamily: {
        work: ["var(--font-work-sans)", "sans-serif"],
        nunito: ["var(--font-nunito-sans)", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
