import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import type { Student } from '@/types/student';
import { getStudentInfo } from '../get-student-info';
import { fetcher } from '../data-fetcher';

const students: Student[] = [
    {
        index: '1',
        id: '6731000021',
        name: {
            th: 'นายสุขี  ชีวัน',
            en: 'Mr. Sukee  Cheewan',
        },
        program: 'วิศวกรรมคอมพิวเตอร์-โอลิมปิกวิชาการ',
    },
    {
        index: '2',
        id: '6731000121',
        name: {
            th: 'นางสาวเลิศเลอ  เพอร์เฟ็ค',
            en: 'Miss Lerdler  Perfect',
        },
        program: 'วิศวกรรมสำรวจ',
    },
    {
        index: '3',
        id: '6731000221',
        name: {
            th: 'นายบักคนซั่ว  จังอ้าย',
            en: 'Mr. Bakkhonsau  Jungeye',
        },
        program: 'วิศวกรรมคอมพิวเตอร์และเทคโนโลยีดิจิทัล',
    },
];

vi.mock('../data-fetcher');

describe('getStudentInfo function', () => {
    beforeEach(() => {
        vi.mocked(fetcher).mockImplementationOnce(async () =>
            Promise.resolve(students)
        );
    });

    afterEach(() => {
        vi.resetAllMocks();
    });

    test('Get student data with a valid student ID', async () => {
        const student = await getStudentInfo('6731000021');
        expect(student).toEqual(students[0]);
    });

    test('Error from an invalid student ID format [not a string number]', async () => {
        await expect(() => getStudentInfo('abc')).rejects.toThrow(
            'Invalid student ID format'
        );
    });

    test('Error from an invalid student ID format [length != 10]', async () => {
        await expect(() => getStudentInfo('12345')).rejects.toThrow(
            'Invalid student ID format'
        );
    });

    test('Error from a non-existent student ID', async () => {
        await expect(() => getStudentInfo('6739999921')).rejects.toThrow(
            'Student ID not found'
        );
    });
});
