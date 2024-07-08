import type { Metadata } from 'next';
import { cn } from '@ui/lib/utils';
import { ibmPlexSansThai, manrope } from '@/libs/font';
import '@/styles/globals.css';
import '@repo/ui/styles.css';
import { NavTop, NavBottom } from '@/components/nav';

export const metadata: Metadata = {
    title: 'OR67',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}): JSX.Element {
    return (
        <html lang='en'>
            <body
                className={cn(
                    'bg-background relative flex min-h-screen flex-col items-center font-sans antialiased',
                    manrope.variable,
                    ibmPlexSansThai.variable
                )}
            >
                <NavTop />
                <main className='flex w-full max-w-6xl flex-1 flex-col px-5'>
                    {children}
                </main>
                <NavBottom />
            </body>
        </html>
    );
}
