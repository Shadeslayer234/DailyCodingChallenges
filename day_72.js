// Numbers to Letters

const switcher = x => {
  const reverseAlpha = ['','z','y','x','w','v','u','t','s','r','q','p','o','n','m','l','k','j','i','h','g','f','e','d','c','b','a','!','?',' ']
  let newString = ''
  x.forEach(element => {
    newString += reverseAlpha[Number(element)]
  })
  return newString
}
