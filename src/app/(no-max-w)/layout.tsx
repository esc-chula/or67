export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}): JSX.Element {
    return (
        <main className='flex w-full flex-1 flex-col items-center'>
            {children}
        </main>
    );
}
