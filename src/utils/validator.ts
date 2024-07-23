export const validateStudentId = (studentId: string): boolean => {
    // starts with "673", then digit exactly 5 times, ends with "21"
    const pattern = /^673\d{5}21$/;
    return pattern.test(studentId);
};

export const validateStudentIndex = (studentIndex: string): boolean => {
    // starts with any digit from 1-9, then any digit 0-3 times
    const pattern = /^[1-9][0-9]{0,3}$/;
    return pattern.test(studentIndex);
};

export const validateSubjectCode = (subjectCode: string): boolean => {
    // any digit exactly 7 times
    const pattern = /^[0-9]{7}$/;
    return pattern.test(subjectCode);
};
