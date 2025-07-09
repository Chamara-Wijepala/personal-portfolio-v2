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
			keyframes: {
				reveal: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				slideInLeft10: {
					'0%': { transform: 'translateX(-10%)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' },
				},
				slideInRight10: {
					'0%': { transform: 'translateX(10%)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' },
				},
			},
		},
	},
	plugins: [require('@tailwindcss/container-queries')],
} satisfies Config;
