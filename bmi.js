var readline = require('readline-sync')

while(ture) {
    var height = readline.question("your height")
      if(isNaN(height)|| height<10 || height>200){
        console.log("please...")
        continue
      }
      var weight = readline.question("your weight")
if(isNaN(weight)|| weight<10 || weight>200){
    console.log("please...")
    continue

    }
}

var bmi=weight/[(height/100)*(height/100)]
console.log("your height:"+height + 'your weight:'+weight)
console.log("your bmi:=" + bmi)