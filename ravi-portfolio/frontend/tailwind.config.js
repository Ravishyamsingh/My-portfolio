/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff1f5',
          100: '#ffe3eb',
          200: '#ffc3d4',
          300: '#fa96b6',
          400: '#f16a9a',
          500: '#e84a84',
          600: '#d0376f',
          700: '#b2295c',
          800: '#8d2149',
          900: '#641836',
        },
        secondary: {
          50: '#f5f6fb',
          100: '#e1e3f3',
          200: '#c5c9e5',
          300: '#9ca5cf',
          400: '#6a7db2',
          500: '#4c5e99',
          600: '#3a4a7f',
          700: '#2f3a66',
          800: '#242e51',
          900: '#19203b',
        },
        accent: {
          50: '#edfdf8',
          100: '#d4f8ec',
          200: '#a8edd9',
          300: '#77e1c4',
          400: '#42d6b0',
          500: '#1fc99f',
          600: '#17a783',
          700: '#12866a',
          800: '#0e6450',
          900: '#084537',
        }
      },
      fontFamily: {
        sans: ['"Open Sans"', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      screens: {
        'xs': '475px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      }
    },
  },
  plugins: [],
};
