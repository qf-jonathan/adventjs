/**
 * @param {number[]} giftsCities
 * @param {number} maxGifts
 * @param {number} maxCities
 * @return {number}
 */
function getMaxGifts(giftsCities, maxGifts, maxCities) {
    const solve = (index, gifts, cities) => {
        if (index <= 0 || cities <= 0) return 0;
        const cityGifts = giftsCities[index - 1];
        return gifts < cityGifts
            ? solve(index - 1, gifts, cities)
            : Math.max(
                  solve(index - 1, gifts, cities),
                  solve(index - 1, gifts - cityGifts, cities - 1) + cityGifts
              );
    };
    return 0 + solve(giftsCities.length, maxGifts, maxCities);
}

export { getMaxGifts };
