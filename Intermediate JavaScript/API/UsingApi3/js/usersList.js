//this function load users data from json placeholder 
function loadData(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => useData(data))
}
//with this function we display all the users name by clicking the 'All Users Name' button
function useData(data){

    const userNames = document.getElementById("allUsersList");
    for(users of data){
        let allUsers = users.name;
        let creatLi = document.createElement("li");
        creatLi.innerText = allUsers;
        userNames.appendChild(creatLi);
    }
}

