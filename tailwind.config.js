/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		container: {
			screens: {
				sm: '100%',
				md: '100%',
				lg: '1024px',
				xl: '1024px',
			},
		},
	},
	plugins: [],
};
