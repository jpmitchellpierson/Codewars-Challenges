// *** My Head Is At The Wrong End *** //
// You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).
// Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logic
function fixTheMeerkat(arr) {
  let x = arr[0];
  arr[0] = arr[arr.length - 1];
  arr[arr.length - 1] = x;
  return arr;
 }