let dataset = [ -4, -9, -5, -33, -55,0 ]

function  findingBadData(data){
    var badDataAmount = 0;
    for(i=0;i<dataset.length;i++){
        let individulas = data[i];
        if(individulas<0){
            badDataAmount = badDataAmount +1;
        }
    }
    return badDataAmount;
}

const finalresult = findingBadData(dataset);
console.log(finalresult);