// writing function in ts. it is mandatory in ts to define value of the arguments of a function.
function doSum(a, b) {
    if (a === void 0) { a = 1; }
    if (b === void 0) { b = 1; }
    return a + b;
}
var result = doSum(5, 6);
console.log(result);
