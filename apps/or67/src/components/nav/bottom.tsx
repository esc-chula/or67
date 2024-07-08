'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@ui/lib/utils';
import {
    CalendarIcon,
    EditIcon,
    FinderIcon,
    ProfileIcon,
    TableIcon,
} from '@/assets/icons';

export function Bottom(): JSX.Element | null {
    const pathname = usePathname();
    if (
        !['/', '/subjects', '/schedule', '/calendar', '/makefriends'].includes(
            pathname
        )
    )
        return null;

    return (
        <nav className='bg-background sticky bottom-0 mt-8 w-full p-6 text-xs max-lg:flex lg:hidden'>
            <ul className='text-primary flex w-full items-center justify-between'>
                <li>
                    <Link
                        className={cn(
                            'flex min-w-max items-center gap-2 rounded-full px-4 py-2',
                            pathname === '/' && 'bg-primary/30'
                        )}
                        href='/'
                    >
                        <ProfileIcon
                            className={cn(
                                'w-7',
                                pathname === '/'
                                    ? 'stroke-primary'
                                    : 'stroke-carmine-200'
                            )}
                        />
                        <AnimatePresence>
                            {pathname === '/' && (
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
                                    ข้อมูลนิสิต
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </Link>
                </li>
                <li>
                    <Link
                        className={cn(
                            'flex min-w-max items-center gap-2 rounded-full px-4 py-2',
                            pathname === '/subjects' && 'bg-primary/30'
                        )}
                        href='/subjects'
                    >
                        <EditIcon
                            className={cn(
                                'w-7',
                                pathname === '/subjects'
                                    ? 'stroke-primary'
                                    : 'stroke-carmine-200'
                            )}
                        />
                        <AnimatePresence>
                            {pathname === '/subjects' && (
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
                                    วิชาที่ต้องลงทะเบียน
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </Link>
                </li>
                <li>
                    <Link
                        className={cn(
                            'flex min-w-max items-center gap-2 rounded-full px-4 py-2',
                            pathname === '/schedule' && 'bg-primary/30'
                        )}
                        href='/schedule'
                    >
                        <TableIcon
                            className={cn(
                                'w-7',
                                pathname === '/schedule'
                                    ? 'stroke-primary fill-primary'
                                    : 'stroke-carmine-200 fill-carmine-200'
                            )}
                        />
                        <AnimatePresence>
                            {pathname === '/schedule' && (
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
                                    ตารางเรียน
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </Link>
                </li>
                <li>
                    <Link
                        className={cn(
                            'flex min-w-max items-center gap-2 rounded-full px-4 py-2',
                            pathname === '/calendar' && 'bg-primary/30'
                        )}
                        href='/calendar'
                    >
                        <CalendarIcon
                            className={cn(
                                'w-7',
                                pathname === '/calendar'
                                    ? 'stroke-primary fill-primary'
                                    : 'stroke-carmine-200 fill-carmine-200'
                            )}
                        />
                        <AnimatePresence>
                            {pathname === '/calendar' && (
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
                                    ปฏิทินคณะ
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </Link>
                </li>
                <li>
                    <Link
                        className={cn(
                            'flex min-w-max items-center gap-2 rounded-full px-4 py-2',
                            pathname === '/makefriends' && 'bg-primary/30'
                        )}
                        href='/makefriends'
                    >
                        <FinderIcon
                            className={cn(
                                'w-7 stroke-2',
                                pathname === '/makefriends'
                                    ? 'stroke-primary'
                                    : 'stroke-carmine-200'
                            )}
                        />
                        <AnimatePresence>
                            {pathname === '/makefriends' && (
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
                                    หาเพื่อน
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
