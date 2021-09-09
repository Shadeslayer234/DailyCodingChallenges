// Convert number to reversed array of digits


const digitize = n => n.toString().split('').reverse().map(x => Number(x))
