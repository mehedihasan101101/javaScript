var salaries = [700,1200,1800,900,2700,2400,1100,1300,5000,3500,1400,1600,1300]
var i = 0;
while(i<salaries.length){
    var salary = salaries[i];
    i++;
    if(salary<1500){
        continue;
    }
    console.log(salary);
  
}
