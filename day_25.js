function convertToRoman(num) {
  let value = num
  let roman =''
 let thousands = Math.floor(value / 1000)
 value = value - thousands * 1000
 let hundreds = Math.floor(value / 100)
 value = value - hundreds * 100
 let tens = Math.floor(value / 10)
 value = value - tens * 10

 let one = ['','I','II','III','IV','V','VI','VII','VIII','IX']
 let ten = ['','X','XX','XXX','XL','L','LX','LXX','LXXX','XC']
 let hundred = ['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM']
 let thousand = ['','M','MM','MMM','MMMM']

 roman = thousand[thousands] + hundred[hundreds] + ten[tens] + one[value]
 return roman

}

convertToRoman(400)
