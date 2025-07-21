import { createContext } from "react";
import auth from "../firebase/firebase.init";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { sendEmailVerification, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
const AutContext = createContext(null);


const AuthContext = ({ children }) => {
    //create account
    function passwordSignup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //send verification
    function sendVerification() {
        return sendEmailVerification(auth.currentUser);
    }
    //update user profile
    function addUserInfo(displayName, photoURL) {
        return updateProfile(auth.currentUser, {
            displayName, photoURL
        })
    }
    //Login user
    function handleLogin(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const value = {
        passwordSignup,
        sendVerification,
        addUserInfo,
        handleLogin
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