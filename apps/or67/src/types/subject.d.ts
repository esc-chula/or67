export interface Class {
    format: string;
    day: string;
    timeStart: string;
    timeEnd: string;
    location: string;
}

export interface Section {
    section: number;
    studentStart: number;
    studentEnd: number;
    classes: Class[];
}

export interface Subject {
    index: string;
    code: string;
    name: string;
    credit: number;
    midterm: string;
    final: string;
    sections: Section[];
}

export interface SubjectWithSpecificSection extends Omit<Subject, 'sections'> {
    section: Section;
}
