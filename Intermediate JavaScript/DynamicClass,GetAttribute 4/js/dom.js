//Changing Style with javaScript
let hijibiji =  document.getElementById("krimi");

hijibiji.style.color ="red";

//uses of getAttribute

let rosogolla = document.getElementById("krimi2");

let bad = rosogolla.getAttribute('class');
console.log(bad)


//uses of class list

let hisamari = rosogolla.classList.add("lifeses");

console.log(rosogolla.classList)


//setting InnerHtml/Text

let duck = document.getElementById("top");

duck.innerHTML = "<h3>Tittle Set By Dom</h3>"


let du = document.getElementById("top2");

du.innerText = "Siyam gelo biyam korte set by dom "