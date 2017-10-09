// *** Where My Anagrams At? *** //
// Two words are anagrams of each other if they both contain the same letters 
// 'abba' & 'baab' == true
//'abba' & 'abbba' == false
// Write a function that will find all the anagrams of a word from a list. Given two inputs a word and an array with words, you should return an array of all the anagrams or an empty array if there are none
// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
function anagrams(word, words) {
  let regex = /([A-Za-z])/g;
  let str1 = word.match(regex).sort().join('');
  return words.reduce((a, c) => {
    let str2 = c.match(regex).sort().join('');
    if (str1 === str2) {
      a.push(c);
    }
    return a;
  }, []);
}