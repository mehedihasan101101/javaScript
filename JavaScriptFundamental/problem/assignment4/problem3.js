function isLGSeven(number){
    const operation1 = number - 7;
    if(typeof number !=="number"){
        console.log("Please input a number")
    }
    else if(operation1<7){
        console.log(operation1);
    }
    else{
        console.log(number*2);
    }
}
isLGSeven();