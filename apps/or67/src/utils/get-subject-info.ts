import type { Subject } from '@/types/subject';
import { fetcher } from './data-fetcher';
import { validateSubjectCode } from './validator';

export const getSubjectsInfo = async (
    subjectCode: string
): Promise<Subject> => {
    if (!validateSubjectCode(subjectCode)) {
        throw new Error('Invalid subject code');
    }

    const subjects = await fetcher<Subject[]>(
        `${process.env.NEXT_PUBLIC_OR67_SUBJECTS}`
    );

    const subject = subjects.find((s) => s.code === subjectCode);
    if (!subject) {
        throw new Error('Subject not found');
    }

    return subject;
};
