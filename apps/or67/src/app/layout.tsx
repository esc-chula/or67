import type { Metadata } from 'next';
import { cn } from '@ui/lib/utils';
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
                    'bg-background relative flex min-h-dvh flex-col items-center font-sans antialiased',
                    manrope.variable,
                    ibmPlexSansThai.variable
                )}
            >
                <UserProvider>
                    <NavTop />
                    <main className='flex w-full max-w-6xl flex-1 flex-col px-5'>
                        {children}
                    </main>
                    <NavBottom />
                </UserProvider>
            </body>
        </html>
    );
}
