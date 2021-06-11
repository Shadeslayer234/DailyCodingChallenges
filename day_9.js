function truthCheck(collection, pre) {
  let newObj = []
  for(let i = 0; i < collection.length;i++){
    if(collection[i].hasOwnProperty(pre) === false || collection[i][pre] === null || collection[i][pre] === undefined || collection[i][pre] === false || collection[i][pre] === 0 || collection[i][pre] === '' || Number.isNaN(collection[i][pre])){
      return false
    }
    else{
      // newObj.push(collection[i].pre)
      console.log(collection[i][pre])
    }
  }
  return true
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
