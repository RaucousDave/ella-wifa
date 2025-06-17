/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust to your file structure
  ],
  darkMode: "class", // Use dark class manually or by default
  theme: {
    extend: {
      colors: {
        background: "#121212", // main background
        surface: "#1E1E1E", // for cards/sections
        lilac: {
          light: "#EAD9FF",
          DEFAULT: "#CBA6F7",
          dark: "#A37CCF",
        },
        grayish: "#EAEAEA", // for body text
      },
      fontFamily: {
        sentient: ['"Sentient"', "serif"],
        heading: "Be Vietnam Pro",
      },
      backgroundImage: {
        // Optional soft gradients for blobs or sections
        "gradient-lilac": "linear-gradient(90deg, #d5b3ff, #c79aff)",
        "gradient-spotlight":
          "radial-gradient(circle at top left, #cba6f7 0%, transparent 70%)",
      },
      boxShadow: {
        lilac: "0 0 20px rgba(203, 166, 247, 0.2)",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.grayish"),
            a: { color: theme("colors.lilac.DEFAULT") },
          },
        },
      }),
    },
  },
  plugins: [],
};
