// Cat years, Dog years

var humanYearsCatYearsDogYears = function(humanYears) {
  // Your code here!
  let catYears  = 0
  let dogYears = 0
  if(humanYears > 2){
    catYears = 24 + ((humanYears-2)*4)
    dogYears = 24 + ((humanYears-2)*5)
  }
  else if(humanYears === 1)  {
    catYears = 15
    dogYears = 15
  }
  else if(humanYears === 2) {
     catYears = 24
     dogYears = 24
  }

  return [humanYears,catYears,dogYears];
}
