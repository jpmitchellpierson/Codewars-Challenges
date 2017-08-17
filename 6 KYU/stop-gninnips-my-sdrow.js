// *** Stop gninnipS My sdroW! *** //
// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
function spinWords(str){
  let arr = str.split(" ");
  
  return arr.reduce(function(newStr, element) {
    let reversed = "";
    
    if (element.length >= 5) {
      reversed = element.split("").reverse().join("");
      newStr = newStr + " " + reversed;
    } else if (element.length < 5) {
      newStr = newStr + " " + element;
    }
    return newStr.trim();
  }, "");
}