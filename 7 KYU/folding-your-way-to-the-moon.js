// *** Fold Your Way To The Moon *** //
// You know that a piece of paper has a thickness of 0.0001m 
// Given distance in units of meters, 
// calculate how many times you have to fold the paper 
// to make the paper reach this distance.
function foldTo(distance) {
  let thickness = 0.0001;
  let folds = 0;
  
  if (distance < 0 || distance === 0) return null;
  while (thickness < distance) {
    thickness *= 2;
    folds++;
  }
  return folds;
}