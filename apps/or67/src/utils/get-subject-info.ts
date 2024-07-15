import type { Section, Subject } from '@/types/subject';
import { fetcher } from './data-fetcher';
import { validateSubjectCode } from './validator';

export const getSubjectsInfo = async (
    subjectCode: string
): Promise<Subject[]> => {
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

    const sections = subjects.filter((s) => s.code === subjectCode);

    return sections;
};

export const getExpEngSectionByStudentIndex = async (
    studentIndex: string
): Promise<Section> => {
    const expEng = await getSubjectsInfo('5500111');

    const found1 = expEng[0].sections.find((s) => {
        return (
            s.studentStart <= parseInt(studentIndex) &&
            parseInt(studentIndex) <= s.studentEnd
        );
    });

    const found2 = expEng[1].sections.find((s) => {
        return (
            s.studentStart <= parseInt(studentIndex) &&
            parseInt(studentIndex) <= s.studentEnd
        );
    });

    if (found1) {
        return found1;
    }
    if (found2) {
        return found2;
    }

    throw new Error('Section not found');
};
