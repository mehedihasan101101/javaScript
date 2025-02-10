const mother = document.getElementById("Parent");
mother.addEventListener("click",function(event){
    event.target.parentNode.removeChild(event.target);
})

const addBtn = document.getElementById("addkor");
addBtn.addEventListener("click",function(){
    const parent = document.getElementById("Parent");
    const addLi = document.createElement("li");
    addLi.innerText= "new item";
    addLi.className = "items";
    parent.appendChild(addLi);
    addLi.addEventListener("click",function(event){
        event.target.parentNode.removeChild(event.target);
    });
 

}
)
