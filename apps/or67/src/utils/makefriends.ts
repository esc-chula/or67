import type { SubjectWithSpecificSection } from '@/types/subject';
import type { Student } from '@/types/student';
import type { Group } from '@/types/group';
import { getGroupInfo } from './get-group-info';
import { getStudentInfo } from './get-student-info';
import { getSubjectsInfo } from './get-subject-info';

export async function makeFriends(
    friends: Student['id'][]
): Promise<SubjectWithSpecificSection[]> {
    const groups: Group[] = await Promise.all(
        friends.map(async (friend) => {
            return getGroupInfo((await getStudentInfo(friend)).index);
        })
    );

    let intersection = groups[0].subjects;

    for (const group of groups) {
        intersection = intersection.filter((subject) => {
            return group.subjects.find(
                (subject2) =>
                    subject2.code === subject.code &&
                    subject2.section === subject.section
            );
        });
    }

    const subjectsInfo = await Promise.all(
        intersection.map(async (subject) => {
            const info = await getSubjectsInfo(subject.code);
            const section = info.sections.find(
                (s) => s.section === subject.section
            );
            if (!section) throw new Error('Section not found');
            return {
                ...info,
                section,
            };
        })
    );

    return subjectsInfo;
}
