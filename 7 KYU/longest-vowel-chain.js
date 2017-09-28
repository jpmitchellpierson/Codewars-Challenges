// *** Longest Vowel Chain *** //
// The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only and no spaces, return the length of the longest vowel substring
function solve(s){
  let consonants = /([^aeiou])/g;
  return s.replace(consonants, ' ').split(' ').reduce((a, c) => { return c.length > a ? c.length : a }, 0);
 }