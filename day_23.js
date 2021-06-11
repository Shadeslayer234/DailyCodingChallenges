function palindrome(str) {
  let sentence = str.split(/\W/).join('').toLowerCase()
  sentence = sentence.split('_').join('')
  let secondSen = []
  for(let i = 0;i < sentence.length; i++){
    secondSen.unshift(sentence[i])
  }
  secondSen = secondSen.join('')
  if(sentence == secondSen){
    return true;
  }
  return false
}



palindrome("eye")
