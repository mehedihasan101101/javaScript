const myArray = [1, 2, 3, 4, 5];

const use = myArray.forEach(n=>console.log(n));

console.log(use)

//in console log we will see "undefined" for each used to modify an array without returing noting.

const newArray = [10, 20, 30, 40, 50];

const filtered = newArray.filter(n=> n<15)

console.log(filtered);

//arrray filter korar jonno filter use kora hoi condition ar upor base kore.

const anotherArray = [100, 200, 300, 400, 500];

const more = anotherArray.find(x => x>100)

console.log(more);

//find hossa filter ar khalatw vai,find filter kore shudu protom element ta diba na hole undefined return korbe.

