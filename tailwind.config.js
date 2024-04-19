/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundImage: {
      "hero-desktop": "url('/assets/hero.png')",
      "hero-mobile": "url('/assets/hero-mobile.png')",
      "hero-tablet": "url('/assets/hero-tablet.png')",
      "about-bg": "url(/assets/aboutus-bg.png)",
      "onboarding-bg": "url(/assets/onboarding-bg.png)",
      "pregnant-desk": "url(/assets/pregnant.png)",
      "pregnant-tab": "url(/assets/pregnant-tab.png)",
    },
    screens: {
      sm: "320px",
      md: "630px",
      lg: "860px",
      xl: "1240px",
    },
    extend: {
      colors: {
        "azure-radiance": {
          50: "hsl(205, 100%, 97%)",
          100: "hsl(205, 100%, 92%)",
          200: "hsl(204, 100%, 86%)",
          300: "hsl(202, 100%, 77%)",
          400: "hsl(204, 100%, 66%)",
          500: "hsl(209, 100%, 59%)",
          600: "hsl(213, 97%, 51%)",
          700: "hsl(216, 89%, 48%)",
          800: "hsl(218, 82%, 40%)",
          900: "hsl(217, 75%, 33%)",
          950: "hsl(219, 66%, 21%)",
        },
        onboarding: "#fffdf2",
      },
      gridTemplateColumns: {
        "4/10-6/10": "40% 60%",
        "7/10-3/10": "75% 25%",
        "6/10-4/10": "60% 40%",
      },
      fontFamily: {
        "open-sans": ["Open Sans", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".open-sans": {
          fontFamily: "Open Sans, sans-serif",
          fontOpticalSizing: "auto",
          fontVariationSettings: "wdth 100",
        },
        outfit: {
          fontFamily: "Outfit, sans-serif",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
