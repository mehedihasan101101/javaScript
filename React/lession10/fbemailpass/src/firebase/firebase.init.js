// for practice purpose i am keeping it in the client size

import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDO0Kt6U_RCEnNitU1lJfgJYQrzDOmadeU",
    authDomain: "login-with-email-pass-practice.firebaseapp.com",
    projectId: "login-with-email-pass-practice",
    storageBucket: "login-with-email-pass-practice.firebasestorage.app",
    messagingSenderId: "1060743737772",
    appId: "1:1060743737772:web:c57b33dc6346f64ff40a09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;