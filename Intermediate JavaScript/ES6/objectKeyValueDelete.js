let Sanjina = {
    Name:"Shajon Akter",
    Age: 24,
    Color: "Brown",
    Sex:"Female"
}
console.log(Object.keys(Sanjina),Object.values(Sanjina));

// now amra console log a object ar property and values gulo 2 ta array ar modda paya jabo. 

delete Sanjina.Sex;

console.log(Sanjina)

// Sanjina Object thake sex namok property ta delete hoye jabe. 


console.log(Object.entries(Sanjina))

//"entries" use korle amra object ar properties and value array hisabe pabo kintu arekta array ar modda.

Object.freeze(Sanjina);

//"Object.freeze" use korle object freeze hoye jabe ar kono value add delete change kisu e kora jabe na.
Object.seal(Sanjina);

//"object.seal" use korle kono property abd ba delete kora jabe na kintu existing properties gulo ka change kora jabe na.