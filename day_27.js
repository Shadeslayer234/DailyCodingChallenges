function firstNonConsecutive (arr) {
  console.log(arr)
  for(let i = 0; i < arr.length;i++){
    if(!(arr[i]+1 == arr[i+1]) && i+1 < arr.length){
      return arr[i+1]
    }
  }
  return null
}
