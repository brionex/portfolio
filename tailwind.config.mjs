/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#111827',
        'black-blue': '#030712',
        'soft-blue': '#94A3B8',
        'steel-blue': '#303C4F',
        'sky-blue': '#32B7E8',
      },
    },
  },
  plugins: [],
}
