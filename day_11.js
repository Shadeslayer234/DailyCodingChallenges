function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  let newArr = []
  const orbperiod = obj => {
    return {name:obj.name,orbitalPeriod :  Math.round(2* Math.PI * Math.sqrt(Math.pow(obj.avgAlt + earthRadius,3)/GM))}
    }
    arr.forEach(obj => { newArr.push(orbperiod(obj))})
    console.log(newArr)
    return newArr
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
