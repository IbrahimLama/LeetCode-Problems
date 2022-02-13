/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const ROMAN_INTEGERS = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };

  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i + 1]) {
      const temp = s[i] + s[i + 1];
      if (ROMAN_INTEGERS[temp]) {
        sum += ROMAN_INTEGERS[temp];
        i++;
      } else {
        sum += ROMAN_INTEGERS[s[i]];
      }
    } else {
      sum += ROMAN_INTEGERS[s[i]];
    }
  }
  return sum;
};
