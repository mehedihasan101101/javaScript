const Form = () => {
    function handleForm(e) {
        e.preventDefault();
        console.log(e.target.firstName.value)
        console.log(e.target.lastName.value)
        console.log(e.target.EmailId.value)
        console.log(e.target.PasswordF.value)

    }
    return (
        <div>
            <form onSubmit={handleForm} action="">
                <label htmlFor="firstName" >First Name</label><br></br>
                <input id='firstName' type="text" required /><br></br>

                <label htmlFor="lastName">Last Name</label><br></br>
                <input id='lastName' type="text" /><br></br>

                <label htmlFor="EmailId">Email</label><br></br>
                <input id='EmailId' type="text" /><br></br>

                <label htmlFor='PasswordF'>Password</label><br></br>
                <input type="password" id="PasswordF" /><br></br>

                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default Form;