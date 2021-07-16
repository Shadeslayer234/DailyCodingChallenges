// Decipher this!
function decipherThis(str) {
//have fun!
  let string = str.split(' ')
  let newString = []
  let words = []
  for(let i=0; i<string.length;i++){
    let word = string[i]
    let regex = /\d+/g
    let code = word.match(regex)
    let character = String.fromCharCode(code)
    newString.push(word.replace(/(\d+)/g,character))
  }

  console.log(newString)
  for(let i=0; i<string.length;i++){
    let first = newString[i][1]
    let last =  newString[i][newString[i].length-1]
    let one = newString[i].split('')
    one[1] = last
    one[one.length-1] = first
    let second = one.join('')
    words.push(one.join(''))
}
 return words.join(' ')

}
