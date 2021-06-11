function uniteUnique(arr) {
  let newArr = []
  let unique = []
  for(let i = 0; i< arguments.length;i++){
    for(let j = 0; j < arguments[i].length;j++){
      newArr.push(arguments[i][j])
    }
  }
 newArr.forEach((letter,index)=>{
   if(unique.indexOf(letter) == -1){
     unique.push(letter)
   }
 })

  return unique;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
