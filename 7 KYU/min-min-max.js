// *** MinMinMax *** //
// Given an unsorted array of integers, find the smallest number in the array, 
// the largest number in the array, and the smallest number between 
// the two array bounds that is not in the array.
// For instance, given the array [-1, 4, 5, -23, 24], the smallest number is -23, 
// the largest number is 24, and the smallest number between the array bounds is -22. 
// You may assume the input is well-formed.
// You solution should return an array [smallest, minimumAbsent, largest]
// The smallest integer should be the integer from the array with the lowest value.
// The largest integer should be the integer from the array with the highest value.
// The minimumAbsent is the smallest number between the largest and 
// the smallest number that is not in the array.
function minMinMax(arr) {
  return arr.reduce((acc, curr) => {
    let n = arr.sort((a, b) => { return a - b });
    let s = arr[0];
    let minAbs = s + 1;
    let l = arr[arr.length - 1];
    acc[0] = s;
    acc[2] = l;
    
    acc[1] = findMinAbs(arr, minAbs);
    return acc;
    
  }, []);
}

function findMinAbs(arr, minAbs) {
  if (arr.includes(minAbs)) {
    minAbs++;
    return findMinAbs(arr, minAbs);
  } else {
    return minAbs;
  }
}