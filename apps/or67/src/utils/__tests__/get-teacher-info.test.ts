import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import type { Teacher } from '@/types/teacher';
import { getTeacherInfo } from '../get-teacher-info';
import { fetcher } from '../data-fetcher';

const teachers: Teacher[] = [
    {
        index: '1',
        range: { start: 33, end: 65 },
        name: 'รศ.ดร.อาจารย์ ที่ดี',
        room: 'ห้อง 123 ตึก 3',
        program: 'วิศวกรรมคอมพิวเตอร์-โอลิมปิกวิชาการ',
    },
    {
        index: '2',
        range: { start: 4, end: 6 },
        name: 'ผศ.ดร.สุดยอด ไปเลย',
        room: 'ห้อง 321 ตึก 1',
        program: 'วิศวกรรมคอมพิวเตอร์และเทคโนโลยีดิจิทัล',
    },
];

vi.mock('../data-fetcher');

describe('getTeacherInfo by student id function', () => {
    beforeEach(() => {
        vi.mocked(fetcher).mockImplementation(async () =>
            Promise.resolve(teachers)
        );
    });

    afterEach(() => {
        vi.resetAllMocks();
    });

    test('Get teacher data with a valid student Id [length = 1]', async () => {
        const teacher = await getTeacherInfo('5');
        expect(teacher).toEqual(teachers[1]);
    });

    test('Get teacher data with a valid student Id [length = 2]', async () => {
        const teacher: Teacher = await getTeacherInfo('48');
        expect(teacher).toEqual(teachers[0]);
    });

    test('Error from an invalid student index format [not a string number]', async () => {
        await expect(() => getTeacherInfo('abc')).rejects.toThrow(
            'Invalid student index'
        );
    });

    test('Error from an invalid student index format [length > 4]', async () => {
        await expect(() => getTeacherInfo('12345')).rejects.toThrow(
            'Invalid student index'
        );
    });

    test('Error from an invalid student index', async () => {
        await expect(() => getTeacherInfo('100')).rejects.toThrow(
            'Teacher not found'
        );
    });
});
