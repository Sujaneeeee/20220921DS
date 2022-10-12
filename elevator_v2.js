var readline = require('readline-sync')

var currentfloor=1 //目前樓層
var targetfloor //目標樓層

var floorname = ['B2','B1','1','2','3','4','5','6'] //使用陣列將樓層編排

do{
    targetfloor = readline.question('Elevator now at'+floorname[currentfloor]+'.Ur target?') //將目標樓層使用陣列名稱顯示
    if(floorname.indexOf(targetfloor.toUpperCase())>0){    //使用者輸入到達樓層但程式碼依然用陣列跑
        console.log('OK')
        //電梯移動
        if(targetfloor < currentfloor){
            console.log("down...") //電梯向下
            while(targetfloor<currentfloor){
                currentfloor-- //目前電梯往目標樓層向下減
                console.log('Elevator now at:'+ floorname[currentfloor]) //電梯顯示目前樓層
            }
            break
        }else if(targetfloor > currentfloor){
            console.log("up...") //電梯向上

            while(targetfloor>currentfloor){
                currentfloor++ //目前電梯往目標樓層向上加
                console.log('Elevator now at:'+ floorname[currentfloor])
            }
            break
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
