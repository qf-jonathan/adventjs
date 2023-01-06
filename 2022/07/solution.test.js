import { test, expect } from 'vitest';
import { getGiftsToRefill } from './solution';

test('day 07 - getGiftsToRefill', () => {
    expect(getGiftsToRefill([], [], [])).toEqual([]);
    expect(getGiftsToRefill(['a', 'a'], ['a', 'a'], ['a', 'a'])).toEqual([]);
    expect(getGiftsToRefill(['a', 'a'], ['b', 'b'], ['c', 'c'])).toEqual([
        'a',
        'b',
        'c'
    ]);
    expect(getGiftsToRefill(['a', 'b'], ['c', 'd'], ['e', 'f'])).toEqual([
        'a',
        'b',
        'c',
        'd',
        'e',
        'f'
    ]);
    expect(
        getGiftsToRefill(
            ['bici', 'coche', 'bici', 'bici'],
            ['coche', 'bici', 'muñeca', 'coche'],
            ['bici', 'pc', 'pc']
        )
    ).toEqual(['muñeca', 'pc']);
});
