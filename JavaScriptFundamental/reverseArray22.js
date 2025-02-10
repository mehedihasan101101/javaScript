//in this part we will learn reversing string and array


//lets revise an array.

let guests = ['rofiq','solim','halim','jabbar','fozol'];

console.log(guests.reverse());

//now lets reverse a string i hate this way of reverse..

let vision = "i will be come a full stack web developer";

reverse1 = '';
for (const value of vision){
    reverse1 =  value + reverse1;

}
console.log(reverse1);

//now lets reverse in an easy way. 

let mission ="lets full fill our goals"

let reverse2 = mission.split("");
console.log(reverse2.reverse().join(""));

// for loop diya kora jay 

let goal ="i will work everyday"
let reverse4= ""

for (var i = 0; i<goal.length;i=i+1){
    reverse3= goal[i];
    reverse4= reverse3+reverse4;

}
console.log(reverse4);
