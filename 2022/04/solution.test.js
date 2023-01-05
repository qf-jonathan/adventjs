import { test, expect } from 'vitest';
import { fitsInOneBox } from './solution';

test('day 04 - fitsInOneBox', () => {
    expect(
        fitsInOneBox([
            { l: 1, w: 1, h: 10 },
            { l: 3, w: 3, h: 12 },
            { l: 2, w: 2, h: 1 }
        ])
    ).toBeFalsy();
    expect(
        fitsInOneBox([
            { l: 1, w: 1, h: 1 },
            { l: 2, w: 2, h: 2 }
        ])
    ).toBeTruthy();
    expect(
        fitsInOneBox([
            { l: 1, w: 1, h: 1 },
            { l: 2, w: 2, h: 2 },
            { l: 3, w: 1, h: 3 }
        ])
    ).toBeFalsy();
    expect(
        fitsInOneBox([
            { l: 1, w: 1, h: 1 },
            { l: 2, w: 2, h: 2 },
            { l: 2, w: 10, h: 2 }
        ])
    ).toBeFalsy();
    expect(
        fitsInOneBox([
            { l: 1, w: 1, h: 1 },
            { l: 3, w: 3, h: 3 },
            { l: 2, w: 2, h: 2 }
        ])
    ).toBeTruthy();
});
