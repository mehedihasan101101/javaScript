//we use trim,Uppercase/lowercase while comparing betweeen variables.

let sanjine = "Beautiful" ;
let mehedi = "beautiful";

if(sanjine==mehedi){
    console.log("Aso biya kori")
}
else{
    console.log("sorry side a jao ")
}

//in console log now  will apply else. Because of case sensitiveness.


//Solved

//we use trim,Uppercase/lowercase while comparing betweeen variables.


if(sanjine.toLowerCase==mehedi.toLowerCase){
    console.log("Aso biya kori")
}
else{
    console.log("sorry side a jao ")
}

//we use .trim after variable name to compare to variable without counting spacing 