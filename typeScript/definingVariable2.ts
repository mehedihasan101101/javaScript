// you always do not have to declare type of a variable. this is a bad practice.
// for example

var age = 22;

age = "23";  // here as you can see ts is automatically expecting a number and i have not mentioned the type.

// here is an example when you should define the type

let totalStudent: number;

function numberOfStudent() {
    return "twelve"
}

totalStudent = numberOfStudent() // here the type can be any a number string anything. which is not ideal. to avoid this thing we can mention while defining the variable which value it has to be