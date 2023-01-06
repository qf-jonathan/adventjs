/**
 * @param {string[]} a1
 * @param {string[]} a2
 * @param {string[]} a3
 * @return {string[]}
 */
function getGiftsToRefill(a1, a2, a3) {
    const filterFn = (a, b, c) => {
        return a.filter((e) => b.indexOf(e) === -1 && c.indexOf(e) === -1);
    };
    const result = new Set([
        ...filterFn(a1, a2, a3),
        ...filterFn(a2, a1, a3),
        ...filterFn(a3, a1, a2)
    ]);
    return [...result];
}

export { getGiftsToRefill };
