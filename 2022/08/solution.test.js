import { test, expect } from 'vitest';
import { checkPart } from './solution';

test('day 08 - checkPart', () => {
    expect(checkPart('uwu')).toBeTruthy();
    expect(checkPart('midu')).toBeFalsy();
    expect(checkPart('lolol')).toBeTruthy();
    expect(checkPart('yolooloy')).toBeTruthy();
    expect(checkPart('zzzoonzzz')).toBeTruthy();
});
