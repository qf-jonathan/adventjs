import { test, expect } from 'vitest';
import { carryGifts } from './solution';

test('day 17 - carryGifts', () => {
    expect(carryGifts(['game', 'bike', 'book', 'toy'], 10)).toEqual([
        'game bike',
        'book toy'
    ]);
    expect(carryGifts(['game', 'bike', 'book', 'toy'], 7)).toEqual([
        'game',
        'bike',
        'book toy'
    ]);
    expect(carryGifts(['game', 'bike', 'book', 'toy'], 4)).toEqual([
        'game',
        'bike',
        'book',
        'toy'
    ]);
    expect(carryGifts(['toy', 'gamme', 'toy', 'bike'], 6)).toEqual([
        'toy',
        'gamme',
        'toy',
        'bike'
    ]);
    expect(carryGifts(['toy', 'toy', 'toy', 'toy'], 2)).toEqual([]);
    expect(carryGifts(['toy', 'toy', 'disk', 'disk', 'toy', 'toy'], 7)).toEqual(
        ['toy toy', 'disk', 'disk toy', 'toy']
    );
});
