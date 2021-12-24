function triangle(input, mode){
    let i = 0;
    let negToPos = (input * -1)
    let str = "";
    if(mode == "left"){
        if(input > 0){
            posStrPrinter(i, input, str);
        }
        else if (input < 0){
            negStrPrinter(i, negToPos)
        }
    }else if(mode == "right"){
        rightTriangle(i,input,str);
    }else if(mode == "isosceles"){
        if(input > 0){
            aboveZeroIsosceles(input);
        }else if (input < 0){
            belowZeroIsosceles(negToPos); 
        }
    }
    else if(input > 0){
        posStrPrinter(i, input, str);
    }
    else if (input < 0){
        negStrPrinter(i, negToPos);
    }
}

const rightTriangle = (i, input, str) =>{
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
}


const aboveZeroIsosceles = (input) => {
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
}


const belowZeroIsosceles = (i) => {
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


const posStrPrinter = (index, inp, string) => {
    while(index < inp){
        string += "#";
        console.log(string);
        index ++;
    }
}


const negStrPrinter = (index, inp) => {
    while(index < inp){
        let negStr = "#";
        let rptStr = negStr.repeat(inp);
        console.log(rptStr)
        inp--;
    }
}


triangle(5);
triangle(-5);
triangle(5,"left");
triangle(5,"right");
triangle(-5,"isosceles");
triangle(5,"isosceles");