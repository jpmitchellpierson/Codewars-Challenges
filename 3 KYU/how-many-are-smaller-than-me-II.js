// *** How Many Are Smaller Than Me II *** //
// NOTE: Passes all tests but times out on CW challenge
// Given an array arr, you have to return the amount of numbers that are smaller than arr[i] to the right.
// smaller([5, 4, 3, 2, 1]) === [4, 3, 2, 1, 0]
// smaller(1, 2, 0) === [1, 1, 0]
function smaller(arr) {
  let res = [];
  let i = 0;
  for (i; i < arr.length; i++) {
    res.push(countSmaller(arr, arr[i], i + 1));
  }
  return res;
}

// helper function for counting number of integers smaller than current
function countSmaller(arr, el, idx) {
  let count = 0;
  for (idx; idx < arr.length; idx++) {
    if (arr[idx] < el) count++;
  }
  return count;
}