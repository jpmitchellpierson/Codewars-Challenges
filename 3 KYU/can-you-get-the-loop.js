// You are given a node that is the beginning of a linked list. This list always contains a tail and a loop.
// Your objective is to determine the length of the loop.
// 1 -> 2 -> 3 -> 4 -> 5
//           ^         |
//           |         v
//           8 <- 7 <- 6
// above loop length === 6
// Hint: Use the `getNext' method or 'next' property to get the following node
function loop_size(node){
  let x = node, y = node.next, size = 0;
  
  while (x !== y) {
    x = x.next;
    y = y.next.next;
  }
  size++;
  x = x.next;
  
  while (x !== y) {
    size++;
    x = x.next;
  }
  return size;
}