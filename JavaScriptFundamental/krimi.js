// [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
function sum(bignumber){
    let gg = 0;
    let  dd =[];
    for(i=0;i<bignumber.length;i++){
        gg = gg+bignumber[i];
        dd.push(gg);
        
    }
  return dd
}

// let pp = sum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]);
// console.log(pp);

function sumOfEvenNumbers(value){
      operation = 0;
        for(const values of value){

          if(values%2 === 0){

            operation = operation + values;
          }
        }
 return operation
}

let init = sumOfEvenNumbers([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,]);
console.log(init)