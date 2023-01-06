/**
 * @param {string} part
 * @param {string} total
 * @return {string}
 */
function getCompleted(part, total) {
    const getGcd = (a, b) => (b === 0 ? a : getGcd(b, a % b));
    const toSeconds = (t) => t.split(':').reduce((a, v) => a * 60 + v * 1);
    const tPart = toSeconds(part);
    const tTotal = toSeconds(total);
    const gcd = getGcd(tPart, tTotal);
    return `${tPart / gcd}/${tTotal / gcd}`;
}

export { getCompleted };
