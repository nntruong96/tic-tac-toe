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
        background: 'theme(colors.navy.500)',
        foreground: 'theme(colors.navy.500)',
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
        navy: {
          400: '#1F3641',
          500: '#1A2A33',
          600: '#10212A',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
