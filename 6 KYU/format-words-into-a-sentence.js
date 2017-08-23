// *** Format Words Into A Sentence *** //
// Complete the method so that it formats the words into a single comma separated value. The last word should be separated by the word 'and' instead of a comma. The method takes in an array of strings and returns a single formatted string. Empty string values should be ignored. Empty arrays or null/nil values being passed into the method should result in an empty string being returned.
// formatWords(['ninja', 'samurai', 'ronin']) // should return "ninja, samurai and ronin"
// formatWords(['ninja', '', 'ronin']) // should return "ninja and ronin"
// formatWords([]) // should return ""
function formatWords(words){
  if (words === null) return '';
  let arr = words.filter((word) => { return word.length > 1 });
  
  if (arr.length === 1) return arr[0];
  
  return arr.reduce((acc, curr) => {
    if (arr.indexOf(curr) === arr.length - 1) {
      acc += 'and ' + curr;
    } else if (arr.indexOf(curr) === arr.length - 2) {
      acc += curr + ' ';
    } else {
      acc += curr + ', ';
    }
    return acc;
  }, "");
}