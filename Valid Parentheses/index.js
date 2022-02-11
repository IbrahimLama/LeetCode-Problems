/**
 * @param {string} s
 * @return {boolean}
*/

var isValid = function (s) {
    const parantheses = {
        ")": "(",
        "]": "[",
        "}": "{"
    }

    let paranthesesOccurance = [];
    const openParantheses = ["(", "{", "["];
    for (let i = 0; i < s.length; i++) {
        if (openParantheses.includes(s[i])) {
            paranthesesOccurance.push(s[i]);
        } else if (paranthesesOccurance[paranthesesOccurance.length - 1] === parantheses[s[i]]) {
            paranthesesOccurance.pop();
        } else {
         return false;
        }
    }

    return paranthesesOccurance.length === 0;
}