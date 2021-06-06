function sumFibs(num) {
  let arr = [1,1]
  let sum = 0
  for(let i = 1;arr[i] + arr[i-1] <= num;i++){
    arr.push(arr[i] + arr[i-1])
  }
  arr.forEach(number =>{
    if(number % 2 === 1){
      sum += number
    }
  })
  return sum
}

sumFibs(4);
