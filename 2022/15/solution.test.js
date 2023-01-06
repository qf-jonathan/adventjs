import { test, expect } from 'vitest';
import { decorateTree } from './solution';

test('day 15 - decorateTree', () => {
    expect(decorateTree('B P R P')).toEqual(['R', 'P B', 'R B B', 'B P R P']);
    expect(decorateTree('B B')).toEqual(['B', 'B B']);
    expect(decorateTree('B B P R P R R')).toEqual([
        'B',
        'R P',
        'B P P',
        'P R B R',
        'P P B B P',
        'B R B B B R',
        'B B P R P R R'
    ]);
    expect(decorateTree('R R P R R')).toEqual([
        'R',
        'R R',
        'P B P',
        'R B B R',
        'R R P R R'
    ]);
});
