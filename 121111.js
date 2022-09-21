
var readline = require('readline-sync')

var height = readline.question("身高")
var weight = readline.question("體重")
var bmi = (weight*weight)/[(height/10)*(height/10)]
//console.log("你身高"+height + '\n,weight:'+weight)
console.log("your bmi=" + bmi)