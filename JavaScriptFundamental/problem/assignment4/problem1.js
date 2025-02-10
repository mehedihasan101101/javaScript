function mindGame(number){
    if (typeof number !== "number"){
        console.log("please inout a positive number");
    }
    else{
    let firstOperation = (number*3)+10;
    let secondOperation = (firstOperation/2)-5;
    console.log(secondOperation)}
}
var finalResult= mindGame(5);



