// let odd = [1,3,5,7,9]

// let even1 = odd.map(n => n+1);

// console.log(even1);

// //now in for loop

// let odd2 = [1,3,5,7,9]

//     let even =[];
//     for(odds of odd2){
    
//         operation1 = odds+1;
//         even.push(operation1)
//     }
//     console.log(even);

// //Problem2 

// let problem2 = [33,50,79,90,101,30];

// let answer2 =  problem2.filter(n1=> n1%10 == 0)

// console.log(answer2);
// //Problem3
// let problem3 = [33,50,79,90,101,30];

// let answer3 =  problem2.find(n2=> n2%10 == 0)

// console.log(answer3);

// //problem4 

// let instructor= [

//     {Name :"Nodi",Age:28,Position : "Senior"},
//     {Name :"Akil",Age:26,Position : "Junior"},
//     {Name :"Sobju",Age:30,Position : "Senior"}
// ]


// let seniorInstructors = instructor.filter(n4 => n4.Position == "Senior");

// console.log(seniorInstructors);



// let newArray = [1,2,4,5,6,7,8,9,0];

// newArray.splice(3,4);

// console.log(newArray);
const items = [
    { name: "Edward", value: 21 },
    { name: "Sharpe", value: 37 },
    { name: "And", value: 45 },
    { name: "The", value: -12 },
    { name: "Magnetic", value: 13 },
    { name: "Zeros", value: 37 },
  ];
  
  // sort by value
  items.sort((a, b) => a.value - b.value);
  
  // sort by name


console.log(items);
