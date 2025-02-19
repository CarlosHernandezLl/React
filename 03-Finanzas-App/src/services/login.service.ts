import { auth } from "@/firebase/config";
import { createUserWithEmailAndPassword, FacebookAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

// interface LoginData {
//     email: string;
//     password: string;
// }

export const doCreateUserWithEmailAndPassword = async (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
}

export const doSignInWithEmailAndPassword = (email: string, password: string) => {

    return signInWithEmailAndPassword(auth, email, password);
}

const provider = new GoogleAuthProvider();
export const doSignInWithGoogle = async () => {

    return await signInWithPopup(auth, provider);

}

const providerFacebook = new FacebookAuthProvider();
export const doSignInWithFacebook = async () => {
    return await signInWithPopup(auth, providerFacebook);
}

export const doLogout = async () => {
    sessionStorage.clear();
    return await auth.signOut();

}