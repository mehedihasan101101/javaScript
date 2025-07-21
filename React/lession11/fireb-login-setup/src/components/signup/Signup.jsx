import { useContext, useState } from "react";
import { AutContext } from "../../context/authContext";
import { Link } from "react-router";

const Signup = () => {
    const { passwordSignup, sendVerification, addUserInfo } = useContext(AutContext);

    const [signUpError, setSignUpError,] = useState("");
    const [success, setSuccess] = useState(false)

    function handleSignUp(e) {
        e.preventDefault()

        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const imageLink = e.target.image.value;
        const phone = e.target.phone.value;
        const terms = e.target.checkbox.checked;

        setSignUpError("");
        setSuccess(false);

        if (!terms) {
            setSignUpError("Please accept the Terms and Conditions to proceed.")
            return;
        }

        // Call the passwordSignup function to create a new user with the provided email and password
        passwordSignup(email, password)
            .then(result => {
                console.log(result);
                //send verification
                sendVerification()
                    .then(() => {
                        setSuccess(true);
                    })
                //user profile update
                addUserInfo(name, imageLink, phone)
                    .then(() => {
                        console.log("profile updated")
                    })
            })
            .catch(error => {
                console.log(error);
            })


    }

    return (
        <div className="flex items-center w-full justify-center ">

            <div className="card bg-base-100 w-full max-w-sm  shadow-2xl mt-20">
                <h1 className="text-center text-3xl font-bold mt-5">Sign Up</h1>
                <div className="card-body">
                    <form onSubmit={handleSignUp} className="fieldset">
                        <label className="label">Name</label>
                        <input type="text" name="name" className="input validator" required placeholder="Name" />



                        <label className="label">Image</label>
                        <input type="url" name="image" className="input validator" required placeholder="https://"
                            pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9-].*[a-zA-Z0-9])?.)+[a-zA-Z].*$"
                            title="Must be valid URL" />



                        <label className="label">Phone</label>
                        <input type="text" name="phone" className="input validator" required placeholder="Phone" />

                        <label className="label">Email</label>
                        <input type="email" name="email" className="input validator" required placeholder="Email" />

                        <label className="label">Password</label>
                        <input type="password" name="password" className="input validator" required placeholder="Password" minlength="8"
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                            title="Must be more than 8 characters, including number, lowercase letter, uppercase letter" />


                        <label className="label mt-1">
                            <input type="checkbox" name="checkbox" className="checkbox" />
                            accept terms & and conditions
                        </label>


                        {signUpError && <p>{signUpError}</p>}
                        {success && <p>We've sent a verification email to your inbox. Please verify your email to activate your account.</p>}
                        <p className="label">Already have an account? <Link className="text-blue-500" to={"/login"}>Login</Link></p>
                        <button type="submit" className="btn btn-neutral mt-4">Sign up</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Signup;