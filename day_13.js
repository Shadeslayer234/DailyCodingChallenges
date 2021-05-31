function translatePigLatin(str) {
  let word = str.split('')
  const regex = /[aeiou]/ig
  let vowelIndex = word.findIndex(element => regex.test(element))
  console.log(vowelIndex)
  if(vowelIndex > 0){
    let consta = word.splice(0,vowelIndex).join('')
    console.log(word.join('')+consta+'ay')
    return word.join('')+consta+'ay'
  }
  else if(vowelIndex == -1){
    return str + 'ay'
  }
  else{
    return str +'way'
  }


}

translatePigLatin("consonant");
