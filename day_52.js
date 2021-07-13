// Primorial Of a Number
function numPrimorial(n){
  //your code here
  let primes = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101]
  let total = 1
  for(let i=0; i < n; i++){
    total *= primes[i]
  }
  return total

}
