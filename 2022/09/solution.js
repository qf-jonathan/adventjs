/**
 * @param {number[]} leds
 * @return {number}
 */
function countTime(leds) {
    return (
        [...leds, ...leds].reduce(
            ({ result, prev }, e, i) =>
                e
                    ? { result, prev: i }
                    : { result: Math.max(result, i - prev), prev },
            { result: 0, prev: -1 }
        ).result * 7
    );
}

export { countTime };
