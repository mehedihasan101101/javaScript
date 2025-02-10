let jogkoro = (a,b)=> a+b;

console.log(jogkoro(1,20));
//here is the arrow function with no parameter. 

let getpi = ()=> Math.PI;
console.log(getpi());

//now lets write a big arrow function.

let bigArrow = (x,y,z)=> {
    let plus = x+y+z;
    return plus;
}

console.log(bigArrow(1,2,3));
//if you want to get anything return from the arrow function you have to use second bracket and then write return. 
