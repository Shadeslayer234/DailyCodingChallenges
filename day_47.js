// Isograms
function isIsogram(str) {
  // your code here
  let word = str.toLowerCase().split('')
  let nonre = []
  let rep = []
  if(str === '') return true
  word.forEach((item,index)=>{
    if( word.lastIndexOf(item) === index && rep.indexOf(item) === -1) {
      nonre.push(item)
    }
    else{
      rep.push(item)
    }
  })
  if(rep.length > 0){
    console.log(rep)
    return false
  }
  else {
  return true
}
  }
