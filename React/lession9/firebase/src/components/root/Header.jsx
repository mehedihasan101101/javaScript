import { NavLink } from "react-router";

const Header = () => {
    return (
        <div className="py-5">
            <NavLink to={"/"} className="py-3 px-4 rounded bg-gray-200 mr-4">Home</NavLink>
            <NavLink to={"/login"} className="py-3 px-4 rounded bg-gray-200 ">Account</NavLink>
        </div>
    );
};

export default Header;