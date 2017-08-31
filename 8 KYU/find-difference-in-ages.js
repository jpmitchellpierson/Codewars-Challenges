// *** Find Difference In Ages *** //
// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array with [youngest age, oldest age, difference between the youngest and oldest age].
function differenceInAges(ages){
  let newArr = [], max = Math.max.apply( Math, ages ), min = Math.min.apply( Math, ages ), dif = max - min, i = 0;
  newArr.push(min);
  newArr.push(max);
  newArr.push(dif);
  return newArr;
}