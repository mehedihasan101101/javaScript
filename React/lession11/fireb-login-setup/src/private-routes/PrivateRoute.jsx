import { useContext } from "react";
import { AutContext } from "../context/authContext";
import { Navigate } from "react-router";


const PrivateRoute = ({ children }) => {
    const { user } = useContext(AutContext);

    if (user) {
        return children
    }
    return (
        <Navigate to={"/"}></Navigate>
    );
};

export default PrivateRoute;