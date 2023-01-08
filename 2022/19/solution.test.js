import { test, expect } from 'vitest';
import { sortToys } from './solution';

test('day 19 - sortToys', () => {
    expect(sortToys(['ball', 'doll', 'car', 'puzzle'], [2, 3, 1, 0])).toEqual([
        'puzzle',
        'car',
        'ball',
        'doll'
    ]);
    expect(
        sortToys(['pc', 'xbox', 'ps4', 'switch', 'nintendo'], [3, 1, 0, 2, 4])
    ).toEqual(['ps4', 'xbox', 'switch', 'pc', 'nintendo']);
    expect(
        sortToys(['pc', 'xbox', 'ps4', 'switch', 'nintendo'], [8, 6, 5, 7, 9])
    ).toEqual(['ps4', 'xbox', 'switch', 'pc', 'nintendo']);
    expect(
        sortToys(
            ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l'],
            [1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1111]
        )
    ).toEqual(['l', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k']);
});
