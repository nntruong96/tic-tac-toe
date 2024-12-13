import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#1A2A33',
        foreground: '#1A2A33',
        teal: {
          300: '#65E9E4',
          400: '#31C3BD',
          500: '#118C87',
        },
        yellow: {
          300: '#FFC860',
          400: '#F2B137',
          500: '#CC8A15',
        },
        silver: {
          300: '#DBE8ED',
          400: '#A8BFC9',
          500: '#6B8998',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
