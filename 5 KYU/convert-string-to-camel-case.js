// *** Convert String To Camel Case *** //
// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized
// toCamelCase("the-stealth-warrior") -> theStealthWarrior
// toCamelCase("The_Stealth-Warrior") -> TheStealthWarrior 
function toCamelCase(str) {
  let res = '';
  let dashes = /([-_])/g;
  let arr = str.replace(dashes, ' ').split(' ');

  res += arr[0];
  for (let i = 1; i < arr.length; i++) {
    res += arr[i].substr(0, 1).toUpperCase() + arr[i].substr(1);
  }
  return res;
}