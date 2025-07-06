export const runtime = 'edge';

import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import type { Student } from '@/types/student';

export const GET = async (
    _req: NextRequest,
    { params: { studentId } }: { params: { studentId: string } }
): Promise<NextResponse> => {
    try {
        const url = process.env.OR_STUDENTS;
        if (!url) {
            throw new Error('Invalid URL');
        }

        const res = await fetch(url);
        if (!res.ok) {
            throw new Error('Failed to fetch students');
        }

        const students = (await res.json()) as Student[];

        const studentData = students.find(
            (student: Student) => student.id === studentId
        );

        if (!studentData) {
            throw new Error('Student ID not found');
        }

        return NextResponse.json(studentData);
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json(
                {
                    error: error.message,
                },
                {
                    status: 404,
                }
            );
        }

        return NextResponse.json(
            {
                error: 'Failed to fetch',
            },
            {
                status: 500,
            }
        );
    }
};
