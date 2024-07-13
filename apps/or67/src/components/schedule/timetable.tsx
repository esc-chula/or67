import type { ComponentPropsWithoutRef } from 'react';
import { forwardRef, useEffect, useState } from 'react';
import type { SubjectWithSpecificSection } from '@/types/subject';
import SubjectTimebox from './subject-timebox';

interface TimeTableProps extends ComponentPropsWithoutRef<'div'> {
    subjects: SubjectWithSpecificSection[];
    onSelectSubject: (subject: SubjectWithSpecificSection) => void;
}

const TimeTableRef = forwardRef<HTMLDivElement, TimeTableProps>(
    ({ subjects, onSelectSubject }, ref) => {
        const [dayHeight, setDayHeight] = useState(0);
        const [hourWidth, setHourWidth] = useState(0);

        useEffect(() => {
            const calculate = (): void => {
                const parent = document.getElementById('timetable');
                setDayHeight((parent?.offsetHeight || 0) * 0.2);
                setHourWidth((parent?.offsetWidth || 0) * 0.0909);
            };

            calculate();

            window.addEventListener('resize', calculate);
            return () => {
                window.removeEventListener('resize', calculate);
            };
        }, []);

        return (
            <div className='w-full overflow-visible' ref={ref}>
                <div className='aspect-[15/7] w-full min-w-[800px] rounded-xl border-2 text-xs text-white md:text-sm lg:text-base'>
                    <div className='flex h-[15%] w-full rounded-t-xl border-b'>
                        <div className='bg-primary relative flex h-full w-[9%] items-center justify-center rounded-tl-xl border-r font-semibold'>
                            <p className='absolute right-2 top-2'>เวลา</p>
                            <p className='absolute bottom-2 left-2'>วัน</p>
                        </div>
                        <Time />
                    </div>
                    <div className='relative flex h-full w-full rounded-b-xl'>
                        <Day />
                        <div
                            className='bg-background absolute left-[8.25%] right-0 h-full text-gray-800'
                            id='timetable'
                        >
                            {subjects.map((subject) => (
                                <SubjectTimebox
                                    dayHeight={dayHeight}
                                    hourWidth={hourWidth}
                                    key={subject.code}
                                    onSelectSubject={onSelectSubject}
                                    subject={subject}
                                />
                            ))}
                            {/* horizon border */}
                            <div className='relative h-1/5 border-b' />
                            <div className='relative h-1/5 border-b' />
                            <div className='relative h-1/5 border-b' />
                            <div className='relative h-1/5 border-b' />
                        </div>
                        <Border />
                    </div>
                </div>
            </div>
        );
    }
);

function Time(): JSX.Element {
    return (
        <div className='bg-primary grid h-full w-full grid-cols-11 rounded-tr-lg font-semibold'>
            {Array.from({ length: 11 }).map((_, index) => (
                <div
                    className='flex items-center justify-start border-r px-2'
                    // eslint-disable-next-line react/no-array-index-key -- it's just time
                    key={index}
                >
                    {`${index + 8}:00`}
                </div>
            ))}
        </div>
    );
}

function Day(): JSX.Element {
    return (
        <div className='bg-primary absolute h-full w-[8.25%] rounded-bl-xl border-r font-semibold'>
            {Array.from({ length: 5 }).map((_, index) => (
                <div
                    className='flex h-1/5 w-full items-center justify-center border-b'
                    // eslint-disable-next-line react/no-array-index-key -- it's just day
                    key={index}
                >
                    {['จันทร์', 'อังคาร', 'พุธ', 'พฤหัส', 'ศุกร์'][index]}
                </div>
            ))}
        </div>
    );
}

function Border(): JSX.Element {
    return (
        <div className='absolute left-[8.25%] right-0 grid h-full grid-cols-11'>
            {Array.from({ length: 10 }).map((_, index) => (
                <div
                    className='border-r border-gray-300'
                    // eslint-disable-next-line react/no-array-index-key -- border
                    key={index}
                />
            ))}
        </div>
    );
}

TimeTableRef.displayName = 'TimeTable';

export default TimeTableRef;
