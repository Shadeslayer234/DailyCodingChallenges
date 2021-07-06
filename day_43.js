//Create Phone Number
function createPhoneNumber(numbers){
  let first_three = ''
  let second_three = ''
  let last_digits = ''
 for(let index = 0; index < numbers.length; index++) {
    if(index < 3){
      first_three += numbers[index]
    }
    else if(index < 6){
      second_three += numbers[index]
    }
    else{
      last_digits += numbers[index]
    }
  }
  return `(${first_three}) ${second_three}-${last_digits}`
}
