import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				Edwardian: ['Edwardian Script ITC', 'sans-serif'],
				Helvetica: ['Helvetica'],
				InterTight: ['Inter Tight'],
				Aeonik: ['Aeonik']
			},
			screens: {
				mon: '1900px',
				'tall': { 'raw': '(min-height: 800px)' },
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				underlineRightToLeft: {
					'0%': {
						opacity: '0'
						, transform: 'scaleX(0)', transformOrigin: 'left'
					},

					'50%': {
						opacity: '0'
						, transform: 'scaleX(0)', transformOrigin: 'left'
					},

					'100%': {
						opacity: '1',
						transform: 'scaleX(1)', transformOrigin: 'left'
					},
				},
				underlineTravel: {
					'0%': { transform: 'translateX(0%)', width: '0%' },
					'50%': { transform: 'translateX(100%)', width: '50%' },
					'100%': { transform: 'translateX(100%)', width: '100%' },
				},
				pulseCircle: {
					'0%, 100%': {
						transform: 'scale(1)',
						filter: 'blur(0px)',
					},
					'50%': {
						transform: 'scale(1.5)',
					},
				},
				roll: {
					"0%,20%": { transform: "translateY(143%)" },
					"25%,45%": { transform: "translateY(43%)" },
					"50%,70%": { transform: "translateY(-57%)" },
					"75%,95%": { transform: "translateY(-157%)"  },
					"100%": { transform: "translateY(143%)" },
				},

			},

			animation: {
				'accordion-down': 'accordion-down 0.7s ease-out',
				'accordion-up': 'accordion-up 0.7s ease-out',
				'underlineRightToLeft': 'underlineRightToLeft 1s ease-out forwards',
				'underlineTravel': 'underlineTravel 2s ease-in-out infinite',
				'pulseCircle': 'pulseCircle 2.5s ease-in-out infinite',
				'roll': "roll 16s ease-in-out infinite",

			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;