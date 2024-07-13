'use client';
import type { ChangeEvent } from 'react';
import { useState } from 'react';
import { Button } from '@ui/components/ui/button';
import { Label } from '@ui/components/ui/label';
import { useToast } from '@ui/hooks/use-toast';
import { Input } from '@ui/components/ui/input';
import { cn } from '@ui/lib/utils';
import { makeFriends } from '@/utils/makefriends';
import type { SubjectWithSpecificSection } from '@/types/subject';
import { useUser } from '@/contexts/user-context';
import { validateStudentId } from '@/utils/validator';
import { getStudentInfo } from '@/utils/get-student-info';

export default function Page(): JSX.Element {
    const {
        user: { student },
    } = useUser();

    const [studentIDs, setStudentIDs] = useState<string[]>([student?.id ?? '']);
    const [studentNames, setStudentNames] = useState<string[]>([
        student?.name.th ?? '',
    ]);
    const [matchResult, setMatchResult] = useState<
        SubjectWithSpecificSection[]
    >([]);
    const [loading, setLoading] = useState<boolean>(false);
    const { toast } = useToast();

    function handleAdd(): void {
        const addInputElement = [
            ...studentIDs,
            studentIDs.length === 0 ? student?.id ?? '' : '',
        ];
        setStudentIDs(addInputElement);
    }

    function handleChange(
        e: ChangeEvent<HTMLInputElement>,
        index: number
    ): void {
        async function fetchStudentName(): Promise<void> {
            const {
                name: { th: studentName },
            } = await getStudentInfo(e.target.value);
            const studentNameArray = [...studentNames];
            studentNameArray[index] = studentName;
            setStudentNames(studentNameArray);
        }
        const inputData = [...studentIDs];
        inputData[index] = e.target.value;
        if (validateStudentId(e.target.value)) {
            fetchStudentName().catch(() => {
                studentNames[index] = 'ไม่พบข้อมูลนิสิต';
                setStudentNames([...studentNames]);
            });
        } else {
            studentNames[index] = 'ไม่พบข้อมูลนิสิต';
            setStudentNames([...studentNames]);
        }
        setStudentIDs(inputData);
    }

    function handleDelete(index: number): void {
        const deleteInputElement = [...studentIDs];
        deleteInputElement.splice(index, 1);
        setStudentIDs(deleteInputElement);
    }

    function handleSearch(): void {
        setLoading(true);
        if (studentIDs.some((id) => id === '')) {
            toast({
                variant: 'destructive',
                title: 'ไม่สามารถค้นหาได้',
                description:
                    'กรุณากรอกรหัสนิสิตให้ครบทุกช่อง หรือลบช่องที่ไม่ต้องการค้นหา',
            });
            setLoading(false);
            return;
        }
        if (studentIDs.length < 2) {
            toast({
                variant: 'destructive',
                title: 'ไม่สามารถค้นหาได้',
                description: 'กรุณากรอกรหัสนิสิตอย่างน้อย 2 คน',
            });
            setLoading(false);
            return;
        }
        async function fetchMatchResult(): Promise<void> {
            setMatchResult(
                await makeFriends(studentIDs.filter((id) => id !== ''))
            );
        }

        fetchMatchResult()
            .catch((e) => {
                if (!(e instanceof Error)) throw e;
                toast({
                    variant: 'destructive',
                    title: 'Uh oh! Something went wrong.',
                    description: e.message,
                });
            })
            .finally(() => {
                setLoading(false);
            });
    }

    return (
        <main className='mx-auto w-full max-w-3xl'>
            <h2 className='mb-8 text-center text-2xl font-semibold lg:mb-12 lg:text-4xl'>
                เซคชั่นที่เรียนร่วมกัน
            </h2>
            <div className='flex flex-col items-center gap-6'>
                <div className='flex w-full flex-col gap-12'>
                    {studentIDs.map((friend, index) => (
                        <div
                            className='group relative grid w-full grid-cols-1'
                            key={`input-${index + 1}`}
                        >
                            <Input
                                className='border-primary h-12 border-2'
                                id={`student-id-${friend}`}
                                onChange={(e) => {
                                    handleChange(e, index);
                                }}
                                type='text'
                                value={friend}
                            />
                            <Label
                                className={cn(
                                    'bg-background group-focus-within:text-foreground text-muted-foreground absolute left-4 top-1/2 -translate-y-1/2 duration-150 group-focus-within:-top-1 group-focus-within:px-2',
                                    friend && 'text-foreground -top-1 px-2'
                                )}
                                htmlFor={`student-id-${friend}`}
                            >
                                {student && student.id === friend
                                    ? 'รหัสนิสิตของคุณ'
                                    : `รหัสนิสิตของเพื่อนคนที่ ${index + 1 - (studentIDs.some((id) => id === student?.id) ? 1 : 0)}`}
                            </Label>
                            <Button
                                className='bg-background border-primary absolute right-0 top-0 h-6 rounded-md rounded-r-none rounded-t-none border-b border-l px-3'
                                onClick={() => {
                                    handleDelete(index);
                                }}
                                variant='ghost'
                            >
                                X
                            </Button>
                            {studentNames.at(index) && (
                                <Label
                                    className='text-muted-foreground pointer-events-none absolute -bottom-6 left-4'
                                    htmlFor='student-id'
                                >
                                    {studentNames.at(index)}
                                </Label>
                            )}
                        </div>
                    ))}
                </div>
                <Button
                    className='bg-primary size-6 rounded-full text-white'
                    onClick={handleAdd}
                >
                    +
                </Button>
                <Button
                    className='w-full rounded-xl'
                    disabled={loading}
                    onClick={handleSearch}
                >
                    {loading ? 'กำลังค้นหา...' : 'ค้นหา'}
                </Button>
            </div>
            {matchResult.length > 0 ? (
                <section className='mt-8 flex w-full flex-col items-center gap-8'>
                    <hr className='w-full' />
                    <article className='flex w-full flex-col gap-4 px-4'>
                        {matchResult.map((subject) => (
                            <div
                                className='flex w-full flex-col gap-2 rounded-lg px-4 py-5 shadow-lg'
                                key={subject.code}
                            >
                                <h3 className='flex w-full flex-wrap gap-2'>
                                    <span className='font-semibold'>
                                        {subject.code}
                                    </span>
                                    <span>{subject.name}</span>
                                    <span className='text-muted-foreground'>
                                        ({subject.lectureCredit} หน่วยกิต)
                                    </span>
                                </h3>
                                <hr className='w-full' />
                                {subject.section.classes.map((c) => (
                                    <div
                                        className='flex flex-col'
                                        key={`${c.day}-${c.timeStart}`}
                                    >
                                        <h4 className='font-semibold'>
                                            {c.format}
                                        </h4>
                                        <p>
                                            {c.day} {c.timeStart} - {c.timeEnd}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </article>
                </section>
            ) : null}
        </main>
    );
}
