/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        'mono': ['"Courier New"', 'Courier', 'monospace'],
      },
      colors: {
        primary: {
          DEFAULT: '#1e3a8a',
          dark: '#1e40af',
        },
        secondary: {
          DEFAULT: '#374151',
          light: '#4b5563',
          dark: '#1f2937',
        },
      },
    },
  },
  plugins: [],
}
