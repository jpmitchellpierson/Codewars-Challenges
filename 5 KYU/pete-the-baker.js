// *** Pete, The Baker *** //
// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer)
// For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0
// cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); -> returns 2
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); -> returns 0
function cakes(recipe, available) {
  if (!checkForIngredients(recipe, available)) return 0;
  return countCakes(recipe,available);
}

function checkForIngredients(recipe, available) {
  let recKeys = Object.keys(recipe);
  let availKeys = Object.keys(available);
  
  for (let i = 0; i < recKeys.length; i++) {
    let el = recKeys[i];
    if (!availKeys.includes(el) || recipe[el] > available[el] || recipe[el] === 0) {
      return false;
    }
  }
  return true;
}

function countCakes(recipe, available) {
  let recKeys = Object.keys(recipe);
  
  return recKeys.reduce((a, c) => {
    let numOfCakes = Math.floor(available[c] / recipe[c]);
    if (numOfCakes < a) {
      a = numOfCakes;
    }
    return a;
  }, Infinity);
}