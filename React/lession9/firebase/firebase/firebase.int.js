// for learning purpose i am using it in the client side

import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDloHenOsCMC_KJTNWOLxKW2ot2KNFuDzo",
    authDomain: "learninng-firebase.firebaseapp.com",
    projectId: "learninng-firebase",
    storageBucket: "learninng-firebase.firebasestorage.app",
    messagingSenderId: "1095366956234",
    appId: "1:1095366956234:web:43908a1f37b7669beb1033"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;