/**
 * @param {string} letter
 * @return {string}
 */
function fixLetter(letter) {
    return letter
        .trim()
        .replace(/ +/g, ' ')
        .replace(/,([^ ])/g, ', $1')
        .replace(/ ([,.?])/g, '$1')
        .replace(/\?+/g, '?')
        .replace(/santa claus/gi, 'Santa Claus')
        .replace(/[.?!] \w|^\w/g, (match) => match.toUpperCase())
        .replace(/([^.?!])$/, '$1.');
}

export { fixLetter };
