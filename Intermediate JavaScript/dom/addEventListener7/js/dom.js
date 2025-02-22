let redBtn = document.getElementById("red");

redBtn.addEventListener('click',makeRed);

function makeRed(){
   document.body.style.backgroundColor = "red";

}
// ==================================================================================

let blueBtn = document.getElementById("blue");

blueBtn.addEventListener('click',function makeBlue(){
   document.body.style.backgroundColor = "blue";

}
)

// ================================================================================

let greenBtn = document.getElementById('green').addEventListener('click',function(){
   document.body.style.backgroundColor = "Green";
})

