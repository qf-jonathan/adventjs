/**
 * @param {string[]} toys
 * @param {number[]} positions
 * @return {string[]}
 */
function sortToys(toys, positions) {
    return toys
        .map((t, i) => ({ toy: t, pos: positions[i] }))
        .sort((a, b) => a.pos - b.pos)
        .map((e) => e.toy);
}

export { sortToys };
