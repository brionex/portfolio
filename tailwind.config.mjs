/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'charcoal': '#111827',
				'rich-black': '#030712',
				'cool-gray': '#94A3B8',
      	'charcoal-blue': '#303C4F',
				'sky-blue': '#32B7E8'
			}
		},
	},
	plugins: [],
}
