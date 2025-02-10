//using map not in a standard way..

let roll = [1,2,3,4,5,6,7,8,9,10];

function double(insert){
      return insert*2;
}

let newArray = roll.map(double)

console.log(newArray);

//lets use the standard way now.


const age = [12,11,12,22,12,223,32];

const AnewArray = age.map(n => n +2 );
console.log(AnewArray)


//practice 

const people = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Jim', age: 35 },
    { name: 'Jill', age: 28 },
    { name: 'Jack', age: 32 }
];

const names = people.map( y => y.name);

console.log(names)