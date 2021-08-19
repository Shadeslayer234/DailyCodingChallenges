// pick a set of first elements

function first(arr, n) {
  // return arr;
  if(n == 0) return []
  if(arguments.length > 1) return arr.slice(0,n)
  else return arr.slice(0,1)
}
