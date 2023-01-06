import { test, expect } from 'vitest';
import { getFilesToBackup } from './solution';

test('day 13 - getFilesToBackup', () => {
    expect(
        getFilesToBackup(1546300800, [
            [3, 1546301100],
            [2, 1546300800],
            [1, 1546300800],
            [1, 1546300900],
            [1, 1546301000]
        ])
    ).toEqual([1, 3]);
    expect(
        getFilesToBackup(1546300600, [
            [1, 1546300800],
            [2, 1546300800],
            [1, 1546300900],
            [1, 1546301000],
            [3, 1546301100]
        ])
    ).toEqual([1, 2, 3]);
    expect(
        getFilesToBackup(1556300600, [
            [1, 1546300800],
            [2, 1546300800],
            [1, 1546300900],
            [1, 1546301000],
            [3, 1546301100]
        ])
    ).toEqual([]);
    expect(getFilesToBackup(1556300600, [])).toEqual([]);
});
