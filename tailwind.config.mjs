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
					100: '#b8b8b8',
					200: '#a0a0a0',
					300: '#898989',
					400: '#717171',
					500: '#595959',
					600: '#414141',
					700: '#2a2a2a',
					800: '#121212'
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
