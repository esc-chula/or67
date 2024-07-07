import {
    afterEach,
    beforeEach,
    describe,
    expect,
    type Mock,
    test,
    vi,
} from 'vitest';
import type { Group } from '@/types/group';
import { fetcher } from '../data-fetcher';
import { getGroupInfo } from '../get-group-info';

const groups: Group[] = [
    {
        index: '4',
        groupCode: '2198374',
        range: { start: 1, end: 99 },
        subjects: [
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
        ],
    },
];

vi.mock('../data-fetcher');

describe('getGroupsInfo', () => {
    beforeEach(() => {
        vi.mocked(fetcher).mockImplementation(async () =>
            Promise.resolve(groups)
        );
    });

    afterEach(() => {
        vi.resetAllMocks();
    });

    test('throws an error if the student index is invalid', async () => {
        await expect(getGroupInfo('0')).rejects.toThrow(
            'Invalid student index'
        );

        await expect(getGroupInfo('abc')).rejects.toThrow(
            'Invalid student index'
        );

        await expect(getGroupInfo('-2993')).rejects.toThrow(
            'Invalid student index'
        );

        await expect(getGroupInfo('100000000')).rejects.toThrow(
            'Invalid student index'
        );
    });

    test('throws an error if the group is not found', async () => {
        global.fetch = vi.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(groups),
            })
        ) as Mock;

        await expect(getGroupInfo('3999')).rejects.toThrow('Group not found');
    });

    test('returns a group', async () => {
        const group1 = await getGroupInfo('99');
        expect(group1).toEqual(groups[0]);
    });
});
