// *** Roman Numerals Encoder *** //
// Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.
// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.
// solution(1000); // should return 'M'
// I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000
// Remember that there can't be more than 3 identical symbols in a row.
function solution(n){
  const roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  const arabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let i = 0;
  let res = '';
  
  return arabic.reduce((a, c) => {
    let i = arabic.indexOf(c);
    while (n >= c) {
      n -= c;
      a += roman[i];
    }
    return a;
  }, '');
}