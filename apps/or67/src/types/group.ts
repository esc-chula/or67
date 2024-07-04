import type { Subject } from './subject';

export interface Group {
    index: string;
    groupCode: string;
    range: { start: number; end: number };
    subjects: Subject[];
}
