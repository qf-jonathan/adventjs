import { test, expect } from 'vitest';
import { dryNumber } from './solution';

test('day 18 - dryNumber', () => {
    expect(dryNumber(1, 15)).toEqual([1, 10, 11, 12, 13, 14, 15]);
    expect(dryNumber(2, 20)).toEqual([2, 12, 20]);
    expect(dryNumber(3, 33)).toEqual([3, 13, 23, 30, 31, 32, 33]);
    expect(dryNumber(4, 45)).toEqual([4, 14, 24, 34, 40, 41, 42, 43, 44, 45]);
    expect(dryNumber(5, 55)).toEqual([
        5, 15, 25, 35, 45, 50, 51, 52, 53, 54, 55
    ]);
    expect(dryNumber(9, 8)).toEqual([]);
});
