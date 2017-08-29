// *** Break camelCase *** //
// Complete the solution so that the function will break up camel casing, using a space between words
// solution('camelCasing') // => should return 'camel Casing'
function solution(string) {
  let newStr = '';
  for (let i = 0; i < string.length; i++) {
    let index = string.indexOf(string[i + 1]);
    if (string.charCodeAt(index) >= 65 && string.charCodeAt(index) <= 90) {
      newStr += string[i] + ' ';
    } else {
      newStr += string[i];
    }
  }
  return newStr;
}