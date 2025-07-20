import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.init";
import { useState } from "react";
import { Link, Outlet } from "react-router";
const Login = () => {
    const [success, setSuccess] = useState(false);
    const [loginError, setLoginError] = useState("");

    function handlelogin(e) {


        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        setSuccess(false);
        setLoginError("")

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                //preventing user to login without email verification
                if (!result.user.emailVerified) {
                    setLoginError("Please verify your email")
                }
                else {
                    setSuccess(true)
                    console.log(result)
                }

            })
            .catch(error => {
                setLoginError(error.message)
                console.log(error);
            })

    }


    return (
        <div className="flex items-center w-full justify-center ">

            <div className="card bg-base-100 w-full max-w-sm  shadow-2xl mt-20">
                <h1 className="text-center text-3xl font-bold mt-5">Login</h1>

                <Outlet context={{ handlelogin, success, loginError }}></Outlet>

            </div>

        </div>
    );
};

export default Login;