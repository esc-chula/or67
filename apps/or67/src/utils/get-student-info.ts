import type { Student } from '@/types/student';
import { fetcher } from './data-fetcher';
import { validateStudentId } from './validator';

export const getStudentInfo = async (studentId: string): Promise<Student> => {
    if (!validateStudentId(studentId)) {
        throw new Error('Invalid student ID format');
    }

    const students = await fetcher<Student[]>(
        `${process.env.NEXT_PUBLIC_OR67_STUDENTS}`
    );

    const studentData = students.find(
        (student: Student) => student.id === studentId
    );

    if (!studentData) {
        throw new Error('Student ID not found');
    }

    return studentData;
};
