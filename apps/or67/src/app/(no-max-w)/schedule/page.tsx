'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useToast } from '@ui/hooks/use-toast';
import { Button } from '@ui/components/ui/button';
import type { SubjectWithSpecificSection } from '@/types/subject';
import type { UserContextType } from '@/contexts/user-context';
import { useUser } from '@/contexts/user-context';
import TimeTable from '@/components/schedule/timetable';
import DowloadButton from '@/components/schedule/dowload-button';
import { getSubjectsInfo } from '@/utils/get-subject-info';
import { takeScreenshot } from '@/utils/take-screenshot';
import { BaseSubjectCardContent } from '@/components/schedule/subject-card';
import Map from '@/components/schedule/map';

export default function Page(): JSX.Element {
    const { user } = useUser();
    const tableRef = useRef<HTMLDivElement>(null);
    const [subjects, setSubjects] = useState<SubjectWithSpecificSection[]>([]);
    const { toast } = useToast();
    const [focusSubject, setFocusSubject] =
        useState<SubjectWithSpecificSection | null>(null);

    useEffect(() => {
        const fetchData = async (): Promise<void> => {
            if (user.student) {
                setSubjects(await getSubjects(user));
            }
        };
        fetchData().catch((e) => {
            if (!(e instanceof Error)) throw e;
            toast({
                variant: 'destructive',
                title: 'Uh oh! Something went wrong.',
                description: e.message,
            });
        });
    }, [toast, user]);

    const handleSelectSubject = (subject: SubjectWithSpecificSection): void => {
        if (subject === focusSubject) {
            setFocusSubject(null);
            return;
        }
        setFocusSubject(subject);
    };

    const handleDownloadClick = useCallback(() => {
        if (!tableRef.current) return;
        const exportImage = async (node: HTMLElement): Promise<void> => {
            const image = await takeScreenshot(node);
            const a = document.createElement('a');
            a.href = image;
            a.download = 'schedule.png';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        };

        exportImage(tableRef.current).catch((e) => {
            if (!(e instanceof Error)) throw e;
            toast({
                variant: 'destructive',
                title: 'Uh oh! Something went wrong.',
                description: e.message,
            });
        });
    }, [toast]);

    const checkOverlap = (): SubjectWithSpecificSection[] => {
        const overlap = subjects.filter((subject) => {
            const { section } = subject;
            return subjects.some(
                (s) =>
                    s.code !== subject.code &&
                    s.section.classes.some((c) =>
                        section.classes.some(
                            (c2) =>
                                c.day === c2.day &&
                                ((c.timeStart >= c2.timeStart &&
                                    c.timeStart < c2.timeEnd) ||
                                    (c.timeEnd > c2.timeStart &&
                                        c.timeEnd <= c2.timeEnd))
                        )
                    )
            );
        });

        return overlap;
    };

    return (
        <div className='flex w-full flex-col items-center gap-16 pb-16 md:pb-0'>
            <section className='flex w-full max-w-6xl flex-col gap-2 sm:px-4'>
                <h1 className='text-center text-4xl font-semibold sm:mb-10'>
                    ตารางเรียน
                </h1>
                <div className='px-4 max-lg:overflow-x-scroll'>
                    <TimeTable
                        onSelectSubject={handleSelectSubject}
                        ref={tableRef}
                        subjects={subjects}
                    />
                </div>
                <div className='relative flex w-full items-center justify-between'>
                    <p className='text-muted-foreground ml-4 text-sm font-semibold lg:ml-12'>
                        คลิกที่แต่ละวิชาเพื่อดูรายละเอียดเพิ่มเติม
                    </p>
                    <Button
                        className='!text-primary border-primary flex h-10 w-36 gap-2.5 font-semibold'
                        onClick={handleDownloadClick}
                        type='button'
                        variant='outline'
                    >
                        <DowloadButton />
                        <span>บันทึกรูปภาพ</span>
                    </Button>
                </div>
                {focusSubject ? (
                    <article className='flex w-full px-4 md:hidden'>
                        <div className='relative flex w-full flex-col text-sm font-semibold shadow-lg'>
                            <BaseSubjectCardContent subject={focusSubject} />
                        </div>
                    </article>
                ) : null}
                {/* if there are overlapping subjects */}
                {checkOverlap().length > 0 ? (
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-center text-2xl font-semibold'>
                            คุณมีวิชาที่ซ้อนทับกัน
                        </h2>
                        <div className='flex flex-col gap-2'>
                            {checkOverlap().map((subject) => (
                                <article
                                    className='flex w-full flex-col gap-2 px-4'
                                    key={subject.code}
                                >
                                    <div className='flex w-full flex-col gap-2 rounded-lg px-4 py-5 shadow-lg'>
                                        <h3 className='flex w-full flex-wrap gap-2'>
                                            <span className='font-semibold'>
                                                {subject.code}
                                            </span>
                                            <span>{subject.name}</span>
                                            <span className='text-muted-foreground'>
                                                (
                                                {subject.lectureCredit
                                                    ? `บรรยาย ${subject.lectureCredit}`
                                                    : null}
                                                {subject.labCredit
                                                    ? (subject.lectureCredit
                                                          ? ' หน่วยกิต / '
                                                          : ''
                                                      ).concat(
                                                          `ปฏิบัติ ${subject.labCredit}`
                                                      )
                                                    : null}{' '}
                                                หน่วยกิต)
                                            </span>
                                        </h3>
                                        <hr className='w-full' />
                                        {subject.section.classes.map((c) => (
                                            <div
                                                className='flex flex-col'
                                                key={`${subject.code}-${c.day}-${c.timeStart}`}
                                            >
                                                <h4 className='font-semibold'>
                                                    {c.format}
                                                </h4>
                                                <p>
                                                    {c.day} {c.timeStart} -{' '}
                                                    {c.timeEnd}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                ) : null}
            </section>
            <Map />
        </div>
    );
}

const getSubjects = async (
    user: UserContextType['user']
): Promise<SubjectWithSpecificSection[]> => {
    if (!user.group) return [];

    const groupSubjects = user.group.subjects;
    const subjectsData = user.subjects;
    const expEngSection = user.expEngSection;
    if (!expEngSection) throw new Error('EXP ENG section not found');
    const expEngSubject = await getSubjectsInfo('5500111');

    return groupSubjects
        .map(({ code, section }) => {
            const subject = subjectsData.find((s) => s.code === code);

            if (!subject) {
                throw new Error('Subject not found');
            }

            const sec = subject.sections.find((s) => s.section === section);
            if (!sec) throw new Error('Section not found');

            return {
                ...subject,
                section: sec,
            };
        })
        .concat({
            ...expEngSubject,
            section: expEngSection,
        });
};
