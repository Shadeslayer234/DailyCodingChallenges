// Binary to Text (ASCII) Conversion

const binaryToString = binary => {
  if(binary.length > 0){
  let newChars = []
  let chars = binary.match(/.{1,8}/g)

  chars.forEach(element =>{
   newChars.push(String.fromCharCode(parseInt(element , 2)))
 })
    return newChars.join('')}

  else return ''

}
