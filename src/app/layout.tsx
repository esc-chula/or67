import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { ibmPlexSansThai, manrope } from '@/libs/font';
import { NavTop, NavBottom } from '@/components/nav';
import { UserProvider } from '@/contexts/user-context';
import '@/styles/globals.css';

export const metadata: Metadata = {
    title: 'OR68',
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
                    'flex min-h-dvh flex-col items-center bg-background antialiased',
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
            <GoogleAnalytics
                gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID ?? ''}
            />
        </html>
    );
}
