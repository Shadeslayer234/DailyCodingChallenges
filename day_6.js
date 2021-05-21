function rot13(str) {
  let arr = str.toLowerCase().split('')
  let alpha = 'abcdefghijklmnopqrstuvwxyz'.split('')
  let sentence = []
  arr.forEach((letter,index) => {
    let ind = alpha.indexOf(letter)-13
    if(ind < 0 && ind != -14){
      sentence.push(alpha.slice(ind)[0])
    }
    else if(ind == -14) sentence.push(arr[index])
    else sentence.push(alpha[ind])
  })
  return sentence.join('').toUpperCase();
}

rot13("SERR PBQR PNZC");
