function fearNotLetter(str) {
  const alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  let first = alpha.indexOf(str[0])
  let last = alpha.indexOf(str[str.length-1])
  let range = alpha.slice(first,last+1)
  let missing = []
  range.forEach((letter,index)=>{
    if(letter != str[index]){
      missing.push(letter)
    }
  })
  return missing[0];
}

fearNotLetter("abce");
