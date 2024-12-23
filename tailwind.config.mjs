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
        primary: '#00AEB7',
        secondary: '#11253E',
      },
      dropShadow: {
        custom: '1px 2px 2px rgba(0, 0, 0, 0.9)',
      },
    }
  },
  plugins: [],
};
