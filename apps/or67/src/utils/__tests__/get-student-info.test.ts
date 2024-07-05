import { afterEach, beforeEach, describe, expect, type Mock, test, vi } from 'vitest';
import { Student } from '@/types/student';
import { getStudentInfo } from '../get-student-info';

const students: Student[] = [
    {
        index: '1',
        id: '1234567890',
        name: {
            th: 'นายสุขี  ชีวัน',
            en: 'Mr. Sukee  Cheewan',
        },
        program: 'วิศวกรรมคอมพิวเตอร์-โอลิมปิกวิชาการ',
    },
    {
        index: '2',
        id: '0123456789',
        name: {
            th: 'นางสาวเลิศเลอ  เพอร์เฟ็ค',
            en: 'Miss Lerdler  Perfect',
        },
        program: 'วิศวกรรมสำรวจ',
    },
    {
        index: '3',
        id: '4567890123',
        name: {
            th: 'นายบักคนซั่ว  จังอ้าย',
            en: 'Mr. Bakkhonsau  Jungeye',
        },
        program: 'วิศวกรรมคอมพิวเตอร์และเทคโนโลยีดิจิทัล',
    },
];

describe('getStudentInfo function', () => {
    beforeEach(() => {
        global.fetch = vi.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(students),
            })
        ) as Mock;
    });

    afterEach(() => {
        vi.resetAllMocks();
    });

    test('Get student data with a valid student ID', async () => {
        const student = await getStudentInfo('1234567890');
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
        await expect(() => getStudentInfo('6531000021')).rejects.toThrow(
            'Student ID not found'
        );
    });
});