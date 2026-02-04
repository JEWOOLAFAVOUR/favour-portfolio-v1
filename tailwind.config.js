/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: ["./src/**/*.{js,jsx,ts,tsx}", "*.{js,ts,jsx,tsx,mdx}", "app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
	theme: {
		extend: {
			colors: {
				black: "#000000",
				white: "#ffffff",
				purple: "#8B5CF6",
				gray: {
					DEFAULT: "#4A4A4A",
					light: "#6B6B6B",
					dark: "#1A1A1A",
				},
			},
			fontFamily: {
				sans: ["Neue Haas Grotesk Display", "system-ui", "sans-serif"],
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
