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
            console.log("down...") //電梯向下
            while(targetfloor<currentfloor){
                currentfloor -= 1 //目前電梯往目標樓層向下減
            }
        }else if(targetfloor > currentfloor){
            console.log("up...") //電梯向上

            while(targetfloor>currentfloor){
                currentfloor += 1 //目前電梯往目標樓層向上加

            }
        }
        else{
            console.log("stop!!!!!")
            break //電梯停止
        }
    }
    else{
        console.log('again')
    }

}while(1)
