const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,html}"],
  theme: {
    colors: {
      bgMain: "#0C0C0C",
      bgSurface: "#1A1A1A",
      textPrimary: "#F9F4E9",
      textSecondary: "#B89F77",
      gold: "#FFD700",
      richGold: "#D4AF37",
      glowGold: "rgba(255, 215, 0, 0.2)",
      error: "#FF4F4F",
    },
    fontFamily: {
      sans: ["Poppins", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
