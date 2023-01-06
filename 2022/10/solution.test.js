import { test, expect } from 'vitest';
import { checkJump } from './solution';

test('day 10 - checkJump', () => {
    expect(checkJump([1, 2, 1])).toBeTruthy();
    expect(checkJump([1, 3, 8, 5, 2])).toBeTruthy();
    expect(checkJump([1, 7, 3, 5])).toBeFalsy();
    expect(checkJump([1, 2, 3, 2, 1])).toBeTruthy();
    expect(checkJump([1, 2, 2, 2, 1])).toBeTruthy();
    expect(checkJump([0, 1, 0])).toBeTruthy();
    expect(checkJump([2, 2, 2, 2])).toBeFalsy();
    expect(checkJump([1, 2, 3])).toBeFalsy();
    expect(checkJump([1, 2, 3, 2, 1, 2, 3])).toBeFalsy();
    expect(checkJump([1, 1000, 900, 800])).toBeTruthy();
    expect(checkJump([1, 1000, 100, 800])).toBeFalsy();
    expect(checkJump([1, 1, 1, 1, 1, 1, 1, 1, 2, 1])).toBeTruthy();
    expect(checkJump([1, 2, 3, 1, 3, 1])).toBeFalsy();
    expect(checkJump([1, 3, 2, 5, 4, 3, 2, 1])).toBeFalsy();
});
