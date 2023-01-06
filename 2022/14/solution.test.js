import { test, expect } from 'vitest';
import { getOptimalPath } from './solution';

test('day 14 - getOptimalPath', () => {
    expect(getOptimalPath([[0], [7, 4], [2, 4, 6]])).toEqual(8);
    expect(getOptimalPath([[0], [2, 3]])).toEqual(2);
    expect(getOptimalPath([[0], [3, 4], [9, 8, 1]])).toEqual(5);
    expect(getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]])).toEqual(8);
    expect(
        getOptimalPath([
            [1],
            [1, 5],
            [7, 5, 8],
            [9, 4, 1, 3],
            [-1, -1, -1, -1, -1]
        ])
    ).toEqual(7);
});
