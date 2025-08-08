import { useContext } from "react";
import { Link } from "react-router";
import { AutContext } from "../../context/authContext";


const Nav = () => {
    const { user, handleLogOut } = useContext(AutContext);



    console.log(user);
    return (
        <div className="navbar bg-base-100 shadow-sm px-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><Link to={""}>Home</Link></li>
                        <li><Link to={"register"}>Sign Up</Link></li>
                        <li><Link to={"login"}>Login</Link></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to={""}>Home</Link></li>
                    <li><Link to={"register"}>Sign Up</Link></li>
                    <li><Link to={"login"}>Login</Link></li>
                </ul>
            </div>


            {user ?

                <div className="dropdown dropdown-end navbar-end ">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src={user.photoURL} />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-43 w-52 p-2  shadow">
                        <li>
                            <Link to={"profile"} className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </Link>
                        </li>
                        <li><Link onClick={handleLogOut}>Logout</Link></li>
                    </ul>
                </div>


                :


                <div className="navbar-end">
                    <Link to={"login"} className="btn">Login</Link>
                </div>
            }
            {/* profile */}

        </div>
    );
};

export default Nav;