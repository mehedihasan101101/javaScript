function inchToFeet(inches){
    var height = inches/12;
    return height;
}
var mehediHeight = 175;
var MehediFeet = inchToFeet(mehediHeight);
console.log(MehediFeet);