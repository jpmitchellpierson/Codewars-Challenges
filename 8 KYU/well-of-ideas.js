// *** Well of Ideas *** //
// Check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.
// well([bad', 'bad', bad']) -> 'Fail!'
// well(['good', 'bad', 'bad', 'good', 'bad']) -> 'Publish!'
// well(['good', 'bad', 'bad', 'good', 'bad', 'bad', 'good']) -> 'I smell as series!'
function well(x){
  let numGoods = 0, i = 0;
  if (!x.includes('good')) return 'Fail!';
  for (i; i < x.length; i++) {
    if (x[i] === 'good') {
      numGoods++;
    }
  }
  return numGoods < 3 ? 'Publish!' : 'I smell a series!';
}