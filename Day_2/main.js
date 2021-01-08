function winnerChecker(){
  const num = Number(prompt('Please enter a number'));
  const word = prompt('Please enter a word');

  if((num * word.length) > 100 ){
    alert('Winner');
  }
  else{
    alert('No Chicken Dinner')
  }
}
