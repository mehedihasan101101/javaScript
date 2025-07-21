import { useContext, useState } from "react";
import { Link, Outlet } from "react-router";
import { AutContext } from "../../context/authContext";


const Login = () => {
    const { handleLogin, sendVerification } = useContext(AutContext);
    const [reSendVerification, setReSendVerfication] = useState(false)
    const [loginError, setLoginError] = useState("")
    const [success, setSuccess] = useState(false);

    function handleLoginUser(e) {
        e.preventDefault()
        setReSendVerfication(false);
        setLoginError("");
        setSuccess(false);
        const email = e.target.email.value;
        const password = e.target.password.value;

        handleLogin(email, password)
            .then(result => {
                console.log(result)
                if (!result.user.emailVerified) {
                    setReSendVerfication(true);
                    setLoginError("Please verify your Email to Login!")
                }
                else {
                    setSuccess(true);
                    console.log(result.user);
                }


            })
            .catch(error => {
                setLoginError(error.message)
            })

    }

    return (
        <div className="flex items-center w-full justify-center ">

            <div className="card bg-base-100 w-full max-w-sm  shadow-2xl mt-20">
                <h1 className="text-center text-3xl font-bold mt-5">Login</h1>
                <Outlet context={{ reSendVerification, loginError, success, handleLoginUser, sendVerification }}></Outlet>
            </div>

        </div>
    );
};

export default Login;