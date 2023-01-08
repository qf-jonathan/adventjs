/**
 * @param {number} dry
 * @param {number} numbers
 * @return {number[]}
 */
function dryNumber(dry, numbers) {
    return [...Array(numbers)]
        .map((_, i) => i + 1)
        .filter((n) => String(n).indexOf(String(dry)) !== -1);
}

export { dryNumber };
