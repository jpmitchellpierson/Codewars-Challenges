// *** Count Charactars In Your String *** //
// The main idea is to count all the occuring characters(UTF-8) in string. If you have string like this aba then the result should be { 'a': 2, 'b': 1 }
// What if the string is empty ? Then the result should be empty object literal { }
function count (string) {  
  let res = {}, i = 0;

  for (i; i < string.length; i++) {
    let el = string[i];
    if (!res[el]) {
      res[el] = 1;
    } else {
      res[el]++;
    }
  }
  return res;
}