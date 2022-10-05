var readline = require('readline-sync')

var currentfloor=5 //目前樓層
var targetfloor //目標樓層
const top=6 //最高樓
const bottom=1 //最低樓

do{
    targetfloor = readline.question('Elevator now at'+currentfloor+'.Ur target?')
    if(targetfloor>=bottom && targetfloor<=top){
        console.log('OK')
        //電梯移動
        if(targetfloor < currentfloor){
            console.log("down...")
            while(targetfloor<currentfloor){
                currentfloor -= 1
            }
        }else if(targetfloor > currentfloor){
            console.log("up...")
            while(targetfloor>currentfloor){
                currentfloor += 1

            }
        }
        else{
            console.log("stop!!!!!")
            break
        }
    }
    else{
        console.log('again')
    }

}while(1)
