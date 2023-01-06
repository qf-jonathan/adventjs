/**
 * @param {number} size
 * @return {string}
 */
function createCube(size) {
    let result = [
        ...Array.from(
            { length: size },
            (_, i) =>
                ' '.repeat(size - i - 1) +
                '/\\'.repeat(i + 1) +
                '_\\'.repeat(size)
        ),
        ...Array.from(
            { length: size },
            (_, i) => ' '.repeat(i) + '\\/'.repeat(size - i) + '_/'.repeat(size)
        )
    ];
    return result.join('\n');
}

export { createCube };
