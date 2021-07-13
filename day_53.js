// IPv4 to int32
function ipToInt32(ip){
  //...
  let ipv = ip.split('.')
  let firstBit = parseInt(ipv[0]).toString(2)
  let secondBit  = parseInt(ipv[1]).toString(2)
  let thirdBit = parseInt(ipv[2]).toString(2)
  let fourthBit = parseInt(ipv[3]).toString(2)
  let newIp = [firstBit,secondBit,thirdBit,fourthBit]
//   console.log(newIp)
 for(let i = 0; i < 4;i++){
   if(newIp[i].length < 8){
     for(let j = newIp[i].length; j < 8; j++){
       newIp[i]= '0' + newIp[i]
     }
   }

 }
  return parseInt(newIp[0] + newIp[1] + newIp[2] + newIp[3], 2)
}
