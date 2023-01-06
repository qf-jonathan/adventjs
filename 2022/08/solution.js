/**
 * @param {string} part
 * @return {string}
 */
function checkPart(part) {
    return [...Array(part.length + 1).keys()]
        .map((i) => part.slice(0, i) + part.slice(i + 1))
        .reduce((r, s) => r || s === s.split('').reverse().join(''), false);
}

export { checkPart };
