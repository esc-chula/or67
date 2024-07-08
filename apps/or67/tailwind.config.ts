// tailwind config is required for editor support

import type { Config } from 'tailwindcss';
import sharedConfig from '@repo/tailwind-config';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Pick<Config, 'content' | 'presets' | 'theme'> = {
    content: ['./src/**/*.tsx'],
    presets: [sharedConfig],
    theme: {
        extend: {
            fontFamily: {
                sans: [
                    'var(--font-manrope)',
                    'var(--font-ibm-plex-sans-thai)',
                    ...defaultTheme.fontFamily.sans,
                ],
            },
        },
    },
};

export default config;
