import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#061523",
          900: "#071A2C",
          850: "#0B1F35"
        },
        cta: "#FFD21F",
        steelblue: "#0B4D8C"
      },
      boxShadow: {
        card: "0 18px 40px rgba(15, 23, 42, 0.10)",
        dark: "0 24px 70px rgba(0, 0, 0, 0.32)"
      },
      borderRadius: {
        card: "18px"
      }
    }
  },
  plugins: []
};

export default config;
