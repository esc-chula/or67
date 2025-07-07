'use client';
import { useUser } from '@/contexts/user-context';
import { PersonIcon } from '@/assets/icons';

export default function Page(): JSX.Element {
    const {
        user: { student, teacher },
    } = useUser();

    if (!student || !teacher) {
        return <div>Loading...</div>;
    }

    return (
        <div className='flex h-full items-center justify-center py-10'>
            <div className='bg-background relative flex w-[680px] flex-col items-center justify-start gap-4 rounded-3xl px-10 py-9 shadow-xl'>
                <div className='absolute -top-14 left-1/2 h-[90px] w-[90px] -translate-x-1/2 rounded-full sm:h-[98px] sm:w-[98px] lg:h-[109px] lg:w-[109px]'>
                    <PersonIcon className='size-full' />
                </div>
                <div className='mt-4 flex w-full flex-col items-center text-center sm:mt-8 lg:mt-12'>
                    <p className='flex w-full flex-wrap justify-center gap-x-2 text-xl font-semibold sm:text-2xl lg:text-3xl'>
                        <span>
                            {
                                student.name.th
                                    .split(' ')
                                    .filter((name) => name !== '')[0]
                            }
                        </span>
                        <span>
                            {
                                student.name.th
                                    .split(' ')
                                    .filter((name) => name !== '')
                                    .slice(1)
                                    .join(' ')
                            }
                        </span>
                    </p>
                    <p className='text-lg font-semibold lg:text-xl'>
                        {student.id}
                    </p>
                </div>

                <div className='flex w-full flex-col justify-start gap-y-3'>
                    <div className='flex flex-col items-start justify-start'>
                        <p className='text-muted-foreground text-sm font-normal lg:text-base'>
                            ภาค
                        </p>
                        <p className='text-base font-medium lg:text-lg'>
                            {student.program}
                        </p>
                    </div>
                    <div className='flex flex-row items-center justify-between'>
                        <div className='col-span-1 flex flex-col items-start justify-start'>
                            <p className='text-muted-foreground text-sm font-normal lg:text-base'>
                                ลำดับที่
                            </p>
                            <p className='text-base font-medium lg:text-lg'>
                                {student.index}
                            </p>
                        </div>
                        <div className='flex flex-col items-start justify-start'>
                            <p className='text-muted-foreground text-sm font-normal lg:text-base'>
                                ชุดอาจารย์ที่ปรึกษา
                            </p>
                            <p className='text-base font-medium lg:text-lg'>
                                {teacher.index}
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col items-start justify-start'>
                        <p className='text-muted-foreground text-sm font-normal lg:text-base'>
                            อาจารย์ที่ปรึกษา
                        </p>
                        <p className='text-base font-medium lg:text-lg'>
                            {teacher.name}
                        </p>
                    </div>
                    {/* <div className='flex flex-col items-start justify-start'>
                        <p className='text-muted-foreground text-sm font-normal lg:text-base'>
                            อีเมลล์อาจารย์ที่ปรึกษา
                        </p>
                        <p className='text-base font-medium lg:text-lg'>
                            {teacher.email}
                        </p>
                    </div> */}
                    <div className='flex flex-col items-start justify-start'>
                        <p className='text-muted-foreground text-sm font-normal lg:text-base'>
                            สถานที่พบอาจารย์ที่ปรึกษา
                        </p>
                        <p className='text-base font-medium lg:text-lg'>
                            {teacher.room}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
