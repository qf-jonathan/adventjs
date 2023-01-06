import { test, expect } from 'vitest';
import { createCube } from './solution';

test('day 06 - createCube', () => {
    expect(createCube(3)).toEqual(
        '  /\\_\\_\\_\\\n' +
            ' /\\/\\_\\_\\_\\\n' +
            '/\\/\\/\\_\\_\\_\\\n' +
            '\\/\\/\\/_/_/_/\n' +
            ' \\/\\/_/_/_/\n' +
            '  \\/_/_/_/'
    );
    expect(createCube(1)).toEqual('/\\_\\\n\\/_/');
    expect(createCube(2)).toEqual(
        ' /\\_\\_\\\n/\\/\\_\\_\\\n\\/\\/_/_/\n \\/_/_/'
    );
    expect(createCube(10)).toEqual(
        '         /\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\\n' +
            '        /\\/\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\\n' +
            '       /\\/\\/\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\\n' +
            '      /\\/\\/\\/\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\\n' +
            '     /\\/\\/\\/\\/\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\\n' +
            '    /\\/\\/\\/\\/\\/\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\\n' +
            '   /\\/\\/\\/\\/\\/\\/\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\\n' +
            '  /\\/\\/\\/\\/\\/\\/\\/\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\\n' +
            ' /\\/\\/\\/\\/\\/\\/\\/\\/\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\\n' +
            '/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\\n' +
            '\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/_/_/_/_/_/_/_/_/_/_/\n' +
            ' \\/\\/\\/\\/\\/\\/\\/\\/\\/_/_/_/_/_/_/_/_/_/_/\n' +
            '  \\/\\/\\/\\/\\/\\/\\/\\/_/_/_/_/_/_/_/_/_/_/\n' +
            '   \\/\\/\\/\\/\\/\\/\\/_/_/_/_/_/_/_/_/_/_/\n' +
            '    \\/\\/\\/\\/\\/\\/_/_/_/_/_/_/_/_/_/_/\n' +
            '     \\/\\/\\/\\/\\/_/_/_/_/_/_/_/_/_/_/\n' +
            '      \\/\\/\\/\\/_/_/_/_/_/_/_/_/_/_/\n' +
            '       \\/\\/\\/_/_/_/_/_/_/_/_/_/_/\n' +
            '        \\/\\/_/_/_/_/_/_/_/_/_/_/\n' +
            '         \\/_/_/_/_/_/_/_/_/_/_/'
    );
});