document.getElementById("btnUpdate").addEventListener("click",function(){
        
    let opertation1 = document.getElementById("getValue");
    let opertation2 = opertation1.value;

    let opertation3 = document.getElementById("heda");
    opertation3.innerText = opertation2;
    opertation1.value = "";

})