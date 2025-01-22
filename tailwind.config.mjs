/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        appear: {
          "0%": { opacity: 0, transform: "translateY(-1rem)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        disappear: {
          "0%": { opacity: 1, transform: "translateY(0)" },
          "100%": { opacity: 0, transform: "translateY(-1rem)" },
        },
        slideIn: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideOut: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        appear: "appear 0.75s ease-out",
        disappear: "disappear 0.75s ease-out",
        slideIn: "slideIn 0.25s ease-out",
        slideOut: "slideOut 0.25s ease-out",
      },
    },
  },
  plugins: [],
};
