// *** Tribonacci Sequence *** //
// signature will be an array of 3 integers
// create a fibonacci function that given a signature array/list, 
// returns the first n elements - signature included of the so seeded sequence.
// n will always be a non-negative number; 
// if n==0, then return an empty array and be ready for 
// anything else which is not clearly specified
function tribonacci(signature,n){
  let start = 0;
  let end = 3;
  if (n === 0) return [];
  if (n < signature.length) return signature.slice(0, n);
  
  function add(signature, n) {
    let slice = signature.slice(start, end);
    if (signature.length === n) {
      return signature;
    } else {
      let next = slice.reduce((sum, val) => {
        return sum + val;
      }, 0);
      signature.push(next);
      start++;
      end++;
    }
    add(signature, n);
  }
  add(signature, n);
  return signature;
}