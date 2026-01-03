/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#79BD9A",
          DEFAULT: "#3B8686",
          dark: "#0B486B",
        },
      },
      fontFamily: {
        sans: ["system-ui", "sans-serif"],
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors.brand.dark"),
            "--tw-prose-headings": theme("colors.brand.dark"),
            "--tw-prose-links": theme("colors.brand.DEFAULT"),
            "--tw-prose-bold": theme("colors.brand.dark"),
            a: {
              textDecoration: "underline",
              "&:hover": {
                color: theme("colors.brand.light"),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
