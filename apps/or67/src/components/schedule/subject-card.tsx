import { PopoverContent } from '@ui/components/ui/popover';
import { Fragment } from 'react';
import type { SubjectWithSpecificSection } from '@/app/(no-max-w)/schedule/page';

interface SubjectCardProps {
    subject: SubjectWithSpecificSection;
}

export function BaseSubjectCardContent({
    subject: {
        code,
        name,
        midterm,
        final,
        section: { classes, section },
    },
}: SubjectCardProps): JSX.Element {
    return (
        <>
            <div className='bg-muted flex w-full items-center justify-center p-4 font-semibold'>
                <span className='text-muted-foreground absolute left-4 text-sm'>
                    {code}
                </span>
                <h1 className='text-center text-base'>{name}</h1>
            </div>
            <div className='grid grid-cols-[1fr,3fr] p-4'>
                <div className='flex w-full flex-col'>
                    <h4 className='text-muted-foreground'>ตอนเรียน</h4>
                    <p>{section}</p>
                </div>
                <div className='grid grid-cols-[3.5rem,repeat(2,minmax(0,1fr))] place-items-start gap-2'>
                    <h4 className='text-muted-foreground'>วัน</h4>
                    <h4 className='text-muted-foreground'>เวลา</h4>
                    <h4 className='text-muted-foreground'>ห้องเรียน</h4>
                    {classes.map(({ day, timeStart, timeEnd, location }) => (
                        <Fragment key={day}>
                            <p>{day}</p>
                            <p>
                                {timeStart} - {timeEnd}
                            </p>
                            <p>{location}</p>
                        </Fragment>
                    ))}
                </div>
            </div>
            <div className='grid grid-cols-2 gap-2 p-4'>
                <div className='flex flex-col'>
                    <h4 className='text-muted-foreground'>Midterm</h4>
                    <p>{midterm}</p>
                </div>
                <div className='flex flex-col'>
                    <h4 className='text-muted-foreground'>Final</h4>
                    <p>{final}</p>
                </div>
            </div>
        </>
    );
}

export default function SubjectCard({
    subject,
}: SubjectCardProps): JSX.Element {
    return (
        <PopoverContent className='flex w-96 flex-col p-0 text-sm font-semibold'>
            <BaseSubjectCardContent subject={subject} />
        </PopoverContent>
    );
}
