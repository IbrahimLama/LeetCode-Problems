/**
 * @param {string[]} strs
 * @return {string}
 */
 const longestCommonPrefix = (strs) => {
    let prefix = strs[0];
    for (let i = 0; i < strs.length; i++) {
        let tempPrefix = ''
        for (let j = 0; j < prefix.length; j++) {
            if (prefix[j] !== strs[i][j]) {
                break;
            }
            tempPrefix += prefix[j]
        }
        if (tempPrefix === '') {
            return ''
        }

        prefix = tempPrefix
    }

    return prefix;
};