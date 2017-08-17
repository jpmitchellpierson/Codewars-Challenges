// *** Square Digits *** //
// Welcome. In this kata, you are asked to square every digit of a number.
// For example, if we run 9119 through the function, 811181 will come out.
// Note: The function accepts an integer and returns an integer
function squareDigits(num){
  let res, i;
  let sqrdArr = [];
  let a = num.toString().split('');
  
  for (i = 0; i < a.length; i++) {
    let sqrd = (a[i]*a[i]).toString();
    sqrdArr.push(sqrd);
  }
  return Number(sqrdArr.join(''))
}