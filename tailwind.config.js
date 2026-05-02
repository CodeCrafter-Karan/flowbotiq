/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
      },
      colors: {
        accent: {
          DEFAULT: '#1a6fff',
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          500: '#1a6fff',
          600: '#1558d4',
          700: '#1044a8',
        },
        coral: {
          DEFAULT: '#ff4d6d',
          50: '#fff1f3',
          100: '#ffe4e8',
          500: '#ff4d6d',
          600: '#e6324f',
        },
        dark: {
          DEFAULT: '#0d0f14',
          50: '#f8f9fa',
          100: '#f1f3f5',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#6c757d',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
          950: '#0d0f14',
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease forwards',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};
