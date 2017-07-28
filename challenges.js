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


// *** String Average 6 KYU *** //
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

