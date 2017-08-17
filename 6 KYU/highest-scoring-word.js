// *** Highest Scoring Word *** //
// Given a string of words (x), you need to find the highest scoring word.
// Each letter of a word scores points according to it's position in the alphabet. 
// a=1, z=26 and everything inbetween.
// You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears earliest in the original string.
// All letters will be lower case and all inputs will be valid.
function high(x){
  let a = x.split(' ');
  let res = '';
  let highest = 0;
  
  for (let i = 0; i < a.length; i++) {
    let sum = findSum(a[i]);
    if (sum > highest) {
      highest = sum;
      res = a[i];
    }
  }
  return res;
}
// helper function to find value of each word
function findSum(str) {
  let sum = 0;
  let val = { 'a': 1,'b': 2,'c':3,'d':4,'e':5,'f':6,
              'g':7,'h':8,'i':9,'j':10,'k':11,'l':12,
              'm':13,'n':14,'o':15,'p':16,'q':17,'r':18,
              's':19,'t':20,'u':21,'v':22,'w':23,'x':24,
              'y':25,'z':26 };
  
  for (let i = 0; i < str.length; i++) {
    sum += val[str[i]];
  }
  return sum;
}