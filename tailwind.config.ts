import type { Config } from 'tailwindcss';

const config: Config = {
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
      colors: {
        'gray-8': 'var(--color-gray-8)',
        'gray-7': 'var(--color-gray-7)',
        'gray-6': 'var(--color-gray-6)',
        'gray-5': 'var(--color-gray-5)',
        'gray-4': 'var(--color-gray-4)',
        'gray-3': 'var(--color-gray-3)',
        'gray-2': 'var(--color-gray-2)',
        'purple-main': 'var(--color-purple-main)',
        'red-main': 'var(--color-red-main)',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
export default config;
