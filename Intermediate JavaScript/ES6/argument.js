//argument can be used only inside a function
function arg(a,b,c){
    console.log(arguments);

        
    let makeArray = [...arguments]//an array has been made using arguments
    console.log(makeArray);
    return(a+b+c);
}

let math = arg(1,2,3,6,78,88);
console.log(math);

//in this written function (abc) is the parameter of the function and for this parameter we give values. these values are called arguments. 