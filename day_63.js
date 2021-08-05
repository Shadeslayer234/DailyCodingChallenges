// Tribonacci Sequence

function tribonacci(signature,n){
  //your code here


  if(n > 0){
    for(let i = 0; i < n;i++){
     signature.push( signature[signature.length-1] + signature[signature.length-2]  + signature[signature.length-3])
  }
  return signature.slice(0,n)
  }
  else{
    return []
  }


}
