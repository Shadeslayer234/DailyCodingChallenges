// Break camelCase
// complete the function
function solution(string) {
    let str = string.split('')
    let newStr = ''
    str.forEach((item,index) => {
      if(item === item.toUpperCase()){
        newStr += ` ${item}`
      }
      else{
        newStr += item
      }
    })
  return newStr
}
