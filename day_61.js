// Unique In Order

const uniqueInOrder=iterable =>{
  //your code here - remember iterable can be a string or an array
  if(iterable.length > 0){
  let newArr = [iterable[0]]
  for(let i=1; i < iterable.length; i++){
    if(iterable[i-1]  != iterable[i]){
      newArr.push(iterable[i])
    }
  }
  return newArr
  }
  else return []
}
