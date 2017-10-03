// *** Largest 5 Digit Number In A Series *** //
// In the following 10 digit number: 1234567890
// 67890 is the greatest sequence of 5 digits.
// Complete the solution so that it returns the largest five digit number found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.
function solution(digits){
  let arr = digits.split('');
  let slice = arr.slice(arr.length - 5, arr.length);

  for (let i = arr.length - 6; i > 0; i--) {
    let newSlice = arr.slice(i, i + 5);
    if (Number(newSlice.join('')) > Number(slice.join(''))) {
      slice = newSlice;
    } 
  }
  return Number(slice.join(''));
}