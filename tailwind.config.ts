import type { Config } from "tailwindcss";
/** @type {import('tailwindcss').Config} */

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/chunks/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/_misc/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    extend: {
      fontFamily: {
        clash: ["var(--font-clash)"],
        epilogue: ["var(--font-epilogue)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "div-custom":
          "linear-gradient(180deg, #0046BF 0%, #25324B 51.5%, #FFFFFF 100%)",
      },
      colors: {
        prussianBlue: "rgba(0,35,96,1)",
        cobaltBlue: "rgba(0,35,96,1)",
        athsSpecial: "#DAD2B8",
        lightBlue: "#B5CAEC80",
        blue: "#0046BF",
        "light-blue": "#1976D2",
        grey: "#1B1B1B",
        pictonBlue: "rgba(82,151,219,0.2)",
        blueGray: "#25324B",
        grayishBlue: "#515B6F",
        coolGray: "#7C8493",
        royalBlue: "#002360",
        semiBlue: "#515B6F99",
        pastelBlue: "#D6DDEB",
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        ssm: "840px",
        // => @media (min-width: 768px) { ... }

        lg: "1025px",
        // => @media (min-width: 1024px) { ... }

        xl: "1480px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },

  	extend: {
  		fontFamily: {
  			clash: ["var(--font-clash)"],
  			epilogue: ["var(--font-epilogue)"]
  		},
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
  			'div-custom': 'linear-gradient(180deg, #0046BF 0%, #25324B 51.5%, #FFFFFF 100%)'
  		},
  		colors: {
  			prussianBlue: 'rgba(0,35,96,1)',
  			cobaltBlue: 'rgba(0,35,96,1)',
  			athsSpecial: '#DAD2B8',
  			lightBlue: '#B5CAEC80',
  			blue: '#0046BF',
  			'light-blue': '#1976D2',
  			grey: '#1B1B1B',
  			pictonBlue: 'rgba(82,151,219,0.2)',
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
  		screens: {
  			sm: '640px',
  			md: '768px',
  			ssm: '840px',
  			lg: '1025px',
  			xl: '1480px',
  			'2xl': '1536px'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}

  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
