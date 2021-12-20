function square(num, string){
    const originalStr = "#";
    let counter = num;
    let str = string;
    let output = "";

    if(typeof num === "number" && typeof string === "string"){
        while(counter > 0){
            output += str;
            counter--;
        }
        while(num > 0){
            console.log(output);
            num--;
        }
    }else if(typeof num === "number"){
        while(counter > 0){
            output += originalStr;
            counter--;
        }
        while(num > 0){
            console.log(output);
            num--;
        }
    }else if(typeof num === "string"){
        console.log(num);
    }
  
}
square("#")
square(3)
 square(4, "*")