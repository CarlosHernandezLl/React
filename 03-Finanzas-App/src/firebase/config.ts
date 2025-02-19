// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBgUYv_XPwgibTnKLvEe703P2MHYuzg93Y",
    authDomain: "personal-cbc62.firebaseapp.com",
    projectId: "personal-cbc62",
    storageBucket: "personal-cbc62.firebasestorage.app",
    messagingSenderId: "1035549821750",
    appId: "1:1035549821750:web:5e10bf78f4bf2cb43f8197"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };