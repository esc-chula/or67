import type { Group } from '@/types/group';
import { fetcher } from './data-fetcher';
import { validateStudentIndex } from './validator';

export const getGroupInfo = async (studentIndex: string): Promise<Group> => {
    if (!validateStudentIndex(studentIndex)) {
        throw new Error('Invalid student index');
    }

    const groups = await fetcher<Group[]>(
        `${process.env.NEXT_PUBLIC_GROUPS}`
    );

    const groupInfo = groups.find(
        (group: Group) =>
            group.range.start <= parseInt(studentIndex) &&
            group.range.end >= parseInt(studentIndex)
    );
    if (!groupInfo) {
        throw new Error('Group not found');
    }

    return groupInfo;
};
