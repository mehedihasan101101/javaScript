let number1 = 20;
let number2 = 20;

console.log("Sum of"+number1+"and"+number2+"is"+number1+number2);
// if we do console log now every things will massed. there will be no space and the math operation will happen as string.
// now lets use es6 method to solve this issue.
console.log(`Sum of ${number1} and ${number2} is ${number1+number2}`);

//now see console log you will be amazed by seeing the beauty. got it man ..


//lets see some using of backtick on array and objects. 

let firstArray= [1,2,3,4,5,6,7,8,8];

let sanjina = { Name:"Sanjina",
    Age:25,
    Boyfriend : "Mehedi",
    Husband : "Mehedi"
}

console.log(`Array ta k dekha${firstArray}
    Name of ${sanjina.Name} boyfriend is ${sanjina.Boyfriend};
    `)