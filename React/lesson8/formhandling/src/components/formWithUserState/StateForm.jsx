import { useState } from "react";



const StateForm = () => {
    function handleSubmit(e) {
        e.preventDefault()
        console.log(firstName)
    }
    const [firstName, setFirstName] = useState("")
    function handleFirstName(e) {
        setFirstName(e.target.value)
    }


    return (
        <div>
            <form onSubmit={handleSubmit}   action="">
            <label htmlFor="firstName" >First Name</label><br></br>
            <input onChange={handleFirstName} id='firstName' type="text" /><br></br>

            <label htmlFor="lastName">Last Name</label><br></br>
            <input id='lastName' type="text" /><br></br>

            <label htmlFor="EmailId">Email</label><br></br>
            <input id='EmailId' type="text" /><br></br>

            <label htmlFor='PasswordF'>Password</label><br></br>
            <input type="password" id="PasswordF" /><br></br>

            <input type="submit" value="submit" />
        </form>
        </div >
    );
};

export default StateForm;