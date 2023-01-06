import { test, expect } from 'vitest';
import { countTime } from './solution';

test('day 09 - countTime', () => {
    expect(countTime([0, 1, 1, 0, 1])).toEqual(7);
    expect(countTime([0, 0, 0, 1])).toEqual(21);
    expect(countTime([0, 0, 1, 0, 0])).toEqual(28);
    expect(countTime([1, 0, 0, 1, 0, 0])).toEqual(14);
    expect(countTime([1, 1, 0, 0, 0, 0])).toEqual(28);
    expect(countTime([1, 1, 1])).toEqual(0);
});
