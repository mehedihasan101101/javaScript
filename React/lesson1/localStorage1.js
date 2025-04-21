//this is the way to store data in the local storage and session storage.

function saveData(){
    const nameData = document.getElementById("name");
    const saveNameData = nameData.value;

    const UserIdData = document.getElementById("id");
    const saveUserIdData = UserIdData.value;


    localStorage.setItem(saveNameData,saveUserIdData)
    nameData.value ="";
    UserIdData.value="";
   
}