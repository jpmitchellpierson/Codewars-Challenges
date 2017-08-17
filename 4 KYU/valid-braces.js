// *** Valid Braces *** //
// Write a function called validBraces that takes a string of braces, 
// and determines if the order of the braces is valid. 
// validBraces should return true if the string is valid, and false if it's invalid.
// All input strings will be nonempty, and will only consist of 
// open parentheses '(' , closed parentheses ')', open brackets '[', closed brackets ']', 
// open curly braces '{' and closed curly braces '}'.
// A string of braces is considered valid if all braces are matched with the correct brace. 
function validBraces(braces){
  let stack = [];
  let brace = { '{':'}','[':']','(':')' };
  
  for (let i = 0; i < braces.length; i++) {
    let x;
    if (braces[i] === '{' || braces[i] === '[' || braces[i] === '(') {
      stack.push(braces[i]);
    } else {
      x = stack.pop();
      if (braces[i] !== brace[x]) return false; 
    }
  }
  if (stack.length !== 0) return false;
  return true;
}