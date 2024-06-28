/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily:{
				'sans': 'Onest',
				'mono': 'Jetbrains'
			},
			colors:{
				'primary': {
					100: '#e7e7e7',
					200: '#d0d0d0',
					300: '#b8b8b8',
					400: '#a0a0a0',
					500: '#898989',
					600: '#717171',
					700: '#595959',
					800: '#414141',
					900: '#2a2a2a',
					1000: '#121212'
				},
				'accent': {
					100: '#92e274',
					200: '#82dd61',
					300: '#73d94d',
					400: '#63d539'
				}
			}
		},
	},
	plugins: [],
}
