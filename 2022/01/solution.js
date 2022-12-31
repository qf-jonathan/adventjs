/**
 * @param {string[]} gifts
 * @return {string[]}
 */
function wrapping(gifts) {
    return gifts.map((gift) => {
        const line = '*'.repeat(gift.length + 2);
        return `${line}\n*${gift}*\n${line}`;
    });
}

export { wrapping };
