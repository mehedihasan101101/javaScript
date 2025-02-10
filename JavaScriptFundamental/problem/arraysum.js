var age = [23,28,17,13,45,55,28,55,58,62,8,6,10,12,14];
var final = oddnumbersum(age);

// var sum=0;
// for (var i = 0; i < age.length;i++){
//    var eliment = age[i];
//    var sum = sum + eliment;
// //    console.log(eliment,sum)
// }

function oddnumbersum(ages){
   var sum = 0;
    for(i=0;i <ages.length;i++){
        var eliment = age[i];
        var check = eliment %2;
        if (check > 0){
             var sum= eliment+sum;
             console.log(sum);
        }
    }
}


