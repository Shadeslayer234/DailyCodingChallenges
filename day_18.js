function steamrollArray(arr,newArr = []) {
  for(let i = 0;  i < arr.length;i++){
    if(Array.isArray(arr[i])){
      steamrollArray(arr[i],newArr)
    }
    else{
      newArr.push(arr[i])
    }
  }
  console.log(newArr)
  return newArr
}

steamrollArray([1, [2], [3, [[4]]]]);
