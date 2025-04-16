import { heroui } from '@heroui/theme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@heroui/theme/dist/components/(button|image|input|modal|navbar|table|ripple|spinner|form|checkbox|spacer).js"
  ],
  theme: {
    extend: {},
  },
  plugins: [heroui()],
};
