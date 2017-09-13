// Write a function toWeirdCase that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased
// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ')
// toWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"
// NOTE: each new word beings a new 0 index
function toWeirdCase(string){
  let str = '';
  let arr = string.split(' ');
  
  return arr.reduce((a, c) => {
    if (arr.indexOf(c) === arr.length - 1) {
      let res = a += words(c);
      return res;
    }
    return a += words(c) + ' ';
  }, '');
}

function words(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      newStr += str[i].toUpperCase();
    } else {
      newStr += str[i].toLowerCase();
    }
  }
  return newStr;
}