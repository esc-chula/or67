import type { Section } from '@/types/subject';

interface SubjectCardProps {
    subjectCode: string;
    subjectName: string;
    section: Section;
}

export default function SubjectCard({
    subjectName,
    subjectCode,
    section,
}: SubjectCardProps): JSX.Element {
    return (
        <div className='bg-background flex flex-col gap-4 rounded-2xl p-8 shadow-lg'>
            <div className='flex flex-col'>
                <p className='text-muted-foreground'>วิชา</p>
                <p className='font-semibold'>{subjectName}</p>
            </div>
            <div className='grid w-full grid-cols-2'>
                <div>
                    <p className='text-muted-foreground'>รหัสรายวิชา</p>
                    <p className='font-semibold'>{subjectCode}</p>
                </div>
                <div>
                    <p className='text-muted-foreground'>ตอนเรียน</p>
                    <p className='font-semibold'>{section.section}</p>
                </div>
            </div>
        </div>
    );
}
