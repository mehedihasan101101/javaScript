

document.getElementById("match").addEventListener('keyup',function(event){
       
    let operation2 = event.target.value;

    let operation3 = document.getElementById("dltBtn");
    if(operation2 == "Delete"){
    
        operation3.removeAttribute("disabled");
    }
    else{
        operation3.setAttribute("disabled",true);
    }


})
let operation3 = document.getElementById("dltBtn");

operation3.onclick = function(){
    let operation4 = document.getElementById("culprit");

    operation4.innerText = "";
}
