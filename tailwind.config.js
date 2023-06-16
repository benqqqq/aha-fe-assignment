const defaultConfig = require('tailwindcss/defaultConfig')
const formsPlugin = require('@tailwindcss/forms')

/** @type {import('tailwindcss/types').Config} */
const config = {
	content: ['index.html', 'src/**/*.tsx'],
	theme: {
		fontFamily: {
			sans: ['Ubuntu', ...defaultConfig.theme.fontFamily.sans]
		},
		extend: {
			/**
			 * XXX: follow the guide to pick the colors: https://tailwindcss.com/docs/customizing-colors#using-custom-colors,
			 * instead of write arbitrary colors
			 * (because we don't have a full understand of the color palettes in our design system, so we use arbitrary colors now)
			 */

			colors: {
				primary: {
					light: '#00D1FF'
				},
				greyscaleBgDark: '#1B1B1B',
				greyscale: {
					700: '#565656',
					800: '#242424'
				}
			},
			letterSpacing: {
				tighter: '-.05em',
				tight: '-.025em',
				normal: '0',
				wide: '.017em',
				wider: '.05em',
				widest: '.1em'
			}
		}
	},
	experimental: { optimizeUniversalDefaults: true },
	plugins: [formsPlugin]
}
module.exports = config
