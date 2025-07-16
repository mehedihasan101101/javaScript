import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../../firebase/firebase.int.js";
import { useState } from "react";

const Login = () => {
    const provider = new GoogleAuthProvider();
    const Gitprovider = new GithubAuthProvider();

    // google login
    const [userInfo, SetUserInfo] = useState(null);
    function handleGoogleSignin() {
        console.log(auth, provider)
        signInWithPopup(auth, provider)

            .then((result) => {
                SetUserInfo(result.user);
                console.log(userInfo)
            })

            .catch((error) => {
                console.log(error);
            })
    }

    function handleSignOut() {
        signOut(auth)
            .then(() => {
                SetUserInfo(null)
                console.log("log Out Done")
            })
            .catch(error => {
                console.log(error)
            })
    }
    // git hub login
    function handleGithubLogin() {
        signInWithPopup(auth, Gitprovider)
            .then((result) => {
                SetUserInfo(result.user);
                console.log(result.user)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <div className="flex flex-col items-center">
            {
                userInfo ? <button onClick={handleSignOut} className="border border-gray-300 rounded py-2 px-2 cursor-pointer">Sign Out</button> :
                    <>
                        <button onClick={handleGoogleSignin} className="border border-gray-300 rounded py-2 px-2 cursor-pointer">Log in with Google</button>
                        <button onClick={handleGithubLogin} className="border border-gray-300 rounded py-2 px-2 cursor-pointer">Log in with Github</button>
                    </>

            }



            {userInfo &&
                <div className="border mt-4 border-green-200 rounded p-3 flex items-center flex-col space-y-1 justify-center">

                    <img className="rounded-full" src={userInfo.photoURL} alt="" />
                    <h5>{userInfo.displayName}</h5>
                    <h6>Email: {userInfo.email}</h6>
                </div>
            }
        </div>
    );
};

export default Login;