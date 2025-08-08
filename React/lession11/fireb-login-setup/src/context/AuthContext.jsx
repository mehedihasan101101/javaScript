import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { sendEmailVerification, updateProfile, signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from "firebase/auth";
const AutContext = createContext(null);


const AuthContext = ({ children }) => {
    const [user, setUser] = useState(null);

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
    //observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {

            if (currentUser) {
                setUser(currentUser);
            }
            else {
                console.log("user is Signed out")
            }

        })
        return () => {
            unsubscribe();
        }
    }, [])
    //password Recovery

    function handleResetPass(email) {
        return sendPasswordResetEmail(auth, email);
    }
    //logout 
    function handleLogOut() {
        return signOut(auth)
            .then(() => {
                setUser(null);
            })
    }
    const value = {
        passwordSignup,
        sendVerification,
        addUserInfo,
        handleLogin,
        user,
        handleLogOut,
        handleResetPass
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