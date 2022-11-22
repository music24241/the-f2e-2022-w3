/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#FFCB2D",
        },
        info: {
          100: "#5137FF",
        },
        secondary: {
          100: "#E0E0E0",
          200: "#FFF9F6",
          300: "#2B2B2B",
        },
        danger: {
          100: "#FF60FA",
        },
      },
      borderWidth: {
        3: "3px",
      },
      borderRadius: {
        "4xl": "36px",
      },
      fontSize: {
        "2.5xl": ["28px", "42px"],
      },
      width: {
        10: "10%",
        30: "30%",
      },
    },
  },
  plugins: [],
};
