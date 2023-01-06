/**
 * @param {string} base
 * @return {string[]}
 */
function decorateTree(base) {
    const combined = 'B'.charCodeAt(0) ^ 'P'.charCodeAt(0) ^ 'R'.charCodeAt(0);
    const getMissing = (a, b) =>
        String.fromCharCode(combined ^ a.charCodeAt(0) ^ b.charCodeAt(0));

    const getNewList = (list) => {
        return [...Array(list.length - 1).keys()].map((_, i) =>
            list[i] === list[i + 1] ? list[i] : getMissing(list[i], list[i + 1])
        );
    };
    let prev = base.split(' ');
    const ans = [...Array(prev.length - 1)].map((_) => {
        prev = getNewList(prev);
        return prev;
    });
    ans.reverse().push(base.split(' '));
    return ans.map((arr) => arr.join(' '));
}

export { decorateTree };
