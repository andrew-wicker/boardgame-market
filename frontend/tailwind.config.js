/** @type {import('tailwindcss').Config} */

// const defaultTheme = require('tailwindcss/defaultTheme');
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Proxima Nova"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        buff: { DEFAULT: '#e59f71', 100: '#3a1d0b', 200: '#733b15', 300: '#ad5820', 400: '#da7837', 500: '#e59f71', 600: '#eab28d', 700: '#efc6aa', 800: '#f5d9c6', 900: '#faece3' },
        sinopia: { DEFAULT: '#ba5a31', 100: '#25120a', 200: '#4a2414', 300: '#6f361e', 400: '#944827', 500: '#ba5a31', 600: '#d17751', 700: '#dc997c', 800: '#e8bba8', 900: '#f3ddd3' },
        night: { DEFAULT: '#0c0c0c', 100: '#030303', 200: '#050505', 300: '#080808', 400: '#0a0a0a', 500: '#0c0c0c', 600: '#3d3d3d', 700: '#6e6e6e', 800: '#9e9e9e', 900: '#cfcfcf' },
        emerald: { DEFAULT: '#69dc9e', 100: '#0c351f', 200: '#196a3f', 300: '#259f5e', 400: '#35d07d', 500: '#69dc9e', 600: '#88e3b3', 700: '#a6eac6', 800: '#c4f1d9', 900: '#e1f8ec' },
        white: { DEFAULT: '#ffffff', 100: '#333333', 200: '#666666', 300: '#999999', 400: '#cccccc', 500: '#ffffff', 600: '#ffffff', 700: '#ffffff', 800: '#ffffff', 900: '#ffffff' },
      },
    },
  },
  plugins: [],
};
