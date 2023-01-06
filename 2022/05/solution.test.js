import { test, expect } from 'vitest';
import { getMaxGifts } from './solution';

test('day 05 - getMaxGifts', () => {
    expect(getMaxGifts([12, 3, 11, 5, 7], 20, 3)).toEqual(20);
    expect(getMaxGifts([50], 15, 1)).toEqual(0);
    expect(getMaxGifts([50], 100, 1)).toEqual(50);
    expect(getMaxGifts([50, 70], 100, 1)).toEqual(70);
    expect(getMaxGifts([50, 70, 30], 100, 2)).toBeTruthy(100);
    expect(getMaxGifts([50, 70, 30], 100, 3)).toBeTruthy(100);
    expect(getMaxGifts([50, 10, 40, 1000, 500, 200], 199, 4)).toBeTruthy(100);
    expect(
        getMaxGifts([50, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 1000, 1000)
    ).toBeTruthy(100);
});
