// *** Rotate Array *** //
// Create a function named "rotate" that takes an array and 
// returns a new one with the elements inside rotated n spaces.
// If n is greater than 0 it should rotate the array to the right. 
// If n is less than 0 it should rotate the array to the left. 
// If n is 0, then it should return the array unchanged.
// Example:
// var data = [1, 2, 3, 4, 5];
// rotate(data, 1) // => [5, 1, 2, 3, 4]
// rotate(data, 2) // => [4, 5, 1, 2, 3]
// rotate(data, 3) // => [3, 4, 5, 1, 2]
// rotate(data, 4) // => [2, 3, 4, 5, 1]
// rotate(data, 5) // => [1, 2, 3, 4, 5]
// rotate(data, 0) // => [1, 2, 3, 4, 5]
// rotate(data, -1) // => [2, 3, 4, 5, 1]
// rotate(data, -2) // => [3, 4, 5, 1, 2]
// rotate(data, -3) // => [4, 5, 1, 2, 3]
// rotate(data, -4) // => [5, 1, 2, 3, 4]
// rotate(data, -5) // => [1, 2, 3, 4, 5]
function rotate(array,n){
  let arr = []
  let temp;
  let i = 0;
  if (n === 0) return array;
  
  array.map(e => arr.push(e));
  
  for (let i = 0; i < n; i++) {
    temp = arr.pop();
    arr.unshift(temp);
  }
  
  for (let j = 0; j > n; j--) {
    temp = arr.shift();
    arr.push(temp);
  }
  
  return arr;
}