// *** Sum Of Two Lowest Possible Integers *** //
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 integers. No floats or empty arrays will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// Do not modify the original array.
function sumTwoSmallestNumbers(numbers) {  
  let smallest = numbers.sort((a, b) => { return a - b }).slice(0, 2);
  return smallest[0] + smallest[1];
}