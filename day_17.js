function spinalCase(str) {
  let newStr = str.split(/\W/).join('-')
  let secondStr = newStr.split(/_/).join('-')
  let newArr = secondStr.split('')
  let secondArr = []
  newArr.forEach((letter,index)=> {
    if(letter == letter.toUpperCase() && index != 0 && letter != '-' && newArr[index-1] != '-'){
      secondArr.push(`-${letter}`)
    }
    else secondArr.push(letter)
  })
  return secondArr.join('').toLowerCase();
}

spinalCase('This Is Spinal Tap');
