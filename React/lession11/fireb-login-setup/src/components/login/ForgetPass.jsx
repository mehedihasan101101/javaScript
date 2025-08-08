import { useContext, useState } from "react";
import { AutContext } from "../../context/authContext";

const ForgetPass = () => {
    const { handleResetPass } = useContext(AutContext);
    const [success, setSuccess] = useState(false)

    function handleRecovery(e) {

        e.preventDefault()
        setSuccess(false)
        const email = e.target.email.value;
        handleResetPass(email)
            .then(() => {
                setSuccess(true);
            })

    }
    return (
        <div className="card-body">
            <form onSubmit={handleRecovery} className="fieldset">
                <label className="label">Email</label>
                <input type="email" name="email" className="input" placeholder="Email" />

                {success && <p>Check your inbox to Rest Password</p>}
                <button type="submit" className="btn btn-neutral mt-4">Send</button>
            </form>
        </div>
    );
};

export default ForgetPass;