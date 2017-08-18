// *** Reverse List Order *** //
//In this kata you will create a function that takes in a list and returns a list with the reverse order.
// reverseList([1,2,3,4]) == [4,3,2,1]
// reverseList([3,1,5,4]) == [4,5,1,3]
function reverseList(l) {
  let reversed = [];
  let i = l.length - 1;
  for (i; i >= 0; i--) {
    reversed.push(l[i]);
  }
  return reversed;
}
