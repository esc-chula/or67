import type { Teacher } from '@/types/teacher';
import { fetcher } from './data-fetcher';
import { validateStudentIndex } from './validator';

export const getTeacherInfo = async (
    studentIndex: string
): Promise<Teacher> => {
    if (!validateStudentIndex(studentIndex)) {
        throw new Error('Invalid student index');
    }

    const teachers = await fetcher<Teacher[]>(
        `${process.env.NEXT_PUBLIC_OR67_TEACHERS}`
    );

    const teacherData = teachers.find(
        (teacher: Teacher) =>
            teacher.range.start <= Number(studentIndex) &&
            teacher.range.end >= Number(studentIndex)
    );

    if (!teacherData) {
        throw new Error('Teacher not found');
    }

    return teacherData;
};
