/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			'phone': '640px',
			// => @media (min-width: 640px) { ... }

			'tablet': '768px',
			// => @media (min-width: 768px) { ... }

			'laptop': '1024px',
			// => @media (min-width: 1024px) { ... }

			'desktop': '1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
		},
		extend: {},
	},
	plugins: [require('tailwindcss-animated')],
	background: {
		'border-radius': '0.8rem',
		'border': '1px solid #1E2D3D',
		'background': '#011627',
	},
}
