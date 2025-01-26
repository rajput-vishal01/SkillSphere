import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Dosis', 'sans-serif'], // Add Dosis as the default sans font
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        skillsphere: {
          primary: "#8B949E", // Soft Slate for primary buttons or highlights
          secondary: "#4D5562", // Muted Steel for secondary elements
          accent: "#93A4B1", // Subtle Cool Gray for interactive accents
          neutral: "#24292F", // Dark Graphite for card surfaces or backgrounds
          "base-100": "#161B22", // Deep Onyx for the main background
          "base-200": "#1C2128", // Slightly lighter Onyx for contrast in components
          "text-primary": "#E6EDF3", // Cool White for primary text
          "text-secondary": "#A1A7AF", // Soft Gray for secondary text
          info: "#58A6FF", // Muted Sky Blue for informational elements
          success: "#3FB950", // Calm Green for success messages
          warning: "#F0883E", // Subtle Orange for warnings
          error: "#FF6A69", // Soft Coral Red for errors
        },
      },
    ],
  },
};
