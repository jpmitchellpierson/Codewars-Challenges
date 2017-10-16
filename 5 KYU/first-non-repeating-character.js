// *** First Non-Repeating Character *** //
// Write a function named firstNonRepeatingLetter† that takes a string input, and returns the first character that is not repeated anywhere in the string.
// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.
// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.
// If a string contains all repeating characters, it should return the empty string ("").
function firstNonRepeatingLetter(s) {
  let o = letterObj(s);
  let keys = Object.keys(o);
  
  if (s.length === 0) return '';
  
  for (let i = 0; i < s.length; i++) {
    let key = s[i].toLowerCase();
    if (o[key] === 1) {
      return s[i];
    }
  }
  return '';
}

function letterObj(str) {
  return str.split('').reduce((a, c) => {
    let letter = c.toLowerCase();
    if (!a[letter]) {
      a[letter] = 1;
    } else {
      a[letter]++;
    }
    return a;
  }, {});
}