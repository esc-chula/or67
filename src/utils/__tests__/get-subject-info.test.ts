import {
    afterEach,
    beforeEach,
    describe,
    expect,
    type Mock,
    test,
    vi,
} from 'vitest';
import type { Subject } from '@/types/subject';
import {
    getExpEngSectionByStudentIndex,
    getSubjectsInfo,
} from '../get-subject-info';
import { fetcher } from '../data-fetcher';

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
    {
        index: '2',
        sections: [
            {
                section: 1,
                classes: [
                    {
                        format: 'บ/ป',
                        day: 'พุธ',
                        timeStart: '13:00',
                        timeEnd: '16:00',
                        location: 'ENG3 319',
                    },
                ],
                studentStart: 1,
                studentEnd: 10,
            },
        ],
        code: '5500111',
        name: 'EXP ENG 1',
        lectureCredit: 2,
        midterm: '25 ก.ย. 66 เวลา 08:30-10:30 น.',
        final: '27 พ.ย.66 เวลา 08:30-10:30 น.',
    },
];

vi.mock('../data-fetcher');

describe('getSubjectInfo', () => {
    beforeEach(() => {
        vi.mocked(fetcher).mockImplementationOnce(async () =>
            Promise.resolve(subjects)
        );
    });

    afterEach(() => {
        vi.resetAllMocks();
    });

    test('returns a subject', async () => {
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

describe('getExpEngSectionByStudentIndex', () => {
    beforeEach(() => {
        vi.mocked(fetcher).mockImplementationOnce(async () =>
            Promise.resolve(subjects)
        );
    });

    afterEach(() => {
        vi.resetAllMocks();
    });

    test('returns a section', async () => {
        const section = await getExpEngSectionByStudentIndex('1');
        expect(section).toEqual(subjects[1].sections[0]);
    });

    test('throws an error if the section is not found', async () => {
        await expect(getExpEngSectionByStudentIndex('11')).rejects.toThrow(
            'Section not found'
        );
    });
});
