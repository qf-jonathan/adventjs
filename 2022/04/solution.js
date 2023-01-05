/**
 * @param {object[]} boxes
 * @return {boolean}
 */
function fitsInOneBox(boxes) {
    const { result } = boxes
        .sort((a, b) => a.l - b.l)
        .reduce(
            ({ result, prev }, box) => {
                if (prev === null) return { result, prev: box };
                return {
                    result:
                        result &&
                        prev.l < box.l &&
                        prev.w < box.w &&
                        prev.h < box.h,
                    prev: box
                };
            },
            { result: true, prev: null }
        );
    return result;
}

export { fitsInOneBox };
