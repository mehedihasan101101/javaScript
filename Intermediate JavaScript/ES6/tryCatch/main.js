const inputAge = document.getElementById("age");// Input Field ;

 document.getElementById("btn").addEventListener("click",function(){   //EventListener added to verify Button;
        
        let showError = document.getElementById("ErrorField")//Error Field;
        const inputValue = inputAge.value;
        try{
            if (isNaN(inputValue) || inputValue == ""){
                throw "Please Input A Number"
            }

            else if(inputValue<18){
                throw ("Your are too young")
            }
            else if(inputValue>40){
                throw ("Your are too old")
            }
         
            showError.innerText = "Age Verified"
        }
        catch(error){
            showError.innerText = error;
            console.log("Error",error);
        }
        //finally task will be executed even there is an error. 
        finally{
            console.log("All Done");
        }

    });

    //the  purpose of using try and catch is to catch error  and let the code keep going on if there is even a error. because javaScript stop executing the further tasks if it found 
    //an error with cath and try we can catch the error and the next task will be accomplished too  



