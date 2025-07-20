import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../../firebase/firebase.init";
import { Link } from "react-router";

const ResetPass = () => {
    const [restError, setResetError] = useState("")
    const [success, setSuccess] = useState(false)
    function handleResetPass(e) {
        e.preventDefault();
        const email = e.target.email.value;
        setResetError("");
        setSuccess(false);
        if (!email) {
            setResetError("please write your email")
            return
        }
        sendPasswordResetEmail(auth, email)
            .then(() => {
                setSuccess(true);
            })

    }
    return (
        <div onSubmit={handleResetPass} className="card-body">
            <form className="fieldset">
                <label className="label">Email</label>
                <input type="email" name="email" className="input" placeholder="Email" />
                {restError && <p>{restError}</p>}
                {success && <p>A password reset link has been sent to your email! <Link to={"/login"} className="text-blue-500">Login</Link></p>}
                <button type="submit" className="btn btn-neutral mt-4">Send</button>
            </form>
        </div>
    );
};

export default ResetPass;