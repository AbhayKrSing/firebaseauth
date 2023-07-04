// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, updateEmail, updatePassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEYS,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)      //creation auth instances using auth fn.
export const createAUser = createUserWithEmailAndPassword
export const OnAuthStateChange = onAuthStateChanged
export const SignInWithEmailAndPassword = signInWithEmailAndPassword;
export const SignOut = signOut;
export const SendPasswordResetEmail = sendPasswordResetEmail;
export const UpdateEmail = updateEmail;
export const UpdatePassword = updatePassword;
export default app