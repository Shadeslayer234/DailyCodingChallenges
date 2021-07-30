// Fake Binary

function fakeBin(x){
  let newArr = []
  x.split('').forEach(element =>{
    if(element < 5) newArr.push(0)
    else newArr.push(1)
  })
  return newArr.join('')
}
