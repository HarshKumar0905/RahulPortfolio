/** @type {import('tailwindcss').Config} */

const flowbite = require("flowbite-react/tailwind");

module.exports = {
	darkMode: ["class"],
	content: [
	  "./pages/**/*.{ts,tsx}",
	  "./components/**/*.{ts,tsx}",
	  "./app/**/*.{ts,tsx}",
	  "./src/**/*.{ts,tsx}",
	  flowbite.content()
	],
	theme: {
	  container: {
		center: true,
		padding: "2rem",
		screens: {
		  "2xl": "1400px",
		},
	  },
	  fontSize: {
		"heading-bold": [
		  "70px",
		  {
			lineHeight: "140%",
			fontWeight: "700",
		  },
		],
		"heading1-bold": [
		  "60px",
		  {
			lineHeight: "140%",
			fontWeight: "500",
		  },
		],
		"heading1-semibold": [
		  "20px",
		  {
			lineHeight: "140%",
			fontWeight: "300",
		  },
		],
		"heading2-bold": [
		  "30px",
		  {
			lineHeight: "140%",
			fontWeight: "700",
		  },
		],
		"heading2-semibold": [
		  "30px",
		  {
			lineHeight: "140%",
			fontWeight: "600",
		  },
		],
		"heading3-bold": [
		  "28px",
		  {
			lineHeight: "140%",
			fontWeight: "700",
		  },
		],
		"heading4-medium": [
		  "20px",
		  {
			lineHeight: "140%",
			fontWeight: "500",
		  },
		],
		"body-bold": [
		  "18px",
		  {
			lineHeight: "140%",
			fontWeight: "700",
		  },
		],
		"body-semibold": [
		  "18px",
		  {
			lineHeight: "140%",
			fontWeight: "600",
		  },
		],
		"body-medium": [
		  "18px",
		  {
			lineHeight: "140%",
			fontWeight: "500",
		  },
		],
		"body-normal": [
		  "18px",
		  {
			lineHeight: "140%",
			fontWeight: "400",
		  },
		],
		"body1-bold": [
		  "18px",
		  {
			lineHeight: "140%",
			fontWeight: "700",
		  },
		],
		"base-regular": [
		  "16px",
		  {
			lineHeight: "140%",
			fontWeight: "400",
		  },
		],
		"base-medium": [
		  "16px",
		  {
			lineHeight: "140%",
			fontWeight: "500",
		  },
		],
		"base-semibold": [
		  "16px",
		  {
			lineHeight: "140%",
			fontWeight: "600",
		  },
		],
		"base1-semibold": [
		  "16px",
		  {
			lineHeight: "140%",
			fontWeight: "600",
		  },
		],
		"small-regular": [
		  "14px",
		  {
			lineHeight: "140%",
			fontWeight: "400",
		  },
		],
		"small-medium": [
		  "14px",
		  {
			lineHeight: "140%",
			fontWeight: "500",
		  },
		],
		"small-semibold": [
		  "14px",
		  {
			lineHeight: "140%",
			fontWeight: "600",
		  },
		],
		"subtle-medium": [
		  "12px",
		  {
			lineHeight: "16px",
			fontWeight: "500",
		  },
		],
		"subtle-semibold": [
		  "12px",
		  {
			lineHeight: "16px",
			fontWeight: "600",
		  },
		],
		"tiny-medium": [
		  "10px",
		  {
			lineHeight: "140%",
			fontWeight: "500",
		  },
		],
		"x-small-semibold": [
		  "7px",
		  {
			lineHeight: "9.318px",
			fontWeight: "600",
		  },
		],
	  },
	  extend: {
		colors: {
		  "primary-500": "#877EFF",
		  "secondary-500": "#FFB620",
		  blue: "#0095F6",
		  "logout-btn": "#FF5A5A",
		  "navbar-menu": "rgba(16, 16, 18, 0.6)",
		  "dark-1": "#000000",
		  "dark-2": "#121417",
		  "dark-3": "#101012",
		  "dark-4": "#1F1F22",
		  "light-1": "#FFFFFF",
		  "light-2": "#EFEFEF",
		  "light-3": "#7878A3",
		  "light-4": "#5C5C7B",
		  "gray-1": "#697C89",
		  glassmorphism: "rgba(16, 16, 18, 0.60)",
		  richblack: {
			5: "#F1F2FF",
			25: "#DBDDEA",
			50: "#C5C7D4",
			100: "#AFB2BF",
			200: "#999DAA",
			300: "#838894",
			400: "#6E727F",
			500: "#585D69",
			600: "#424854",
			700: "#2C333F",
			800: "#161D29",
			900: "#000814",
		  },
		  richblue: {
			5: "#ECF5FF",
			25: "#C6D6E1",
			50: "#A0B7C3",
			100: "#7A98A6",
			200: "#537988",
			300: "#2D5A6A",
			400: "#073B4C",
			500: "#063544",
			600: "#042E3B",
			700: "#032833",
			800: "#01212A",
			900: "#001B22",
		  },
		  blue: {
			5: "#EAF5FF",
			25: "#B4DAEC",
			50: "#7EC0D9",
			100: "#47A5C5",
			200: "#118AB2",
			300: "#0F7A9D",
			400: "#0C6A87",
			500: "#0A5A72",
			600: "#074B5D",
			700: "#053B48",
			800: "#022B32",
			900: "#001B1D",
		  },
		  caribbeangreen: {
			5: "#C1FFFD",
			25: "#83F1DE",
			50: "#44E4BF",
			100: "#06D6A0",
			200: "#05BF8E",
			300: "#05A77B",
			400: "#049069",
			500: "#037957",
			600: "#026144",
			700: "#014A32",
			800: "#01321F",
			900: "#001B0D",
		  },
		  brown: {
			5: "#FFF4C4",
			25: "#FFE395",
			50: "#FFD166",
			100: "#E7BC5B",
			200: "#CFA64F",
			300: "#B89144",
			400: "#A07C39",
			500: "#88662D",
			600: "#705122",
			700: "#593C17",
			800: "#41260B",
			900: "#291100",
		  },
		  pink: {
			5: "#FFF1F1",
			25: "#FBC7D1",
			50: "#F79CB0",
			100: "#F37290",
			200: "#EF476F",
			300: "#D43D63",
			400: "#BA3356",
			500: "#9F294A",
			600: "#841E3E",
			700: "#691432",
			800: "#4F0A25",
			900: "#340019",
		  },
		  yellow: {
			5: "#FFF970",
			25: "#FFE83D",
			50: "#FFD60A",
			100: "#E7C009",
			200: "#CFAB08",
			300: "#B69507",
			400: "#9E8006",
			500: "#866A04",
			600: "#6E5503",
			700: "#553F02",
			800: "#3D2A01",
			900: "#251400",
		  },
		  "pure-greys": {
			5: "#F9F9F9",
			25: "#E2E2E2",
			50: "#CCCCCC",
			100: "#B5B5B5",
			200: "#9E9E9E",
			300: "#888888",
			400: "#717171",
			500: "#5B5B5B",
			600: "#444444",
			700: "#2D2D2D",
			800: "#171717",
			900: "#141414",
		  },
		},
		boxShadow: {
		  "count-badge": "0px 0px 6px 2px rgba(219, 188, 159, 0.30)",
		  "groups-sidebar": "-30px 0px 60px 0px rgba(28, 28, 31, 0.50)",
		},
		screens: {
		  xs: "400px",
		},
		keyframes: {
			"scrollY" : {
				'0%': { transform: 'translateY(0%)' },
				'100%': { transform: 'translateY(-50%)'},
			  },
		  "accordion-down": {
			from: { height: 0 },
			to: { height: "var(--radix-accordion-content-height)" },
		  },
		  "accordion-up": {
			from: { height: "var(--radix-accordion-content-height)" },
			to: { height: 0 },
		  },
		},
		animation: {
		  "accordion-down": "accordion-down 0.2s ease-out",
		  "accordion-up": "accordion-up 0.2s ease-out",
		  "scrollY" : 'scrollY 8s linear infinite',
		},
	  },
	},
	plugins: [require("tailwindcss-animate"), flowbite.plugin()],
};