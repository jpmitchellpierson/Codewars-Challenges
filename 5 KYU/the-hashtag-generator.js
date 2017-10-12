// *** The Hashtag Generator *** //
// If the final result is longer than 140 chars it must return false.
// If the input is a empty string it must return false.
// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// Example Input to Output:
// " Hello there thanks for trying my Kata" => "#HelloThereThanksForTryingMyKata"
//" Hello World " => "#HelloWorld"
function generateHashtag (str) {
  let hashStr = str.split(' ').reduce((a, c) => { return a += c.charAt(0).toUpperCase() + c.substr(1) }, '');
  return ('#' + hashStr).length > 140 || str.length === 0 ? false : '#' + hashStr;
}