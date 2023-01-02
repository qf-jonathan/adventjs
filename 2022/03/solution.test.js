import { test, expect } from 'vitest';
import { distributeGifts } from './solution';

test('day 03 - distributedGifts', () => {
    expect(distributeGifts(['a', 'b', 'c'], ['d', 'e'])).toEqual(1);
    expect(distributeGifts(['videogames', 'console'], ['midu'])).toEqual(0);
    expect(
        distributeGifts(
            ['game', 'videoconsole', 'computer'],
            [
                'midudev',
                'pheralb',
                'codingwithdani',
                'carlosble',
                'blasco',
                'facundocapua',
                'madeval',
                'memxd'
            ]
        )
    ).toEqual(5);
    expect(
        distributeGifts(
            ['music'],
            [
                'midudev',
                'pheralb',
                'codingwithdani',
                'carlosble',
                'blasco',
                'facundocapua',
                'madeval',
                'memxd'
            ]
        )
    ).toEqual(26);
    expect(
        distributeGifts(['book', 'doll', 'ball'], ['dasher', 'dancer'])
    ).toEqual(2);
});
