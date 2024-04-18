/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'selector',
	theme: {
		extend: {
			colors: {
				'primary': '#C74634',
				'secundary': '#232A31',
				'secundary-light': '#3F4B56',
				'white': '#F5F5F5',
				'black': '#111111',
				'light-gray': '#DDDDDD',
				'dark-gray': '#BBBBBB'
			}
		},
	},
	plugins: [],
}
