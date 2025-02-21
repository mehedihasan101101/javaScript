function greet(name,callBack){
console.log("good Morning"+" " + name+","+callBack)
}

function greetIng(){
   return("how are you");
}

greet("Mehedi",greetIng());

//A callback function is a function that is passed as an argument to another function and is executed later, usually after a specific operation is completed.