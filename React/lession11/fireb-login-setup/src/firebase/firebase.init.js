// for learning purpose i am using it in the client side

import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyConXbUvzS3KajeCpxLwGKMbyqz0dBkKAg",
    authDomain: "exploring-firebase-9bdea.firebaseapp.com",
    projectId: "exploring-firebase-9bdea",
    storageBucket: "exploring-firebase-9bdea.firebasestorage.app",
    messagingSenderId: "346198476965",
    appId: "1:346198476965:web:0e609fff106a8d7214654c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;