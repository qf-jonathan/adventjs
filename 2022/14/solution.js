/**
 * @param {number[][]} path
 * @return {number}
 */
function getOptimalPath(path) {
    const coerce = (n) => (n === undefined ? 1 << 30 : n);
    for (let i = 1; i < path.length; i++) {
        for (let j = 0; j < path[i].length; j++) {
            path[i][j] += Math.min(
                coerce(path[i - 1][j]),
                coerce(path[i - 1][j - 1])
            );
        }
    }
    return Math.min(...path[path.length - 1]);
}

export { getOptimalPath };
