/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "rgb(var(--c-bg))",
        "ink-soft": "rgb(var(--c-card))",
        "ink-card": "rgb(var(--c-card))",
        "card-hover": "rgb(var(--c-card-hover))",
        nav: "rgb(var(--c-nav) / 0.92)",
        cream: "rgb(var(--c-text))",
        muted: "rgb(var(--c-n400))",
        "muted-dim": "rgb(var(--c-n500))",
        line: "rgb(var(--c-line) / 0.1)",
        "line-strong": "rgb(var(--c-line) / 0.22)",
        neutral: {
          200: "rgb(var(--c-n200))",
          300: "rgb(var(--c-n300))",
          400: "rgb(var(--c-n400))",
          500: "rgb(var(--c-n500))",
          600: "rgb(var(--c-n600))",
        },
      },
      fontFamily: {
        sans: ["DM Sans", "Inter", "system-ui", "sans-serif"],
        display: ["DM Sans", "Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
