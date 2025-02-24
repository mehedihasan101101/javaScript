function loadCommets(){
    fetch('https://jsonplaceholder.typicode.com/comments')//I asked fetch to bring me all the comments.he went to the server and asked for comments and quickly 
    //came back with the promise. this moron did not wait to ensure if the promise is full filled or not and moved to next step(then).always in run. 

    .then(res => res.json())//ja e paisa akhon ata k jason a parse kore disa.
    .then(data => console.log(data))//kaj ses 
    .catch(error => console.error("Error Happned :",error))//error hole ata console log a diva
}

//now we are gonna do it with modern async process

async function  bringComments(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');//in this way i asked fetch to bring me comments he went request server for
        //comments and said i will not go to next step if you do  not full fill your promise. he waited.
        
        const allComments = await response.json();//he came back with resolved promise and asked to parse the commets in json and said make json or i will not go to 
        //next step
   
        console.log(allComments);
    }
    catch(error){
        console.error("error happened:", error)//error hole ata console log a diva
    }

}


//so the both of the process works. .then is an old way of fetching data but async is more modern which increase readability and make fetching more simple and easy to
//handle. async also helps to handle error more efficiently. .then do not wait it keep going to next step whether the promise is resolved or not. but async wait 
//and do not moved to next step until the promise is resolved