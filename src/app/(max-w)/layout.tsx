import type { Metadata } from 'next';
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
        <main className='flex w-full max-w-6xl flex-1 flex-col px-5'>
            {children}
        </main>
    );
}
