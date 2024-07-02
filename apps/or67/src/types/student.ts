import { Program } from './program';

export interface Student {
    index: number;
    id: string;
    name: {
        th: string;
        en: string;
    };
    program: Program;
}
