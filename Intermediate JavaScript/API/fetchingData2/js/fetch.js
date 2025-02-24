//now we are going to fetch data FROM JASON PLACE HOLDER. 

fetch('https://jsonplaceholder.typicode.com/todos/1')
     .then(response=>response.json())
     .then(json => console.log(json))