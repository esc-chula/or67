import type { Subject } from '@/types/subject';
import { fetcher } from './data-fetcher';

export const getSubjectsInfo = async (
    subjectCode: string
): Promise<Subject> => {
    const subjectCodePattern = /^[0-9]{7}$/;
    if (!subjectCodePattern.test(subjectCode)) {
        throw new Error('Invalid subject code');
    }

    const data = await fetcher<Subject[]>(
        `${process.env.NEXT_PUBLIC_OR67_SUBJECTS}`
    );

    const subject = data.find((s) => s.code === subjectCode);
    if (!subject) {
        throw new Error('Subject not found');
    }

    return subject;
};
