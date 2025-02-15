/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from 'tailwindcss';

export default {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				primary: {
					900: '#000000',
					800: '#111111',
				},
				secondary: {
					100: '#ffffff',
					200: '#b3b3b3',
				},
				'accent-primary': {
					500: '#3d4d43',
					400: '#4a6554',
					300: '#607f6d',
				},
				'accent-secondary': '#da8157',
			},
		},
	},
	plugins: [require('@tailwindcss/container-queries')],
} satisfies Config;
