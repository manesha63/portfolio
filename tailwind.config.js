/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#0B0C10',     // Ultra-Dark Navy
        'background-secondary': '#1F2937', // Deep Charcoal-Blue Gray
        'text-primary': '#E0E7FF',   // Soft White-Blue
        'text-secondary': '#C4B5FD', // Soft Lavender
        'button': '#7C3AED',         // Vivid Violet
        'button-hover': '#A78BFA',   // Light Purple Glow
        'accent': '#8B5CF6',         // Bright Purple
        'link': '#38BDF8',          // Electric Sky Blue
      },
      animation: {
        'pulse': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: 0.1 },
          '50%': { opacity: 0.3 },
        },
      },
      backgroundImage: {
        'gradient-cosmic': 'linear-gradient(to bottom, #0B0C10, #1F2937)',
      },
    },
  },
  plugins: [],
}

