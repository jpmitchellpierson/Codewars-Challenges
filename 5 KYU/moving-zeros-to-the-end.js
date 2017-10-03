// *** Moving Zeros To The End *** //
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements
// moveZeros([false,1,0,1,2,0,1,3,"a"]) --> [false,1,1,2,1,3,"a",0,0]
function moveZeros(arr) {
  let newArr = arr.reduce((a, c) => { 
    if (c !== 0) { 
    a.push(c) 
    } else { 
    a.unshift(c) 
    } 
    return a 
  }, []);
  for (let k = 0; k < newArr.length; k++) {
    if (newArr[k] !== 0) {
      let res = newArr.splice(0, k);
      return newArr.concat(res);
    }
  }
}