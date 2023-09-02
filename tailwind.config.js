/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        // Define custom shadow sizes and colors
        'custom-sm': '0 4px 6px rgba(255, 0, 0, 0.5)',
        'custom-md': '0 8px 12px rgba(255, 0, 0, 0.5)',
        'custom-lg': '0 12px 18px rgba(255, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}
