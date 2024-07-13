import type { Metadata } from 'next';
import { cn } from '@ui/lib/utils';
import { Toaster } from '@ui/components/ui/toaster';
import { ibmPlexSansThai, manrope } from '@/libs/font';
import { NavTop, NavBottom } from '@/components/nav';
import { UserProvider } from '@/contexts/user-context';
import '@repo/ui/styles.css';
import '@/styles/globals.css';

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
                    'bg-background flex min-h-dvh flex-col items-center font-sans antialiased',
                    manrope.variable,
                    ibmPlexSansThai.variable
                )}
            >
                <UserProvider>
                    <NavTop />
                    {children}
                    <NavBottom />
                </UserProvider>
                <Toaster />
            </body>
        </html>
    );
}
