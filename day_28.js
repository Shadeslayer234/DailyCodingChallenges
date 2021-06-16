function evenLast(numbers) {
  // Good luck
  let total = 0
  if(numbers.length > 0){
    numbers.forEach((number,index) => {
    if(index % 2 === 0){
      total += number
    }
  })
  return total * numbers[numbers.length-1]
  }
  else{
    return 0
  }
}
