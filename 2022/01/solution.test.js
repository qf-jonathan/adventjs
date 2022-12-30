import { test, expect } from 'vitest'
import {wrapping} from './solution'

test('day 01 - wrapping', () => {
    expect(wrapping(['cat', 'game', 'socks'])).toEqual([
        "*****\n*cat*\n*****",
        "******\n*game*\n******",
        "*******\n*socks*\n*******"
    ])
    expect(wrapping(['midu'])).toEqual([
        "******\n*midu*\n******"
    ])
    expect(wrapping(['a'])).toEqual([
        "***\n*a*\n***"
    ])
    expect(wrapping([])).toEqual([])
})