var earning = {
    january: 700,
    februar: 800,
    march: 900,
    april: 800,
    may:1800
}
var months = Object.keys(earning);
var salaries = Object.values(earning);

for(i=0;i <months.length;i++){
    var salary = salaries[i]; 
    var month = months[i];
   // console.log(month,salary)
}


var sanjina = {
    Age : 25,
    Name : "Sanjina Akter",
    Nationality : "Bangladeshi",
    Color : "Brown"
}

for (const shajon in sanjina){
    let valuess = sanjina[shajon]
    console.log(shajon,":",valuess)
}