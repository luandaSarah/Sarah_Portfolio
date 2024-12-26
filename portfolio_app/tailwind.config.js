/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        tertiaryColor: "var(--tertiaryColor)",
        whiteColor: "var(--whiteColor)",
        primaryColor: "var(--primaryColor)",
        secondaryColor: "var(--secondaryColor)",
        bgColor: "var(--bgColor)",
        blackColor: "var(--blackColor)",
        tertiaryColor: "var(--tertiaryColor)",
      },
    },
  },
  plugins: [],
};
