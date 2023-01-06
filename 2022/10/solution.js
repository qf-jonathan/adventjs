/**
 * @param {number[]} heights
 * @return {boolean}
 */
function checkJump(heights) {
    return (
        heights
            .reduce(
                ({ prev, dir }, e) => {
                    const d = e == prev ? '' : e > prev ? 'u' : 'd';
                    return {
                        prev: e,
                        dir: d === dir[dir.length - 1] ? dir : [...dir, d]
                    };
                },
                { prev: heights[0], dir: [''] }
            )
            .dir.join('') === 'ud'
    );
}

export { checkJump };
