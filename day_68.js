// Basic Math (Add or Subtract)

function calculate(str) {
  let reg3 = /\d/g
  let signs = []
  let total
  let number =''
  let num = []
  let numbers = []
  const elements = str.split('')
  elements.forEach(element => {
    if(element.match(reg3)){
      num.push(element)
    }
    else if(element === 'p') num.push('+')
    else if(element === 'm') num.push('-')
  })

  num.forEach((item,index)=> {
    if(!isNaN(item)){
      number += item
      if(index == num.length-1){
        numbers.push(Number(number))
      }
    }
    else if(item == '+' || '-'){
      numbers.push(Number(number))
      number = ''
      signs.push(item)
    }
  })
  total = numbers[0]
  signs.forEach((item, index) => {
    if(item == '+'){
      total += Number(numbers[index+1])
      console.log(total)
    }
    else {
      total -= Number(numbers[index+1])
      console.log(total)
    }
  })
  return `${total}`
}
