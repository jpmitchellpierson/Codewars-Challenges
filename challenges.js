// *** TRIBONACCI SEQUENCE 6 KYU *** //
// signature will be an array of 3 integers
// create a fibonacci function that given a signature array/list, 
// returns the first n elements - signature included of the so seeded sequence.
// n will always be a non-negative number; 
// if n==0, then return an empty array and be ready for 
// anything else which is not clearly specified
function tribonacci(signature,n){
  let start = 0;
  let end = 3;
  if (n === 0) return [];
  if (n < signature.length) return signature.slice(0, n);
  
  function add(signature, n) {
    let slice = signature.slice(start, end);
    if (signature.length === n) {
      return signature;
    } else {
      let next = slice.reduce((sum, val) => {
        return sum + val;
      }, 0);
      signature.push(next);
      start++;
      end++;
    }
    add(signature, n);
  }
  add(signature, n);
  return signature;
}


// *** DEEP COUNT 6 KYU *** //
// Array.length will give you the number of top-level elements in an array.
// Your task is to create a function deepCount that 
// returns the number of ALL elements within an array, 
// including any within inner-level arrays.

// For example:
// deepCount([1, 2, 3]);  --> 3
// deepCount(["x", "y", ["z"]]);  --> 4
// deepCount([1, 2, [3, 4, [5]]]); --> 7 

function deepCount(a){
  let total = 0;
  
  function countElements(array) {
    total += array.length;
    console.log(total)
    
    for (let i = 0; i < array.length; i++) {
      if (array[i].constructor === Array) {
        countElements(array[i]);
      } 
    }
  }
  
  countElements(a);
  return total;
}


// *** STRING AVERAGE 6 KYU *** //
// You are given a string of numbers between 0-9. Find the average of these numbers and return it as a floored whole number (ie: no decimal places) written out as a string. Eg:

// "zero nine five two" -> "four"

// If the string is empty or includes a number greater than 9, return "n/a"
function averageString(str) {
  let avg;
  let sum = 0;
  let arr = str.split(' ');
  let strToNum = {'zero':0, 'one':1, 'two':2, 'three':3, 'four':4, 'five':5, 'six':6, 'seven':7, 'eight':8, 'nine':9};
  let numToStr = { 0:'zero', 1:'one', 2:'two', 3:'three', 4:'four', 5:'five', 6:'six', 7:'seven', 8:'eight', 9:'nine'};
  
  //arr = ['zero', 'ten', 'five', 'two']
  for(let i = 0; i < arr.length; i++) {
    if (str === '' || !strToNum.hasOwnProperty(arr[i])) return 'n/a';
    if (strToNum.hasOwnProperty(arr[i])) {
      sum += strToNum[arr[i]];
    }
  }

  avg = Math.floor(sum/arr.length);
  return numToStr[avg];
}

// *** ROTATE ARRAY 6 KYU *** //
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


// *** IS A PRIME NUMBER? 6 KYU *** //
// Define a function isPrime that takes one integer argument and 
// returns true or false depending on if the integer is a prime.
// Per Wikipedia, a prime number (or a prime) is 
// a natural number greater than 1 that has no positive divisors 
// other than 1 and itself.
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}



// *** DUPLICATE COUNT 6 KYU *** //
// Write a function that will return the count of 
// distinct case-insensitive alphabetic characters and 
// numeric digits that occur more than once in the input string. 
// The input string can be assumed to contain 
// only alphabets (both uppercase and lowercase) and numeric digits.
// 'abcde' --> 0 (no duplciates)
// 'aabBcde' --> 2 (a & b)
// 'Indivisibilities' --> 2 (i & s)
function duplicateCount(text){
  let i, k;
  let obj = {};
  let result = 0;
  let str = text.toLowerCase();
  
  for (i = 0; i < str.length; i++) {
    if (!obj[str[i]]) {
      obj[str[i]] = 1;
    } else {
      obj[str[i]]++;
    }
  }
  
  let keys = Object.keys(obj);
  for (k = 0; k < keys.length; k++) {
    if (obj[keys[k]] > 1) {
      result++;
    }
  }
  
  return result;
}


// *** FIND THE UNIQUE NUMBER 6 KYU *** //
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


// *** Band Name Generator 7 KYU *** //
// My friend wants a new band name for her band. 
// She like bands that use the formula: 'The' + a noun with first letter capitalized.
// dolphin -> The Dolphin

// However, when a noun STARTS and ENDS with the same letter, 
// she likes to repeat the noun twice and connect them together 
// with the first and last letter, 
//combined into one word like so (WITHOUT a 'The' in front):
// alaska -> Alaskalaska
// europe -> Europeurope

// Write a function that takes in a noun as a string, 
// and returns her preferred band name written as a string
function bandNameGenerator(str) {
  let s = str.charAt(0).toUpperCase() + str.slice(1);
  return str[0] === str[str.length - 1] ? s + str.slice(1) : 'The ' + s;
}

// *** Odd Or Even 7 KYU *** //
// Given an array of numbers, determine whether the sum of all of the numbers is odd or even.
// Give your answer in string format as 'odd' or 'even'.
// If the input array is empty consider it as: [0] (array with a zero).
// oddOrEven([0]) returns "even"
// oddOrEven([2, 5, 34, 6]) returns "odd"
// oddOrEven([0, -1, -5]) returns "even"
function oddOrEven(array) {
  return array.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
}