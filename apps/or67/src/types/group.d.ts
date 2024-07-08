export interface Group {
    index: string;
    groupCode: string;
    range: { start: number; end: number };
    subjects: {
        code: string;
        section: number;
    }[];
}
