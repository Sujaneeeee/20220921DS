
var readline = require('readline-sync')

var height = readline.question("your height")
var bmi = readline.question("your bmi")
var weight=bmi*[(height/100)*(height/100)]
console.log("你身高"+height + 'bmi'+bmi)
console.log("your weight=" + weight)