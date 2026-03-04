type user = {
    name: string,
    age: number,
    isStudent: boolean
}

function createUser(user: user): user {
    return user
}
createUser({ name: "mehedi", age: 5, isStudent: true })

// so in terms of object type aliases make a object structure to be used.

//some other example

type age = number;
type name = string;

let age: age = 25;
let name: name = "Mehedi Hasan"

export { } 