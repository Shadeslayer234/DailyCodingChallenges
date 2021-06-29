//Sort the odd
const sortArray = (array) => {
  // Return a sorted array.
  let newAr = []
  let newArr = []
  let count = 0
  array.forEach((item) => {
    if(item % 2 === 1 || item % 2 === -1) newAr.push(item)
    newAr.sort((a, b) => a - b)
  })
   console.log(newAr)

  for(let i = 0;i < array.length; i++){
    if(array[i] % 2 ===1 || array[i] % 2 === -1){
      array[i] = newAr[count]
      count += 1
    }
  }
  return array
}
