// The First Non Repeated Character In A String
function firstNonRepeated(s) {
  // your code here

  let word = s.split('')
  let nonre = []
  let rep = []
  word.forEach((item,index)=>{
    if( word.lastIndexOf(item) === index && rep.indexOf(item) === -1) {
      nonre.push(item)
    }
    else{
      rep.push(item)
    }
  })
  if(nonre.length === 0){
    return null
  }
  else{
  return nonre[0]
}

}
