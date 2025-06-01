import { useEffect, useRef } from "react";

const UseRef = () => {
    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);

    useEffect(() => {
        firstNameRef.current.focus();
    }, [])

    function controllForm(e) {
        e.preventDefault();
        console.log(firstNameRef.current.value);
        console.log(lastNameRef.current.value);
    }

    return (
        <div>
            <form onSubmit={controllForm} action="">


                <label htmlFor="fristName">First Name</label><br></br>
                <input ref={firstNameRef} id="fristName" type="text" name="firstName" /><br></br>
                <label htmlFor="lastName">Last Name</label><br></br>
                <input ref={lastNameRef} id="lastName" type="text" name="firstName" /><br></br>

                <input type="submit" value="Submit" />


            </form>

        </div>
    );
};

export default UseRef;