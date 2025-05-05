/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: ["./src/**/*.{js,jsx,ts,tsx}", "*.{js,ts,jsx,tsx,mdx}", "app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
	theme: {
		extend: {
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				navy: "#0a192f",
				"light-navy": "#112240",
				"lightest-navy": "#233554",
				slate: "#8892b0",
				"light-slate": "#a8b2d1",
				"lightest-slate": "#ccd6f6",
				white: "#e6f1ff",
				green: "#64ffda",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			fontFamily: {
				sans: ["Calibre", "Inter", "San Francisco", "SF Pro Text", "system-ui", "sans-serif"],
				mono: ["SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", "monospace"],
			},
			animation: {
				dash: "dash 1.5s ease-in-out forwards",
			},
			keyframes: {
				dash: {
					to: {
						strokeDashoffset: "0",
					},
				},
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
}
