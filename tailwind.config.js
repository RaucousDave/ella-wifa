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
        primary: {
          light: "hsl(286, 80%, 72%)",
          dark: "hsl(286, 70%, 40%)", // deeper, for hover or bg
        }, // bright orchid
        background: "#0e0e11",
        foreground: "#f5f5f5",
      },
      fontFamily: {
        heading: ['"Hatton"', "serif"],
        body: ['"Be Vietnam Pro"', "sans-serif"],
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
