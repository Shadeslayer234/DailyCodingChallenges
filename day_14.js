function myReplace(str, before, after) {
  let arr = str.split(' ')
  for(let i=0; i< arr.length;i++){
    if(arr[i] == before){
      console.log(arr[i])
      if(arr[i].split('')[0] != arr[i].split('')[0].toUpperCase()){
        arr[i] = after.toLowerCase()
        return arr.join(' ');
      }
      else{
        let letters = after.split('')
        letters[0] = letters[0].toUpperCase()
        arr[i] = letters.join('')
        return arr.join(' ')
      }

    }
  }



}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
