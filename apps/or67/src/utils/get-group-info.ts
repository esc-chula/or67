import type { Group } from '@/types/group';
import { fetcher } from './data-fetcher';

export const getGroupsInfo = async (studentIndex: string): Promise<Group> => {
    const studentIndexPattern = /^[1-9][0-9]{0,3}$/;
    if (!studentIndexPattern.test(studentIndex)) {
        throw new Error('Invalid student index');
    }

    const data = await fetcher<Group[]>(
        `${process.env.NEXT_PUBLIC_OR67_SUBJECTS}`
    );

    const groupInfo = data.find(
        (group: Group) =>
            group.range.start <= parseInt(studentIndex) &&
            group.range.end >= parseInt(studentIndex)
    );
    if (!groupInfo) {
        throw new Error('Group not found');
    }

    return groupInfo;
};
