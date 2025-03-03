// Write a Function called giveMessage() that takes two parameters, name and delayTime and show a message
//after the given delay times.
function giveMessage(Name,Delay){
    const messageBox = document.getElementById("MessageField")
        setTimeout(()=>{
            messageBox.innerText = `Hello,${Name}`
        },Delay)
}