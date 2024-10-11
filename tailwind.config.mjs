/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'rich-black': '#020617',
      },
      fontFamily: {
        inter: ["'Inter Variable'", 'sans-serif'],
        menlo: ["'Menlo Variable'", 'monospace'],
      },
    },
  },
  plugins: [],
}
