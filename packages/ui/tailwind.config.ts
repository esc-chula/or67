import type { Config } from 'tailwindcss';
import sharedConfig from '@repo/tailwind-config';
import tailwindcssAnimate from 'tailwindcss-animate';

const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    '../../packages/ui/src/**/*.{ts,tsx}',
  ],
  presets: [sharedConfig],
  plugins: [tailwindcssAnimate],
} satisfies Config;

export default config;
