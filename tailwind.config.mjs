/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'charcoal': '#1F2937',
				'jet-black': '#030712',
				'raisin-black': '#111827',
      	'silver-chalice': '#BCBCBC',
			}
		},
	},
	plugins: [],
}
