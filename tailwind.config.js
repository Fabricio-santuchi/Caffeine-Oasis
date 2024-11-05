import scrollbar from "tailwind-scrollbar";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      fontSize: {
        base: ["10px", { lineHeight: "1.5" }],
      },
      zIndex: {
        negative: "-1",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(109deg, rgba(10, 12, 16, 0.99) 15%, rgba(10, 12, 16, 0.7) 50%, rgba(10, 12, 16, 0.99) 85%)",
      },
      borderWidth: {
        b1px: "0.1rem",
      },
      colors: {
        main: {
          DEFAULT: "#d3ad7f",
          hover: "#cc9a5c",
        },
        blackdf: "#131313",
        grayClaro: "rgba(255, 255, 255, 0.3)",
      },
      screens: {
        xs: "400px",
        wCoffee: "965px",
      },
    },
  },
  plugins: [scrollbar],
};
