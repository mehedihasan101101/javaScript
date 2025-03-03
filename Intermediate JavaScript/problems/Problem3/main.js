// the function will show a joke on the message field name "tellJoke()"  after every 2 seconds and after 10
//Sec it will stops.
function tellJoke(){
    //get the message display div
    let Messagediv = document.getElementById("Messagediv")

    //a time interval is created which show the joke in every 2 sec 
    let clockId = setInterval(()=>{
        
        // Create an h5 element to hold the joke text
       const H5 = document.createElement("h5");
       H5.innerText =`Why do JavaScript developers hate undefined? Because it’s a "null" relationship!`;
       Messagediv.appendChild(H5);

    },2000)
    //a timeout is set to stop the time interval after 10 sec
    setTimeout(()=>{
            clearInterval(clockId);
    },10000)
    
}


