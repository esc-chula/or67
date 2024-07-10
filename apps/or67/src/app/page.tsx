'use client';
import { useState } from 'react';
import Image from 'next/image';
import { ESCLogoWithText } from '@ui/components/esc';
import { Button } from '@ui/components/ui/button';
import { Input } from '@ui/components/ui/input';
import { Label } from '@ui/components/ui/label';
import { useToast } from '@ui/hooks/use-toast';
import { cn } from '@ui/lib/utils';
import { useUser } from '@/contexts/user-context';
import backgroundImage from '@/assets/backgrounds/imageBG.png';
import LandingPageBG from '@/assets/backgrounds/landing-page-bg';

export default function LandingPage(): JSX.Element {
    const { setUser, error } = useUser();
    const { toast } = useToast();
    const [studentId, setStudentId] = useState<string>('');

    const submitHandler = (e: React.FormEvent): void => {
        e.preventDefault();

        setUser(studentId);
        if (error) {
            toast({
                variant: 'destructive',
                title: 'Uh oh! Something went wrong.',
                description: error.message,
            });
        }
    };

    return (
        <main className='flex min-h-dvh w-full items-center justify-center'>
            <div className='shadow-primary/25 bg-background flex aspect-[3/4] w-full max-w-sm flex-col items-center justify-center gap-10 rounded-3xl px-5 pb-16 pt-11 shadow-2xl md:aspect-[4/3] md:max-w-3xl'>
                <ESCLogoWithText className='h-max w-14 md:w-20' />
                <h1 className='flex flex-wrap items-center justify-center text-center text-xl font-semibold md:text-3xl'>
                    <span>ตรวจสอบตารางเรียน</span>
                    <span>และอาจารย์ที่ปรึกษา</span>
                    <span>&nbsp;สำหรับนิสิตชั้นปีที่ 1</span>
                </h1>
                <form
                    className='flex w-full max-w-lg flex-col gap-5 px-6'
                    onSubmit={submitHandler}
                >
                    <div className='group relative w-full'>
                        <Input
                            id='student-id'
                            onChange={(e) => {
                                setStudentId(e.target.value);
                            }}
                            type='text'
                            value={studentId}
                        />
                        <Label
                            className={cn(
                                'bg-background group-focus-within:text-foreground text-muted-foreground absolute left-4 top-1/2 -translate-y-1/2 duration-150 group-focus-within:-top-1 group-focus-within:px-2',
                                studentId && 'text-foreground -top-1 px-2'
                            )}
                            htmlFor='student-id'
                        >
                            เลขประจำตัวนิสิต
                        </Label>
                    </div>
                    <Button className='h-12 w-full py-4' type='submit'>
                        ตรวจสอบ
                    </Button>
                </form>
            </div>
            <div className='pointer-events-none absolute left-0 top-0 -z-50 size-full select-none overflow-hidden'>
                <div className='absolute left-0 top-0 -z-50 aspect-square w-full'>
                    <Image
                        alt=''
                        className='absolute aspect-square min-h-dvh min-w-full object-cover'
                        src={backgroundImage}
                    />
                    <LandingPageBG className='absolute aspect-square min-h-dvh min-w-full object-cover' />
                </div>
            </div>
        </main>
    );
}
