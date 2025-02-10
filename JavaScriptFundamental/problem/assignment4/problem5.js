function gemsToDiamond(num1,num2,num3){
   let operation1 = num1*21;
   let operation2 = num2*32;
   let operation3 = num3*43;
   let operation4 = operation1+operation2+operation3;
   if(operation4>=2000){
    let operation5 = operation4-2000;
    return operation5;
   }
   else{
    return operation4;
   }
}
var finalresult = gemsToDiamond();
console.log(finalresult);