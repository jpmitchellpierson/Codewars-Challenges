// *** Pig Latin *** //
// Move the first letter of each word to the end of it, 
// then add 'ay' to the end of the word.
function pigIt(str){
  let a = str.split(' ');
  let newStr = '';
  
  return a.reduce((acc, prev) => {
    let pig = toPig(prev);
    if (a.indexOf(prev) === a.length - 1) {
      acc += pig;
    } else {
      acc += pig + ' ';
    }
    return acc;
  }, '');
}

function toPig(str) {
  return str.slice(1) + str[0] + 'ay';
}