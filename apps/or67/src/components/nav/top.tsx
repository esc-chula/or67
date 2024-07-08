'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { ESCLogoWithText } from '@ui/components/esc';
import { Button } from '@ui/components/ui/button';
import { BookIcon, SignoutIcon } from '@/assets/icons';

export function Top(): JSX.Element | null {
    const pathname = usePathname();
    if (
        !['/', '/subjects', '/schedule', '/calendar', '/makefriends'].includes(
            pathname
        )
    )
        return null;

    return (
        <header className='bg-background sticky top-0 flex w-full max-w-6xl items-center justify-between border-b text-xl font-medium max-lg:mb-8 max-lg:p-4 lg:my-16 lg:rounded-full lg:border-b-0 lg:px-12 lg:py-6 lg:shadow-lg'>
            <ESCLogoWithText className='aspect-auto w-9' />
            <ul className='hidden gap-10 lg:flex'>
                <li className='relative flex h-12 w-max items-center justify-center'>
                    <Link href='/'>ข้อมูลนิสิต</Link>
                    {pathname === '/' && (
                        <motion.div
                            className='bg-primary absolute bottom-0 h-1 w-full'
                            layoutId='underline'
                        />
                    )}
                </li>
                <li className='relative flex h-12 w-max items-center justify-center'>
                    <Link href='/subjects'>วิชาที่ต้องลงทะเบียน</Link>
                    {pathname === '/subjects' && (
                        <motion.div
                            className='bg-primary absolute bottom-0 h-1 w-full'
                            layoutId='underline'
                        />
                    )}
                </li>
                <li className='relative flex h-12 w-max items-center justify-center'>
                    <Link href='schedule'>ตารางเรียน</Link>
                    {pathname === '/schedule' && (
                        <motion.div
                            className='bg-primary absolute bottom-0 h-1 w-full'
                            layoutId='underline'
                        />
                    )}
                </li>
                <li className='relative flex h-12 w-max items-center justify-center'>
                    <Link href='/calendar'>ปฏิทินคณะ</Link>
                    {pathname === '/calendar' && (
                        <motion.div
                            className='bg-primary absolute bottom-0 h-1 w-full'
                            layoutId='underline'
                        />
                    )}
                </li>
                <li className='relative flex h-12 w-max items-center justify-center'>
                    <Link href='/makefriends'>หาเพื่อน</Link>
                    {pathname === '/makefriends' && (
                        <motion.div
                            className='bg-primary absolute bottom-0 h-1 w-full'
                            layoutId='underline'
                        />
                    )}
                </li>
            </ul>
            <nav className='flex items-center gap-5'>
                <Link href='/handbook'>
                    <BookIcon className='fill-primary size-5 lg:size-7' />
                </Link>
                <Button className='p-0' variant='link'>
                    <SignoutIcon className='fill-primary size-5 lg:size-7' />
                </Button>
            </nav>
        </header>
    );
}
