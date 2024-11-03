/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      fontSize: {
        base: "10px",
      },
      zIndex: {
        baixo: "-1",
      },
      backgroundImage: {
        "custom-gradient":
          " linear-gradient(109deg, rgba(10, 12, 16, 0.99) 15%, rgba(10, 12, 16, 0.7) 50%, rgba(10, 12, 16, 0.99) 85%)",
      },
      borderColor: {
        grayClaro: "rgba(255, 255, 255, 0.3)",
      },
      borderWidth: {
        b1px: "0.1rem",
      },
      colors: {
        mainColor: "#d3ad7f",
        mainColorHover: "#cc9a5c",
      },
    },
  },
  plugins: [],
};
