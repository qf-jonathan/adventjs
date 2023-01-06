/**
 * @param {number} distance
 * @param {object[]} sleighs
 * @return {string|null}
 */
function selectSleigh(distance, sleighs) {
    return sleighs.reduce(
        (result, { name, consumption }) =>
            consumption * distance <= 20 ? name : result,
        null
    );
}

export { selectSleigh };
