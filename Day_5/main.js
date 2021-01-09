function oddNumbers(arr){
  const modArr = [];
  arr.forEach((num, i) => {
    if(num%2 != 0){
      modArr.push(num);
    }
  });
  console.log(modArr)
}
