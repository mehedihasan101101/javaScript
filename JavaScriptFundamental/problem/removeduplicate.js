var names = ["abul","Babul","KABUL","HABUL","Mabul","abul","Babul","KABUL","HABUL","Mabul"];
var fun = duplicatekick(names);
console.log(fun);


function duplicatekick(name){
    var i = 0;
    var final = [];
    while(i<names.length){
        var filter = names[i];
        i++;
        if(final.includes(filter) == false){
            final.push(filter);
        }
    }

    return final;

}