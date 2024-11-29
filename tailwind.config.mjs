/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"primary": "#04513C",
				"secondary": "#84CB27"
			},
			screens: {
				'ss': '450px',
			}
		},
	},
	plugins: [],
}
