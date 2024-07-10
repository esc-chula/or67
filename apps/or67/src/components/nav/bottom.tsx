'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@ui/lib/utils';
import { useUser } from '@/contexts/user-context';
import { links } from './links';

export function Bottom(): JSX.Element | null {
    const pathname = usePathname();
    const { user } = useUser();

    if (
        pathname !== '/handbook' &&
        (!user.student || !links.some((link) => link.href === pathname))
    )
        return null;

    return (
        <nav className='bg-background sticky bottom-0 z-50 mt-8 h-24 w-full border-t p-6 text-xs tracking-tighter max-lg:flex sm:text-sm md:text-base lg:hidden'>
            <ul className='text-primary flex w-full items-center justify-between gap-5'>
                {links.map((link) => (
                    <li key={link.href}>
                        <Link
                            className={cn(
                                'flex min-w-max items-center',
                                pathname === link.href &&
                                    'bg-primary/10 gap-2 rounded-full px-4 py-2'
                            )}
                            href={link.href}
                        >
                            <link.icon
                                className={cn(
                                    'w-6 md:w-7',
                                    link.needFill &&
                                        (pathname === link.href
                                            ? 'fill-primary'
                                            : 'fill-carmine-200'),
                                    link.needStroke &&
                                        (pathname === link.href
                                            ? 'stroke-primary'
                                            : 'stroke-carmine-200')
                                )}
                            />
                            <AnimatePresence>
                                {pathname === link.href && (
                                    <motion.span
                                        animate={{
                                            opacity: 1,
                                            width: 'auto',
                                        }}
                                        className='line-clamp-1'
                                        exit={{
                                            opacity: 0,
                                            width: 0,
                                        }}
                                        initial={{
                                            opacity: 0,
                                            width: 0,
                                        }}
                                    >
                                        {link.label}
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
