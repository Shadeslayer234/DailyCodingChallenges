// Jaden Casing Strings
String.prototype.toJadenCase = function () {
  const str = this.valueOf().split(' ')
  let newArr = []
  for(let i = 0; i < str.length; i++){
    newArr.push(str[i][0].toUpperCase() + str[i].split('').splice(1,str[i].length-1).join(''))
  }

  return newArr.join(' ')
};
