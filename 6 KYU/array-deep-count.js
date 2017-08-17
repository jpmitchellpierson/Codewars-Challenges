// *** Deep Count *** //
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