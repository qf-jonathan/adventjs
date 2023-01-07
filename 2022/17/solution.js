/**
 * @param {string[]} gifts
 * @param {number} maxWeight
 * @return {string[]}
 */
function carryGifts(gifts, maxWeight) {
    const size = (items) => items.reduce((c, v) => c + v.length, 0);
    return gifts
        .reduce(
            (r, v) => {
                if (size(r[r.length - 1]) + v.length <= maxWeight) {
                    r[r.length - 1].push(v);
                } else if (v.length <= maxWeight) r.push([v]);
                return r;
            },
            [[]]
        )
        .filter((items) => items.length !== 0)
        .map((items) => items.join(' '));
}

export { carryGifts };
