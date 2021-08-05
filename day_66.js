// shorter concat [reverse longer]

const shorter_reverse_longer = (a,b) => {
  if(a.length > 0 || b.length > 0){
  if(a.length >= b.length){
    return `${b}${a.split('').reverse().join('')}${b}`
  }else {
     return `${a}${b.split('').reverse().join('')}${a}`
  }
  }
  else{
    return ""
  }

}
