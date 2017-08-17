// *** Find The Unique Number *** //
// There is an array with some numbers 
// All numbers are equal except for one
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains more than 3 numbers.
function findUniq(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]]++;
    }
  }

  let keys = Object.keys(obj);
  for (let k = 0; k < keys.length; k++) {
    if (obj[keys[k]] === 1) {
      return Number(keys[k]);
    }
  }
}