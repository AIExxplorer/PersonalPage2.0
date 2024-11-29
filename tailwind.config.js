/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Inclua todos os arquivos na pasta src
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          500: "#3257d1",
        },
        gray: {
          900: "#1d1f22",
        },
        background: "rgb(var(--background))",
        foreground: "rgb(var(--foreground))",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [
    import("tailwindcss-animate"),
    import("@tailwindcss/forms"),
    import("@tailwindcss/typography"),
  ],
};
