/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				softBlue: '#5368df',
				softRed: '#fa5757',
				grayishBlue: '#9194a1',
				veryDarkBlue: '#252b46'
			}
		},
	},
	plugins: [],
}
