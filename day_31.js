function findOdd(A) {
  //happy coding!
  let sorted = A.sort((a,b) => a-b)
  let newArr = []
  let countsArr = []
  let count = 0
  for(let i=0;i < sorted.length;i++){
    if(sorted[i] != sorted[i-1]){
      newArr.push(sorted[i])
      count = 1
      countsArr.push(count)
    }
    else{
      count += 1
      countsArr.pop()
      countsArr.push(count)         
    }
  }
  for(let j = 0; j < countsArr.length;j++){
    if(countsArr[j] % 2 != 0 ){
      const oddOne = countsArr.indexOf(countsArr[j])

      return newArr[oddOne]
    }
  }
}
