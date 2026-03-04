//writing an object in ts is like the same as js
const user = {
    name: "Mehedi Hasan",
    age: 24,
    isMarried: true
}

//uses of object in ts in a function

function createUser(): { name: string, age: number, isMarried: boolean } {
    return { name: "mehedi", age: 25, isMarried: false }
}



export { }