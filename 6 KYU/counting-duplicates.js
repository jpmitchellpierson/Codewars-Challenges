// *** Duplicate Count *** //
// Write a function that will return the count of 
// distinct case-insensitive alphabetic characters and 
// numeric digits that occur more than once in the input string. 
// The input string can be assumed to contain 
// only alphabets (both uppercase and lowercase) and numeric digits.
// 'abcde' --> 0 (no duplciates)
// 'aabBcde' --> 2 (a & b)
// 'Indivisibilities' --> 2 (i & s)
function duplicateCount(text){
  let i, k;
  let obj = {};
  let result = 0;
  let str = text.toLowerCase();
  
  for (i = 0; i < str.length; i++) {
    if (!obj[str[i]]) {
      obj[str[i]] = 1;
    } else {
      obj[str[i]]++;
    }
  }
  
  let keys = Object.keys(obj);
  for (k = 0; k < keys.length; k++) {
    if (obj[keys[k]] > 1) {
      result++;
    }
  }
  
  return result;
}