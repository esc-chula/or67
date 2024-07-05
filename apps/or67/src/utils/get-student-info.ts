import type { Student } from '@/types/student';

const validateStudentId = (studentId: string): boolean => {
    const pattern = /^\d{10}$/; // matches any digits equivalent to 0-9 and has 10 digits
    return pattern.test(studentId);
};

export const getStudentInfo = async (
    studentId: string
): Promise<Student | undefined> => {
    if (!validateStudentId(studentId)) {
        throw new Error('Invalid student ID format');
    }

    const data: Student[] | null = await fetch(`${process.env.NEXT_PUBLIC_OR67_STUDENTS}`).then(
        (response) => response.json()
    ) as Student[] | null;

    if (!data) {
        throw new Error('Failed to fetch students data');
    }

    const studentData = data.find(
        (student: Student) => student.id === studentId
    );

    if (!studentData) {
        throw new Error('Student ID not found');
    }

    return studentData;
};