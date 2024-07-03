import type { Program } from './program';

export interface Teacher {
    range: { start: number; end: number };
    name: string;
    room: string;
    program: Program;
}
