const complexObject = {
    name: "John Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        zip: "12345"
    },
    hobbies: ["reading", "gaming", "hiking"],
    education: [
        {
            degree: "Bachelors",
            field: "Computer Science",
            year: 2015
        },
        {
            degree: "Masters",
            field: "Software Engineering",
            year: 2018
        }
    ]
};

console.log(JSON.stringify(complexObject, null, 2));

let turnJson = JSON.stringify(complexObject);

//we used stringify to transform the object into a json string.

//now lets undo it.

let undoJson = JSON.parse(turnJson);
console.log(undoJson);