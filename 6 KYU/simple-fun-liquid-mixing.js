// *** Simple Fun #227 Liquied Mixing *** //
// You are mixing different liquids of equal volume in a barrel. All the liquids have // different density, and after some time they rearrange themselves in such a way that // denser liquids are located lower in the barrel than those with lower density.
// You add liquids one by one, and wait a bit after each addition 
// until all the liquids in the barrel rearrange correctly.
// After each addition, you are interested in the density of the liquid that is floating right in the middle. If there are two middle liquids (i.e. the number of liquids is even), then you want to know their mean density. Let's call the value you are interested in the median density. Return an array of median densities after each addition.
// For densities = [10, 20, 8, 12, 6],
// the output should be [10, 15, 10, 11, 10].
function liquidMixing(densities) {
  let newArr = [], sum = 0, l = 1, currArr = [];
  
  newArr.push(densities[0]);
  currArr.push(densities[0]);
  
  for (let i = 1; i < densities.length; i++) {
    currArr.push(densities[i]);
    currArr.sort((a, b) => { return a - b } );
    console.log(currArr)
    if (currArr.length % 2 === 0) {
      sum = currArr[currArr.length/2] + currArr[currArr.length/2 - 1];
      newArr.push(sum/2);
    } else {
      newArr.push(currArr[Math.floor(currArr.length/2)]);
    }
  }
  return newArr;
}