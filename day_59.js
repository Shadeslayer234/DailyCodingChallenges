// Encrypt this!

var encryptThis = function(text) {
  // Implement me! :)
  const str = text.split(' ')
  let code
  let newWord = []

  str.forEach((word,index) => {
    let first = []
    let letters = word.split('')
    code = word.charCodeAt(0)
    first.push(code)
    if(letters.length > 1){
      let secondLetter = letters[1]
      let lastLetter = letters[letters.length-1]
      let start = 2
      let end = letters.length-3
      let midLetters = letters.splice(start,end)
      first.push(lastLetter)
      if(midLetters.length != 0){
        first.push(midLetters.join(''))
      }
      if(end != -1){
        first.push(secondLetter)
      }
    }
    newWord.push(first.join(''))
  })
  let sentence = newWord.join(' ')
  return sentence
}
