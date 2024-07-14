import type { Student } from '@/types/student';
import { fetcher } from './data-fetcher';
import { validateStudentId } from './validator';

export const getStudentInfo = async (studentId: string): Promise<Student> => {
    if (!validateStudentId(studentId)) {
        throw new Error('Invalid student ID format');
    }

    const studentData = await fetcher<Student>(`/api/students/${studentId}`);

    return studentData;
};
