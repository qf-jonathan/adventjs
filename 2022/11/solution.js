/**
 * @param {string} part
 * @param {string} total
 * @return {string}
 */
function getCompleted(part, total) {
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
    const toNumber = (t) => {
        const [h, m, s] = t.split(':').map((e) => e * 1);
        return h * 3600 + m * 60 + s;
    };
    const tPart = toNumber(part);
    const tTotal = toNumber(total);
    const g = gcd(tPart, tTotal);
    return `${tPart / g}/${tTotal / g}`;
}

export { getCompleted };
