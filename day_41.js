//Simple Pig Latin
function pigIt(str){
  //Code here
  let newAr = (str.split(' '))
  let regex = /[a-zA-Z]/
  for(let i= 0; i < newAr.length; i++){
    let firstLetter = newAr[i].charAt(0)
    newAr[i] = newAr[i].slice(1)
    newAr[i] += firstLetter
    if(regex.test(newAr[i].charAt(newAr[i].length-1))) newAr[i] += 'ay'
  }
  return newAr.join(' ')

}
