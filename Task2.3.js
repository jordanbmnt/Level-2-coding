function columns(arr){
    let longest = 0;
    let i = 0;
    let array = [];
    for(words in arr){
        if(arr[words].length > longest){
            longest = arr[words].length;
        }
    }
    while(i < longest){
        for(words in arr){
            // console.log(arr[words][i]);
            let str = "";
            let output = str + arr[words][i];
            if(arr[words][i] == undefined){
                array.push(" ");
            }else{
                array.push(output);
            }
        }
        i++
        console.log(array.toString().split(",").join(" "));
        array.splice(0, array.length);
    }
}

columns(["Write","good","code","every","day"])