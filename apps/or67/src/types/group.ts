import { ISubject } from './subject';

export interface Group {
    groupCode: string;
    range: { start: number; end: number };
    subjects: ISubject[];
}
