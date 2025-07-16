
const ReUseAbleForm = ({formName,handlDiffSubmit}) => {
    function handleSubmit(e){
        e.preventDefault();
        const data = {
            FirstName : e.target.fristName.value,
            LastName : e.target.lastName.value
        }
        handlDiffSubmit(data)
    }
    return (
        <div>
            <h2>{formName}</h2>
            <form onSubmit={handleSubmit} action="">

                <label htmlFor="fristName">First Name</label><br></br>
                <input  id="fristName" type="text" name="firstName" /><br></br>
                <label htmlFor="lastName">Last Name</label><br></br>
                <input  id="lastName" type="text" name="lastName" /><br></br>

                <input type="submit" value="Submit" />


            </form>
        </div>
    );
};

export default ReUseAbleForm;