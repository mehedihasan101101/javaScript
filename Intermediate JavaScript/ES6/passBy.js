function doSum(a,b){
    a = 2;
    return(a+b);
}
let num1 = 1;
let num2 = 3;
let values = doSum(num1,num2);
console.log(values);
console.log(num1)

//now you will see the value of num1 will not change though we changed it inside the function. For primitive variable it pass by value that is why it won't change.


function couple(x,y){
    x.Name = "Akter"
   return(`${x.Name} is boyfriend of ${y.Name}`)
}

let student1 = {Name:"Mehedi"};
let student2= {Name:"Sanjina"};
let info = couple(student1,student2);
console.log(info);
console.log(student1)

//you will see the value of the student1 is changed out of the function scope. because for non primitive variable it pass by reference that is why it changed
