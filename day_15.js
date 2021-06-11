function smallestCommons(arr) {
  let sorted = arr.sort((a,b)=> a-b)
  let first = sorted[0]
  let last = sorted[1]
  let newArr = Array(last - first + 1).fill().map((d, id) => first + id)
  let checker = false
  let n = last * last-1
  checker = newArr.every(currentValue => n % currentValue === 0)
  while(checker === false){
    n++
    checker = newArr.every(currentValue => n % currentValue === 0)
  }
  return n;
}


smallestCommons([1,5]);
