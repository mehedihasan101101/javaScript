import { createContext } from "react";

const AutContext = createContext(null);


const AuthContext = ({ children }) => {

    const value = {
        name: "Mehedi"
    };
    return (
        <>
            <AutContext.Provider value={value}>
                {children}
            </AutContext.Provider>
        </>
    );
};

export { AuthContext, AutContext };