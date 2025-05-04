/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#3A0CA3',    // Deep purple
        secondary: '#4361EE',  // Vibrant blue
        tertiary: '#4CC9F0',   // Bright cyan
        accent: '#F72585',     // Vivid pink
        dark: '#1A1A2E',       // Dark blue-black
        light: '#F8F9FA',      // Off-white
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'grow-width': {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'spin-glow': {
          '0%': { transform: 'rotate(0deg)', filter: 'drop-shadow(0 0 5px rgba(255, 255, 255, 0.7))' },
          '50%': { filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.9))' },
          '100%': { transform: 'rotate(360deg)', filter: 'drop-shadow(0 0 5px rgba(255, 255, 255, 0.7))' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 5px rgba(247, 37, 133, 0.7)' },
          '50%': { boxShadow: '0 0 20px rgba(247, 37, 133, 0.9)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 1s ease-out',
        'grow-width': 'grow-width 1.5s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'spin-glow': 'spin-glow 6s linear infinite',
        'pulse-glow': 'pulse-glow 2s infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

// /** @type {import('tailwindcss').Config} */
//  export default {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
