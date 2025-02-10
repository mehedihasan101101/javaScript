function evenOdd(num){
    if(num==0){
        return true;
    }
    else if(num>0){
        return false;
    }
}
var input=8;
var result = input%2;
var final =evenOdd(result);
console.log(final);
