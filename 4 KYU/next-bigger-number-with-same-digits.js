// *** Next Bigger Number With Same Digits *** //
// You have to create a function that takes a positive integer number and returns the next bigger number formed by the same digits:
// nextBigger(12)==21
// nextBigger(513)==531
// nextBigger(2017)==2071
// If no bigger number can be composed using those digits, return -1:
// nextBigger(9)==-1
// nextBigger(111)==-1
// nextBigger(531)==-1
function nextBigger(n){
  let count = n + 1;
  if (n < 12) return -1;
  
  while (n.toString().length === count.toString().length) {
    let res = checkSameDigits(n, count);
    if (res) {
      return count;
    }
    count++;
  }
  return -1;
}

function checkSameDigits(num1, num2) {
  return num1.toString().split('').sort().join() === num2.toString().split('').sort().join();
}