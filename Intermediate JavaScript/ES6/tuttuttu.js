let gg =[1,24,56,753,54,66,77]
console.log(...gg);
//for using three dot in console.log only numbers inside the arrow will be shown.

//now lets do something with these spread operator tut tut.

let hisamari = [1,2,3,4,5,6,4,5,33];

let jarumari =  hisamari;

jarumari.push(222222222);

console.log(hisamari,jarumari)

// in the console log you will see jharumari and hisamari 2 tar modda e push hoisa. but amra tw marsi shudu jarumari ra..

//Let fix this motherf with spread operator tut tut tut ....

let lifeSes = [2,3,6,6,44,33,324,5667]

let kuttaLife = [...lifeSes]
//akhane ja hoisa tuttuttut use korar karone shudu lifeses arraw are bitorer number ta nise full array nay ni.. tai akhon kuttaLife a push korle life ses a change hbe na

kuttaLife.push(222222222222222222);

console.log(kuttaLife,lifeSes)