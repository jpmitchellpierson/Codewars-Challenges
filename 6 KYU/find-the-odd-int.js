// *** Find The Odd Int *** //
// Given an array, find the int that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.
function findOdd(arr) {
  let obj = arr.reduce((a, c) => { !a[c] ? a[c] = 1 : a[c]++; return a }, {});
  let keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    if (obj[keys[i]] % 2 !== 0) return Number(keys[i]);
  }
}