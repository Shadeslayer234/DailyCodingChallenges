// Small enough? - Beginner

function smallEnough(a, limit){
 let newArr = a.sort((a,b) => a-b)
 if(newArr[newArr.length-1] > limit){
   return false
 }
  else return true
}
