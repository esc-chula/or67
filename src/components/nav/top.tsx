'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { ESCLogoWithText } from '@/components/esc';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useUser } from '@/contexts/user-context';
import { BookIcon, SignoutIcon } from '@/assets/icons';
import { links } from './links';

export function Top(): JSX.Element | null {
    const pathname = usePathname();
    const { user, logout } = useUser();

    if (
        pathname !== '/handbook' &&
        (!user.student || !links.some((link) => link.href === pathname))
    )
        return null;

    return (
        <header
            className={cn(
                'bg-background sticky top-0 z-50 flex w-full max-w-6xl items-center justify-between border-b text-xl font-medium max-lg:mb-8 max-lg:p-4 lg:my-16 lg:rounded-full lg:border-b-0 lg:px-12 lg:py-6 lg:shadow-lg',
                pathname === '/handbook' && 'hidden md:flex'
            )}
        >
            <ESCLogoWithText className='aspect-auto w-9' />
            <ul className='hidden gap-10 lg:flex'>
                {links.map((link) => (
                    <li
                        className='relative flex h-12 w-max items-center justify-center'
                        key={link.href}
                    >
                        <Link href={link.href}>{link.label}</Link>
                        {pathname === link.href && (
                            <motion.div
                                className='bg-primary absolute bottom-0 h-1 w-full'
                                layoutId='underline'
                            />
                        )}
                    </li>
                ))}
            </ul>
            <nav className='flex items-center gap-5'>
                <Link href='/handbook'>
                    <BookIcon className='fill-primary size-6 sm:size-7 lg:size-8' />
                </Link>
                <Button className='p-0' onClick={logout} variant='link'>
                    <SignoutIcon className='fill-primary size-6 sm:size-7 lg:size-8' />
                </Button>
            </nav>
        </header>
    );
}
