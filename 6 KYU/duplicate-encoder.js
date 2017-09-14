// *** Duplicate Encoder *** //
// The goal of this exercise is to convert a string to a new string where each character in the new string is '(' if that character appears only once in the original string, or ')' if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate
// "din" => "((("
// "recede" => "()()()"
// "Success" => ")())())"
// "(( @" => "))(("
function duplicateEncode(word){
  let w = word.toLowerCase();
  let wordObj = count(w);
  let letters = w.split('');
  return letters.reduce((a, c) => { return wordObj[c] > 1 ? a += ')' : a += '('; }, '');
}

function count(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (!obj[str[i]]) {
      obj[str[i]] = 1;
    } else {
      obj[str[i]]++;
    }
  }
  return obj;
}