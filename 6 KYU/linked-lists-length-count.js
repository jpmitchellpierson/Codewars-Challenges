
// *** Linked Lists - Length & Count *** //
// Implement Length() to count the number of nodes in a linked list
// length(null) === 0
// length(1 -> 2 -> 3 -> null) === 3
// Implement Count() to count the occurrences of an integer in a linked list
// count(null, 1) === 0
// count(1 -> 2 -> 3 -> null, 1) === 1
// count(1 -> 1 -> 1 -> 2 -> 2 -> 2 -> 2 -> 3 -> 3 -> null, 2) === 4
function Node(data) {
  this.data = data;
  this.next = null;
}

function length(head) {
  let length = 0;
  if (!head) return length;
  for (let i = head; i; i = i.next) {
    length += 1;
  }
  return length;
}

function count(head, data) {
  let count = 0;
  for (let i = head; i; i = i.next) {
    if (i.data === data) {
      count += 1;
    }
  }
  return count;
}