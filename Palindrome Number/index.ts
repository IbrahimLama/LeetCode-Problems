/**
 * @param {number} x
 * @return {boolean}
*/

const isPalindrome = (x: number): boolean => {
    const stringX: string = x.toString();
    let j: number = stringX.length - 1;
    let isPalindrome: boolean = true;
    for (let i = 0; i < stringX.length / 2; i++) {
        if (stringX[i] !== stringX[j]) {
            isPalindrome = false;
        }
        j--;
    }
    return isPalindrome;
};