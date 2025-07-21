import { Link, useOutletContext } from "react-router";

const LoginFormm = () => {
    const { reSendVerification, loginError, success, handleLoginUser, sendVerification } = useOutletContext()
    return (
        <div className="card-body">
            <form onSubmit={handleLoginUser} className="fieldset">
                <label className="label">Email</label>
                <input type="email" name="email" className="input validator" required placeholder="Email" />
                <label className="label">Password</label>
                <input type="password" name="password" className="input" placeholder="Password" />
                <p className="label"><Link to={"recovery"}>Forget Password</Link></p>
                <p className="label">Don't have an account? <Link to={"/register"} className="text-blue-500 ">Sign up</Link></p>
                {loginError && <p className="label">{loginError} {reSendVerification && <Link className="text-blue-600" onClick={sendVerification}>Resend</Link>}</p>}
                {success && <p className="text-green-600">Login Successful!</p>}
                <button type="submit" className="btn btn-neutral mt-4">Login</button>
            </form>
        </div>
    );
};

export default LoginFormm;