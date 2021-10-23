function square(num, string){
    let counter = num;
    // let str = "#";
    let str = string;
    let output = "";

    while(counter > 0){
        output += str;
        counter--;
    }
    while(num > 0){
        console.log(output);
        num--;
    }
}
square(4,"*")