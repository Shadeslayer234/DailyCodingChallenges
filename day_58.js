// String incrementer
function incrementString (strng) {
  // return incrementedString
  let letters = strng.split('')
  let lastLetter = Number(strng[strng.length-1])
  let res;

  if(!isNaN(lastLetter)){
    let regex = /[0123456789]/g
    let reg = strng.match(regex).join('')
    let regLen = reg.length
    let num = String(parseInt(reg) + 1)
    for(let i = 0; i < regLen; i++){
      if(num.length < regLen){
        num = 0 + num
      }
    }
    if(strng.length >  num.length){
    let secondRegex = /[a-zA-Z]+/g
    let secondReg = strng.match(secondRegex)
    res = secondReg[0] + num
    }
    else {
      return num
    }

    }

    else{
      letters.push(1)
      res = letters.join('')

    }
  return res

}
