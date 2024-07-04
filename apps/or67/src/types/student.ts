import type { Program } from './program';

export interface Student {
    index: string;
    id: string;
    name: {
        th: string;
        en: string;
    };
    program: Program;
}
