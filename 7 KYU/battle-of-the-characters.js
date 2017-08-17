// *** Battle of the Characters *** //
// Create a function that will accept 2 variables and return the one who's stronger.
// Each character have its own power: A = 1, B = 2, ... Y = 25, Z = 26
// Only capital chatacters can and will participate a battle.
// Only two groups to a fight.
// Group whose total power (A + B + C + ...) is bigger wins.
// If the powers are equal, it's a tie.
function battle(x, y) {
  if (findValue(x) === findValue(y)) return 'Tie!';
  return findValue(x) > findValue(y) ? x : y;
}

function findValue(str) {
  let sum = 0;
  let letters = {'A': 1,'B':2,'C':3,'D':4,'E':5,'F':6,'G':7,'H':8,'I':9,'J':10,'K':11,'L':12,'M':13,'N':14,'O':15,'P':16,'Q':17,'R':18,'S':19,'T':20,'U':21,'V':22,'W':23,'X':24,'Y':25,'Z':26 };
  
  for (let i = 0; i < str.length; i++) {
    sum += letters[str[i]];
  }
  return sum;
}