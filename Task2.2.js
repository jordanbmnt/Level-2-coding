function triangle(input, mode){
    let i = 0;
    let negToPos = (input * -1)
    let str = "";
    if(mode == "left"){
        if(input > 0){
            while(i < input){
                str += "#";
                console.log(str);
                i ++;
            }
        }
        else if (input < 0){
            while(i < negToPos){
                let negStr = "#";
                let rptStr = negStr.repeat(negToPos);
                console.log(rptStr)
                negToPos--;
            }
        }
    }else if(mode == "right"){
            let counter = input;
            let space = " ";
            while(i < input){
                let addSpaces = space.repeat(counter-1);
                str += "#";
                i ++;
                counter= counter -1;
                retStr = addSpaces+str;
                console.log(retStr);
            }
    }else if(mode == "isosceles"){
        if(input > 0){
            let i = 1;
            let counter = input;
            let space = " ";
            let strInput = "#";
            while(i <= input){
                let addSpaces = space.repeat(counter-1);
                let ouptutVar = (i * 2)-1;
                let repeater = strInput.repeat(ouptutVar);
                let outputStr = addSpaces+repeater+addSpaces
                console.log(outputStr)
                i++;
                counter= counter -1;
            }
        }else if (input < 0){
            let i = negToPos;
            let counter = 0;
            let space = " ";
            let strInput = "#";
            while(i > 0){
                let addSpaces = space.repeat(counter);
                let ouptutVar = (i * 2)-1;
                let repeater = strInput.repeat(ouptutVar);
                let outputStr = addSpaces+repeater+addSpaces
                console.log(outputStr)
                i--;
                counter++;
            }
        }
    }
    else if(input > 0){
        while(i < input){
            str += "#";
            console.log(str);
            i ++;
        }
    }
    else if (input < 0){
        while(i < negToPos){
            let negStr = "#";
            let rptStr = negStr.repeat(negToPos);
            console.log(rptStr)
            negToPos--;
        }
    }
}
triangle(5);
triangle(-5);
triangle(5,"left");
triangle(5,"right");
triangle(-5,"isosceles");
triangle(5,"isosceles");