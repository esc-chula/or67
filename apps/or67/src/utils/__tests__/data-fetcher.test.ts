import { expect, test } from 'vitest';
import { getStudentInfo } from '../data-fetcher';

test('getStudentInfo returns null', () => {
    expect(getStudentInfo()).toBe(null);
});
