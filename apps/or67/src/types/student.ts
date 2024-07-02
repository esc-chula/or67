import { Program } from './program';

export interface IStudent {
    index: number;
    id: string;
    name: {
        th: string;
        en: string;
    };
    program: Program;
}
