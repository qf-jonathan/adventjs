import { test, expect } from 'vitest';
import { selectSleigh } from './solution';

test('day 12 - selectSleigh', () => {
    expect(
        selectSleigh(1, [
            { name: 'pheralb', consumption: 0.3 },
            { name: 'TMChein', consumption: 0.5 }
        ])
    ).toEqual('TMChein');
    expect(
        selectSleigh(10, [
            { name: 'Pedrosillano', consumption: 1 },
            { name: 'SamarJaffal', consumption: 5 }
        ])
    ).toEqual('Pedrosillano');
    expect(
        selectSleigh(10, [
            { name: 'Pedrosillano', consumption: 1 },
            { name: 'SamarJaffal', consumption: 2 },
            { name: 'marcospage', consumption: 3 }
        ])
    ).toEqual('SamarJaffal');
    expect(
        selectSleigh(50, [
            { name: 'Pedrosillano', consumption: 1 },
            { name: 'SamarJaffal', consumption: 2 },
            { name: 'marcospage', consumption: 3 }
        ])
    ).toBeNull();
});
