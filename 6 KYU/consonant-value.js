// *** Consonant Value *** //
// A consonant is any letter of the alphabet except a, e, i ,o, u. The consonant substrings in the word "zodiacs" are z, d, cs. Assuming a = 1, b = 2 ... z = 26, the values of these substrings are 26 ,4, 22 because z = 26,d = 4,cs=3+19=22. The maximum value of these substrings is 26. Therefore, solve("zodiacs") = 26.
// Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings.
function solve(s) {
  let vowels = /([aeiou])/g;
  let values = {
    'b':2, 'c': 3, 'd':4, 'f':6, 'g':7, 'h':8, 'j':10, 'k':11,
    'l':12, 'm':13, 'n':14, 'p':16, 'q':17, 'r':18, 's':19, 't':20,
    'v':22, 'w':23, 'x':24, 'y':25, 'z':26
  };
  
  let newStr = s.replace(vowels, ' ');
  let arr = newStr.split(' ');
  
  return arr.reduce((a,c) => {
    let res = 0;
    for (let i = 0; i < c.length; i++) {
      res += values[c[i]];
    }
    if (res > a) {
      a = res;
    }
    return a;
  }, 0);
}