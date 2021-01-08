const namesList = [];

function addNewPerson(){
  const newName = prompt('Please enter your name');
  namesList.push(newName)
  let position = namesList.indexOf(newName)+1
  console.log(position)
}
