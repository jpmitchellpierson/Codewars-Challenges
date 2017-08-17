// *** Reverse A Number *** //
// Given a number, write a function to output its reverse digits. 
// (e.g. given 123 the answer is 321)
// Numbers should preserve their sign 
// i.e. a negative number should still be negative when reversed.
function reverseNumber(n) {
  let res, slice;
  if (n < 0) {
    slice = n.toString().slice(1);
    res = -Number(slice.split('').reverse().join(''));
  } else {
    res = Number(n.toString().split('').reverse().join(''));
  }
  return res;
}