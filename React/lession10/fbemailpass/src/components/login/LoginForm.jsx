import { Link, useOutletContext } from "react-router";


const LoginForm = () => {
    const { handlelogin, success, loginError } = useOutletContext();

    console.log(handlelogin)
    return (
        <div className="card-body">
            <form onSubmit={handlelogin} className="fieldset">
                <label className="label">Email</label>
                <input type="email" name="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input type="password" name="password" className="input" placeholder="Password" />
                {success && <p>Login Successful</p>}
                {loginError && <p>{loginError}</p>}
                <p><Link to={"resetpassword"}>Forget Password</Link></p>
                <p>Don't have an account? <Link to={"/signup"} className="text-blue-500">Sign up</Link></p>
                <button type="submit" className="btn btn-neutral mt-4">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;