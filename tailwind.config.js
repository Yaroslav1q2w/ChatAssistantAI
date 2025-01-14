/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
	theme: {
		extend: {
      colors: {
        primary: "#1C1D22",
        secondary: "#6B6BFF", 
        accent: "#333338", 
        gray: {
          DEFAULT: "#2F2F3A", 
          light: "#6E6E80", 
          dark: "#121212", 
        },
        text: {
          secondary: "#B3B3CC", 
        },
      },
      fontFamily: {
        ithin: ["Inter-Thin", "sans-serif"],
        iextralight: ["Inter-ExtraLight", "sans-serif"],
        ilight: ["Inter-Light", "sans-serif"],
        iregular: ["Inter-Regular", "sans-serif"],
        imedium: ["Inter-Medium", "sans-serif"],
        isemibold: ["Inter-SemiBold", "sans-serif"],
        ibold: ["Inter-Bold", "sans-serif"],
        iextrabold: ["Inter-ExtraBold", "sans-serif"],
        iblack: ["Inter-Black", "sans-serif"],
      },
      gradientColorStops: {
        "border-gradient": ["#59B0FF", "#925FFF"],
     },
		},
	},
	plugins: [],
};
