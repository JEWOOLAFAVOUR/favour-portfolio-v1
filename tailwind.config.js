/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: ["./src/**/*.{js,jsx,ts,tsx}", "*.{js,ts,jsx,tsx,mdx}", "app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
	theme: {
		extend: {
			colors: {
				navy: "#0e172a",
				"navy-light": "#112240",
				slate: "#8892b0",
				"slate-light": "#a8b2d1",
				"slate-lightest": "#ccd6f6",
				teal: "#64ffda",
				white: "#e6f1ff",
			},
			fontFamily: {
				sans: ["Inter", "system-ui", "sans-serif"],
				mono: ["SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", "monospace"],
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
