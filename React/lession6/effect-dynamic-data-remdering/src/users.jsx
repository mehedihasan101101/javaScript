import { useState, useEffect } from "react";


export default function AllUsers() {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data));

    }, []);
    
    return(
        <>
        {users.map(n => (
              <div>
                <h1>Name: {n.name} </h1>
                <p>Email: {n.email} </p>
                <p>Website: {n.website} </p>
              </div>
        ))}
        </>
    )


}                                                                                                                                                                                          