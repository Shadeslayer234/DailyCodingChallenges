// Exclamation marks series #17: Put the exclamation marks and question marks to the balance, Are they balanced
function balance(left,right){
  let leftTotal = 0
  let rightTotal = 0
  for(let i=0; left.length > i; i++){
    if(left[i] ==='!'){
      leftTotal += 2
    }
    else if(left[i] === '?'){
      leftTotal += 3
    }
  }

  for(let i=0; right.length > i; i++){
    if(right[i] ==='!'){
      rightTotal += 2
    }
    else if(right[i] === '?'){
      rightTotal += 3
    }
  }
  if(rightTotal === leftTotal){
    return 'Balance'
  }
  if(leftTotal > rightTotal){
    return 'Left'
  }
  else{
    return 'Right'
  }
}
