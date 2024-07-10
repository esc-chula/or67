'use client';
import { useState } from 'react';
import Image from 'next/image';
import type { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { useUser } from '@/contexts/user-context';
import escLogo from '@/assets/icons/esc_logo.svg';
import backgroundPattern from '@/assets/backgrounds/landingPageBG.svg';
import backgroundImage from '@/assets/backgrounds/imageBG.png';

export default function LandingPage(): JSX.Element {
    const { user, setUser, error } = useUser();
    const [studentId, setStudentId] = useState<string>('');

    const submitHandler = (e: React.FormEvent): void => {
        e.preventDefault();

        setUser(studentId);
    };

    return (
        <main className='w-dvh flex h-dvh items-center justify-center'>
            <div>
                <Image
                    alt='background Image'
                    fill
                    src={backgroundImage}
                />
            </div>
            <div>
                <Image
                    alt='background Image'
                    className='object-cover'
                    fill
                    src={backgroundPattern}
                />
            </div>
            <div className='flex h-3/6 md:h-4/6 w-full md:w-3/6 flex-col items-center justify-center rounded-3xl shadow-[0_0px_10px_0_rgba(130,25,35,0.75)] z-0'>
                <div className='flex h-full w-full flex-col items-center justify-center rounded-3xl bg-white py-2 px-3'>
                    <Image
                        alt='ESC Logo'
                        className='h-2/6  p-5'
                        height={0}
                        src={escLogo as StaticImport}
                        width={0}
                    />
                    {!user.student ? (
                        <div className='flex h-4/6  lg:h-3/6 w-full flex-col justify-around'>
                            <h1 className='text-center font-black text-xl lg:hidden '>
                                ตรวจสอบตารางเรียน<br/>อาจารย์ที่ปรึกษาสำหรับนิสิตชั้นปีที่ 1
                            </h1>
                            <h1 className='text-center font-black text-2xl hidden lg:inline'>
                                ตรวจสอบตารางเรียนและอาจารย์ที่ปรึกษา<br/>สำหรับนิสิตชั้นปีที่ 1
                            </h1>
                            <form
                                className='flex h-1/2 flex-col items-center justify-between pl-12 pr-12'
                                onSubmit={submitHandler}
                            >
                                {error ? (
                                    <h2 className='text-xs'>
                                        ERROR: {error.message}
                                    </h2>
                                ) : (
                                    <h2 className='text-xs select-none bg-white text-white'>placeholder</h2>
                                )}
                                <input
                                    className='h-1/3 w-full rounded-xl border-2 border-black pl-3 font-semibold'
                                    onChange={(e) => {
                                        setStudentId(e.target.value);
                                    }}
                                    placeholder='เลขประจำตัวนิสิต'
                                    type='text'
                                    value={studentId}
                                />
                                <button
                                    className='h-1/3 w-full rounded-xl border-2 border-[#821923] bg-[#821923] font-semibold text-white'
                                    type='submit'
                                >
                                    ตรวจสอบ
                                </button>
                            </form>
                        </div>
                    ) : (
                        <div>
                            <h1>Welcome</h1>
                            <p>{user.student.name.th}</p>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
