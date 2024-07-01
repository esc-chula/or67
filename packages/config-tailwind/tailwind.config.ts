import type { Config } from 'tailwindcss';

// We want each package to be responsible for its own content.
const config: Omit<Config, 'content'> = {
    theme: {
        extend: {
            colors: {
                carmine: {
                    50: 'var(--esc-carmine-50)',
                    100: 'var(--esc-carmine-100)',
                    200: 'var(--esc-carmine-200)',
                    300: 'var(--esc-carmine-300)',
                    400: 'var(--esc-carmine-400)',
                    500: 'var(--esc-carmine-500)',
                    600: 'var(--esc-carmine-600)',
                    700: 'var(--esc-carmine-700)',
                    800: 'var(--esc-carmine-800)',
                    900: 'var(--esc-carmine-900)',
                },
                light: 'var(--base-light)',
                border: 'var(--border)',
                input: 'var(--input)',
                ring: 'var(--ring)',
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                primary: {
                    DEFAULT: 'var(--primary)',
                    foreground: 'var(--primary-foreground)',
                },
                secondary: {
                    DEFAULT: 'var(--secondary)',
                    foreground: 'var(--secondary-foreground)',
                },
                destructive: {
                    DEFAULT: 'var(--destructive)',
                    foreground: 'var(--destructive-foreground)',
                },
                muted: {
                    DEFAULT: 'var(--muted)',
                    foreground: 'var(--muted-foreground)',
                },
                accent: {
                    DEFAULT: 'var(--accent)',
                    foreground: 'var(--accent-foreground)',
                },
                popover: {
                    DEFAULT: 'var(--popover)',
                    foreground: 'var(--popover-foreground)',
                },
                card: {
                    DEFAULT: 'var(--card)',
                    foreground: 'var(--card-foreground)',
                },
                base: {
                    light: 'var(--base-light)',
                    medium: 'var(--base-medium)',
                    dark: 'var(--base-dark)',
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
            fontFamily: {
                poppins: ['var(--font-poppins)'],
                kanit: ['var(--font-kanit)'],
            },
            boxShadow: {
                xs: 'var(--shadow-xs)',
                md: 'var(--shadow-md)',
            },
        },
    },
    plugins: [],
};

export default config;
