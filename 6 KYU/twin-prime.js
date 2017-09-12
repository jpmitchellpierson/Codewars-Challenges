// *** Twin Prime *** //
// A twin prime is a prime number that differs from another prime number by 2. Write a function named isTwinPrime which takes an integer parameter and returns true if it is a twin prime, else false
// given 5, which is prime
// 5+2=7 which is prime 
// 5-2=3 which is prime
// Hence , 5 has two prime twins and its a Twin Prime.
// ---------------------------------------------------
// given 7, which is prime
// 7-2=5 which is prime
// 7+2=9 which is not prime
// Hence, 7 has one prime twin, and its a Twin Prime.
// ----------------------------------------------------
// given 9, which is not prime 
// Hence, 9 is not a Twin Prime
function isTwinPrime(n){
  return (isPrime(n - 2) || isPrime(n + 2)) && isPrime(n) ? true : false;
}

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}