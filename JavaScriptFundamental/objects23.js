var Mehedi = {
    Name : "MehediHasan",
    Sex : "Male",
    Wife : "SanjinaAkter"
}
var Sanjina = {
Name : "SanjinaAkter",
Sex: "Male",
Husband: "MehediHasan"
}
// console.log(Mehedi,Sanjina)

var laptop = {
    Name: "Lenovo",
    model: 123,
    Ram:12,
    Cpu : 7
}

var system1 = laptop.Name;
console.log(system1);

var system2= laptop["model"];
console.log(system2);

var system3 = Object.keys(laptop);
console.log(system3);
var system4 = Object.values(laptop);
console.log(system4);

// value change of Object properties

laptop.Cpu = 8;
console.log(laptop);

//alternative way of changing value of a object

laptop['Cpu'] = 9;
console.log(laptop)
//different way to declear an object:

var pc = {name : "pcic",Brand:"asus"}
pc.model = 222;
var consol = Object.create({})


console.log(consol)


