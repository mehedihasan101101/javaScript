
//CHECK LENGTH OF AN ARRAY
var ageOfStudents = [12,15,18,20,22,21]
console.log(ageOfStudents);
console.log(ageOfStudents.length);

// value change and index

var ageOfEmployes = [12,15,18,20,22,21]

console.log(ageOfEmployes[1]);

ageOfEmployes[3]=111;

console.log(ageOfEmployes)

var positionOfEliment= ageOfEmployes.indexOf(22);
console.log(positionOfEliment);

// New eliment add and out in a array in the last.

var gfNames= ['Sanjina','Jorina','Rubina']
gfNames.push('Halima');

console.log(gfNames)

gfNames.pop();

console.log(gfNames)

var fruits= ['apple' , 'Banana' , 'Orange'];

var i = fruits.indexOf('Banana');

console.log(i);

//add and deduct element from the begging of an array. 

let ageGroupOfStudents =[15,15,17,15,18,12,14];

ageGroupOfStudents.unshift('Ghumailam');

console.log(ageGroupOfStudents);

ageGroupOfStudents.shift('Ghumailam');
console.log(ageGroupOfStudents);
//the way of checking if there is a value in a array by using include. 

let studentName = ["rafiq","salam","jabbar","rofid"];

console.log(studentName.includes("salam"));

//the way to know index of value in an array

let salary = [1000,1200,900,800];

console.log(salary.indexOf(900));

//how to check if a variable is array 

console.log(Array.isArray(salary));