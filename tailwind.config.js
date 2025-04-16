import { heroui } from '@heroui/theme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/@heroui/theme/dist/components/(button|modal|navbar|table|ripple|spinner|checkbox|form|spacer).js',
  ],
  theme: {
    extend: {},
  },
  plugins: [heroui()],
};
