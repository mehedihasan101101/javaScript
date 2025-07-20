
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import auth from "../../firebase/firebase.init";
import { useState } from "react";
import { Link } from "react-router";

const SignUp = () => {

    const [userError, setUserError] = useState("");
    const [accountSuccess, setAccountSuccess] = useState(false);
    // this regex has been generated from ChatGtp to validate password
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).+$/;

    function handleSignUp(e) {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const terms = e.target.checkbox.checked;



        setAccountSuccess(false);
        // Clear previous error
        setUserError("")
        // Check password against regex
        if (!regex.test(password)) {
            setUserError("password must contain one upper case,one lower case,one special character")
            return
        }
        if (password.length < 6) {
            setUserError("password must be 6 characters")
            return
        }

        if (!terms) {
            setUserError("Please accept out terms & conditions to proceed");
            return
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result)
                //sending verification email to user
                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        console.log("email has been sent")
                    })
                setAccountSuccess(true);
            })
            .catch(error => {
                setAccountSuccess(false);
                setUserError(error.message);
            })

    }
    return (
        <>
            <div className="flex items-center w-full justify-center ">

                <div className="card bg-base-100 w-full max-w-sm  shadow-2xl mt-20">
                    <h1 className="text-center text-3xl font-bold mt-5">Sign Up</h1>
                    <div className="card-body">
                        <form onSubmit={handleSignUp} className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" name="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" name="password" className="input" placeholder="Password" />
                            {userError && <p>{userError}</p>}

                            {accountSuccess && <p>You have signed up successfully.</p>}

                            <label className="label mt-1">
                                <input type="checkbox" name="checkbox" className="checkbox" />
                                accept terms & and conditions
                            </label>
                            <p>Already have an account? <Link className="text-blue-500" to={"/login"}>Login</Link></p>
                            <button type="submit" className="btn btn-neutral mt-4">Sign up</button>
                        </form>
                    </div>
                </div>

            </div>


        </>




    );
};

export default SignUp;