import { afterEach, describe, expect, type Mock, test, vi } from 'vitest';
import type { Subject } from '@/types/subject';
import { getSubjectsInfo } from '../get-subject-info';

const subjects: Subject[] = [
    {
        index: '1',
        code: '2199001',
        name: 'Mathematics I',
        lectureCredit: 3,
        midterm: '3 กรกฎาคม 2564',
        final: '4 กรกฎาคม 2564',
        sections: [
            {
                section: 1,
                studentStart: 1,
                studentEnd: 30,
                classes: [
                    {
                        format: 'Lecture',
                        day: 'Monday',
                        timeStart: '08:00',
                        timeEnd: '10:00',
                        location: 'บ้าน',
                    },
                ],
            },
        ],
    },
];

describe('getSubjectInfo', () => {
    afterEach(() => {
        vi.resetAllMocks();
    });

    test('returns a subject', async () => {
        global.fetch = vi.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(subjects),
            })
        ) as Mock;

        const subject = await getSubjectsInfo('2199001');
        expect(subject).toEqual(subjects[0]);
    });

    test('throws an error if the subject code is invalid', async () => {
        await expect(getSubjectsInfo('abc')).rejects.toThrow(
            'Invalid subject code'
        );
    });

    test('throws an error if the subject is not found', async () => {
        global.fetch = vi.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(subjects),
            })
        ) as Mock;

        await expect(getSubjectsInfo('9999999')).rejects.toThrow(
            'Subject not found'
        );
    });
});
