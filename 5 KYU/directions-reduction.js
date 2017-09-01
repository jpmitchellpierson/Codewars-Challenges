// *** Directions Reduction *** //
// The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too. Going to one direction and coming back the opposite direction is a needless effort
// The directions given to the man are, for example, the following: ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]
// You can immediatly see that going "NORTH" and then "SOUTH" is not reasonable, better stay to the same place! So the task is to give to the man a simplified version of the plan. A better plan in this case is simply: ["West"]
// Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side)
// NOTE: Not all paths can be made simpler. The path ["NORTH", "WEST", "SOUTH", "EAST"] is not reducible. "NORTH" and "WEST", "WEST" and "SOUTH", "SOUTH" and "EAST" are not directly opposite of each other and can't become such. Hence the result path is itself : ["NORTH", "WEST", "SOUTH", "EAST"].
function dirReduc(arr){
  let stack = [];
  let pairs = { 
    NORTH: 'SOUTH',
    SOUTH: 'NORTH',
    WEST: 'EAST',
    EAST: 'WEST'
  };

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === pairs[stack[stack.length - 1]]) {
      stack.pop();
    } else {
      stack.push(arr[i]);
    }
  }
  return stack;
}