let Sanjina = {
    age: 22,
    Name: "Sanjina",
    Nationality: "Bangladeshi",
    MaritalStatus : "Married"
}

//now we will be using destructuring so that we can use a value of the object multiple time.

let {age} = Sanjina;
let {MaritalStatus:LifeSes} = Sanjina;

console.log(LifeSes);
//colon ta use kore ami MaritalStatus are naam ar poriborte ami life ses use korlam.
console.log(age);
//now array ar bitore age name jai property ase setar value akhon "age" namok ai variable a set hoye jabe and we can use it multiple time.

//now lets do destructuring for an array.

const ageGroup = [12,23,24,44,53,23,21,34,21]

const [first,,,,fourth] = ageGroup;

//akhane ,,,, ar mane holo ami fourth value ta chaisi setar jonno coma use kore shamner gula skip korlam

console.log(fourth)

