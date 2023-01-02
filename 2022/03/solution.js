/**
 * @param {string[]} packOfGifts
 * @param {string[]} reindeers
 * @return {number}
 */
function distributeGifts(packOfGifts, reindeers) {
    const lengthSum = (total, item) => total + item.length;
    return Math.floor(
        (reindeers.reduce(lengthSum, 0) * 2) / packOfGifts.reduce(lengthSum, 0)
    );
}

export { distributeGifts };
