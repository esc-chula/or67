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