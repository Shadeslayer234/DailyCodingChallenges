//Square Every Digit
function squareDigits(num){
  //may the code be with you
  let numbs = num.toString().split('')
  let arr = []
  numbs.forEach(item =>{
    arr.push(item**2)
  })
  return Number(arr.join(''))
}
