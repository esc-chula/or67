import type { Metadata } from 'next';
import { ibmPlexSansThai, manrope } from '@/libs/font';
import '@/styles/globals.css';

export const metadata: Metadata = {
    title: 'ESC Link',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}): JSX.Element {
    return (
        <html lang='th'>
            <body className={`${manrope.variable} ${ibmPlexSansThai.variable}`}>
                {children}
            </body>
        </html>
    );
}
