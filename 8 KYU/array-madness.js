// *** Speed Code #2 - Array Madness *** //
// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b
// arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3
function arrayMadness(a, b) {
  const aSum = a.reduce((a, c) => { return a += Math.pow(c, 2) }, 0);
  const bSum = b.reduce((a, c) => { return a += Math.pow(c, 3) }, 0);
  return aSum > bSum ? true : false;
}