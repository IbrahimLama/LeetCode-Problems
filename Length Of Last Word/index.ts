/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = (s: string) => {
    // /\s+/ is regex for any number of spaces
    const splittedWords = s.split(/\s+/).filter(item => item.length > 0);
    return splittedWords[splittedWords.length - 1].length;
};