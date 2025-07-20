

const Login = () => {
    return (
        <div className="flex items-center w-full justify-center ">

            <div className="card bg-base-100 w-full max-w-sm  shadow-2xl mt-20">
                <h1 className="text-center text-3xl font-bold mt-5">Login</h1>
                <div className="card-body">
                    <form className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" name="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" name="password" className="input" placeholder="Password" />

                        <label className="label mt-1">
                            <input type="checkbox" name="checkbox" className="checkbox" />
                            accept terms & and conditions
                        </label>
                        <button type="submit" className="btn btn-neutral mt-4">Login</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Login;