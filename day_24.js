function telephoneCheck(str) {
  let numbers = str.split(/\W/).join('').split('')
  let countryCode = []
  console.log(str.split('-')[0])
  if(str.split('-')[0].indexOf('(') != -1 && str.split('-').length === 1) return false
  if(str.split(' ')[0].length > 1 && str.split(' ')[0].length < 3) return false
  if(numbers.length < 10) return false
  if(str.indexOf('?') != -1) return false
  if(str.indexOf(')') != -1 && str.indexOf('(') === -1) return false
  else if (str.indexOf('(') != -1 && str.indexOf(')') === -1) return false
  else if(numbers.length > 10){
    for(let i = 0; i < numbers.length; i++){
      if( numbers.length - i > 10){
        countryCode.push(str[i])
      }
    }
    if(countryCode.join('') != '1') return false
  }

  console.log(numbers)
  console.log(countryCode)
  return true;
}

telephoneCheck("(6054756961)");
