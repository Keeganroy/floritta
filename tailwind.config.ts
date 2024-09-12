import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			colors: {
				transparent: 'transparent',
				white: '#fdfdfd',
				silver: '#f2f2f4',
				light_grey: '#cecece',
				grey: '#878787',
				graphite: '#585858',
				black: '#131313'
			},
			fontFamily: {
				jost: ['var(--font-jost)'],
				garamond: ['var(--font-cormorant-garamond)']
			}
		}
	},
	plugins: []
}
export default config
