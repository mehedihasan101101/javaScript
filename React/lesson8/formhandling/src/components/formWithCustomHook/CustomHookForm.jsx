import useInputState from "../../hooks/form_input_hook";

const CustomHookForm = () => {

    const [intialFirstNameValue, handleFirstNameInput] = useInputState("First Name")
    const [intialLastNameValue, handleLastNameInput] = useInputState("Last Name")
    function handleSubmit(e){
         e.preventDefault();
         console.log(intialFirstNameValue);
         console.log(intialLastNameValue);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}  action="">


                <label htmlFor="fristName">First Name</label><br></br>
                <input value={intialFirstNameValue} onChange={handleFirstNameInput} id="fristName" type="text" name="firstName" /><br></br>
                <label htmlFor="lastName">Last Name</label><br></br>
                <input value={intialLastNameValue}  onChange={handleLastNameInput} id="lastName" type="text" name="firstName" /><br></br>

                <input type="submit" value="Submit" />


            </form>
        </div>
    );
};

export default CustomHookForm;