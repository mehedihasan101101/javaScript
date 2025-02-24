function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => usersPost(data))

}

function usersPost(post){
    const postContainer = document.getElementById("Post-Container");
    for(let posts of post){
        const eachPostDiv = document.createElement("div");
        eachPostDiv.innerHTML =`
        <h3>User Id:${posts.userId}</h3>
        <p>Title:${posts.title}</p>
        <p>Description:${posts.body}</p>
        `;
        postContainer.appendChild(eachPostDiv); 
        //styles for each post Div
        eachPostDiv.style.backgroundColor = "gray";
        eachPostDiv.style.padding = "5px";
        eachPostDiv.style.border = "1px solid black";
        eachPostDiv.style.borderRadius = "5px";
        eachPostDiv.style.margin = "2px";

    }


}