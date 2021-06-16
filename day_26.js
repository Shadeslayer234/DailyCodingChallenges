function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  let ones = Math.floor((change/1))
  let cents = (change - ones).toFixed(2)
  let obj = {
    status:'OPEN',
    change:[]
  }

  let cidCopy = [["PENNY", 0.00], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]

  let total = cid[0][1] + cid[1][1] + cid[2][1] + cid[3][1] + cid[4][1] + cid[5][1] +  cid[6][1] + cid[7][1] + cid[8][1]

  let i = 1
  if(ones >= 100){
    if(ones > cid[8][1]){
      ones = ones - cid[8][1]
      obj.change.push(cid[8])
    }
    else{
      let hundred = 100
      while(ones >= hundred){
        i++
        hundred = 100 * i
      }
      hundred = 100 * (i - 1)
      ones = ones - hundred
      obj.change.push([`ONE HUNDRED`,hundred])
    }
  }

  if(ones >= 20){
    if(ones > cid[7][1]){
      ones = ones - cid[7][1]
      obj.change.push(cid[7])
    }
    else{
      let twenty = 20
      i = 1
      while(ones >= twenty){
        i++
        twenty = 20 * i
      }
      twenty = 20 * (i - 1)
      ones = ones - twenty
      obj.change.push([`TWENTY`,twenty])
    }
  }


  if(ones >= 10){
    if(ones > cid[6][1]){
      ones = ones - cid[6][1]
      obj.change.push(cid[6])
    }
    else{
      let ten = 10
      i = 1
      while(ones >= ten){
        i++
        ten = 10 * i
      }
      ten = 10 * (i - 1)
      ones = ones - ten
      obj.change.push([`TEN`,ten])
    }
  }

  if(ones >= 5){
    if(ones > cid[5][1]){
      ones = ones - cid[5][1]
      obj.change.push(cid[5])
    }
    else{
      let five = 5
      i = 1
      while(ones >= five){
        i++
        five = 5 * i
      }
      five = 5 * (i - 1)
      ones = ones - five
      obj.change.push([`FIVE`,five])
    }
  }
  // ones -= ones

  if(ones >= 1){
    if(ones > cid[4][1]){
      ones = ones - cid[4][1]
      obj.change.push(cid[4])
    }
    else{
      let one = 1
      i = 1
      while(ones >= one){
        i++
        one = 1 * i
      }
      one = 1 * (i - 1)
      ones = ones - one
      obj.change.push([`ONE`,one])
    }
  }

  if(cents >= 0.25){
    if(cents > cid[3][1]){
      cents = (cents - cid[3][1]).toFixed(2)
      obj.change.push(cid[3])
    }
    else{
      let quarter = 0.25
      i = 1
      while(cents >= quarter){
        i++
        quarter = 0.25 * i
      }
      quarter = 0.25 * (i - 1)
      cents = (cents - quarter).toFixed(2)
      obj.change.push([`QUARTER`,quarter])
    }
  }

  if(cents >= 0.1){
    if(cents > cid[2][1]){
      cents = (cents - cid[2][1]).toFixed(2)
      obj.change.push(cid[2])
    }
    else{
      let dime = 0.1
      i = 1
      while(cents >= dime){
        i++
        dime = 0.1 * i
      }
      dime = 0.1 * (i - 1)
      cents = (cents - dime).toFixed(2)
      obj.change.push([`DIME`,dime])
    }
  }

  if(cents >= 0.05){
    if(cents > cid[1][1]){
      cents = (cents - cid[1][1]).toFixed(2)
      obj.change.push(cid[1])
    }
    else{
      let nickel = 0.05
      i = 1
      while(cents >= nickel){
        i++
        nickel = 0.05 * i
      }
      nickel = 0.05 * (i - 1)
      cents = (cents - nickel).toFixed(2)
      obj.change.push([`NICKLE`,nickle])
    }
  }

  if(cents >= 0.01){
    if(cents > cid[0][1]){
      cents = (cents - cid[0][1]).toFixed(2)
      obj.change.push(cid[0])
    }
    else{
      let penny = 0.01
      i = 1
      while(cents >= penny){
        i++
        penny = 0.01 * i
      }
      penny = 0.01 * (i - 1)
      cents = (cents - penny).toFixed(2)
      obj.change.push([`PENNY`,penny])
    }
  }

if(cents != 0.00){
  obj.status = 'INSUFFICIENT_FUNDS'
  obj.change = []
}

if(change === total) {
  obj.status = 'CLOSED'
  let newArr = []
  for(let i = 0;i < obj.change.length; i++){
    newArr.unshift(obj.change[i])
  }
  for(let i = obj.change.length;i < 9; i++){
    newArr.push(cidCopy[i])
  }
  obj.change = newArr
}
  return obj;
}

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
