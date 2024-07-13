'use client';
import { useEffect, useState } from 'react';
import { Popover, PopoverTrigger } from '@ui/components/ui/popover';
import { Button } from '@ui/components/ui/button';
import { useMediaQuery } from '@/hooks/use-media-query';
import type { SubjectWithSpecificSection } from '@/types/subject';
import SubjectCard from './subject-card';

interface SubjectTimeboxProps {
    subject: SubjectWithSpecificSection;
    dayHeight: number;
    hourWidth: number;
    onSelectSubject: (subject: SubjectWithSpecificSection) => void;
}

interface ClassInterface {
    start: string;
    end: string;
    day: string;
}

const mapDay: Record<string, number> = {
    จันทร์: 0,
    อังคาร: 1,
    พุธ: 2,
    พฤหัส: 3,
    ศุกร์: 4,
};

export default function SubjectTimebox({
    subject,
    dayHeight,
    hourWidth,
    onSelectSubject,
}: SubjectTimeboxProps): JSX.Element {
    const [classes, setClasses] = useState<ClassInterface[]>([]);
    const isSmallDevice = useMediaQuery('only screen and (max-width : 768px)');

    useEffect(() => {
        setClasses(
            subject.section.classes.map(
                (item: { day: string; timeStart: string; timeEnd: string }) => {
                    return {
                        start: item.timeStart,
                        end: item.timeEnd,
                        day: item.day,
                    };
                }
            )
        );
    }, [subject.section.classes]);

    return (
        <>
            {classes.map((item: ClassInterface) => {
                if (isSmallDevice)
                    return (
                        <Button
                            className='border-primary/30 absolute z-10 flex h-1/5 flex-col place-content-center rounded-3xl border text-center shadow-lg'
                            key={`${item.day}-${item.start}`}
                            onClick={() => {
                                onSelectSubject(subject);
                            }}
                            style={{
                                marginLeft: `${calDecimal('08:00', item.start) * hourWidth}px`,
                                width: `${calDecimal(item.start, item.end) * hourWidth}px`,
                                marginTop: `${mapDay[item.day] * dayHeight}px`,
                            }}
                            type='button'
                            variant='outline'
                        >
                            <p className='text-[0.8rem] font-extrabold lg:text-sm'>
                                {subject.name}
                            </p>
                            <p className='text-[0.7rem] font-semibold text-gray-500'>
                                {item.start} - {item.end}
                            </p>
                        </Button>
                    );
                return (
                    <Popover key={`${item.day}-${item.start}`}>
                        <PopoverTrigger asChild>
                            <Button
                                className='border-primary/30 absolute z-10 flex h-1/5 flex-col place-content-center rounded-3xl border text-center shadow-lg'
                                onClick={() => {
                                    onSelectSubject(subject);
                                }}
                                style={{
                                    marginLeft: `${calDecimal('08:00', item.start) * hourWidth}px`,
                                    width: `${calDecimal(item.start, item.end) * hourWidth}px`,
                                    marginTop: `${mapDay[item.day] * dayHeight}px`,
                                }}
                                type='button'
                                variant='outline'
                            >
                                <p className='text-[0.8rem] font-extrabold lg:text-sm'>
                                    {subject.name}
                                </p>
                                <p className='text-[0.7rem] font-semibold text-gray-500'>
                                    {item.start} - {item.end}
                                </p>
                            </Button>
                        </PopoverTrigger>
                        <SubjectCard subject={subject} />
                    </Popover>
                );
            })}
        </>
    );
}

const calDecimal = (timeStart: string, timeEnd: string): number => {
    const parseTime = (time: string): { hours: number; minutes: number } => {
        const [hours, minutes] = time.split(':').map(Number);
        return { hours, minutes };
    };

    const start = parseTime(timeStart);
    const end = parseTime(timeEnd);

    const startInMinutes = start.hours * 60 + start.minutes;
    const endInMinutes = end.hours * 60 + end.minutes;

    const differenceInMinutes = endInMinutes - startInMinutes;
    const differenceInHours = differenceInMinutes / 60;

    return differenceInHours;
};
