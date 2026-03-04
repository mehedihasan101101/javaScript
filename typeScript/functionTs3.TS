// writing function in ts. it is mandatory in ts to define value of the arguments of a function.

function doSum(a: number = 1, b: number = 1) {
    return a + b;
}

let result = doSum(5, 6);

console.log(result);

// writing function by defining expected outcome
function totalAmount(product1: number, product2: number): number {
    return product1 + product2;
}

totalAmount(1, 2)

export { }